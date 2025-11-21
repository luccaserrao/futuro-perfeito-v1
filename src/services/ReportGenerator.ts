import { GoogleGenerativeAI } from "@google/generative-ai";
import { GeneratedReport, ProfileKey } from "../types";

export const generateFullReport = async (
  userName: string,
  profileTitle: string,
  scorePercentage: number,
  careerKey: string,
  rawScores: Record<ProfileKey, number>
): Promise<GeneratedReport> => {
  // Initialize the old SDK (v0.3.0 style)
  const genAI = new GoogleGenerativeAI(process.env.API_KEY || '');
  
  // Use a model that is compatible
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    Você é um especialista em carreiras públicas e concursos no Brasil.
    Gere um relatório profissional detalhado em formato JSON para um candidato com o seguinte perfil:

    Nome: ${userName}
    Perfil Vocacional: ${profileTitle}
    Compatibilidade: ${scorePercentage}%
    Área Principal: ${careerKey}
    Pontuação Detalhada: ${JSON.stringify(rawScores)}

    O JSON deve seguir ESTRITAMENTE esta estrutura (sem markdown, apenas o JSON puro):
    {
      "introduction": "Texto de boas vindas personalizado e motivador",
      "profileAnalysis": "Análise comportamental profunda baseada no perfil ${careerKey}. Fale sobre pontos fortes e fracos.",
      "topCareers": [
        { "title": "Nome do Cargo", "compatibility": "Alta/Média", "description": "Por que combina" }
      ],
      "salaryAnalysis": {
        "range": "R$ X a R$ Y",
        "description": "Análise de remuneração da área"
      },
      "studyPlan": [
        { "step": "Passo 1", "description": "O que fazer" },
        { "step": "Passo 2", "description": "O que fazer" },
        { "step": "Passo 3", "description": "O que fazer" }
      ],
      "routine": "Descrição realista do dia a dia",
      "conclusion": "Mensagem final de encerramento"
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean up Markdown code blocks if the model returns them
    const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return JSON.parse(jsonStr) as GeneratedReport;
  } catch (error) {
    console.error("Erro ao gerar relatório com IA:", error);
    throw new Error("Falha na geração do relatório.");
  }
};