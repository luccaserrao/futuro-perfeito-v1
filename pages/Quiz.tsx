import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useQuiz } from '../context/QuizContext';
import { AppRoutes, Question, Option } from '../types';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Seo } from '../components/Seo';

const questions: Question[] = [
  {
    id: 1,
    text: "Como você prefere lidar com problemas no trabalho?",
    options: [
      { 
        label: "Analisando dados e planilhas complexas", 
        value: "fiscal-tech", 
        profiles: { fiscal: 1, tech: 1, admin: 0, police: 0, legal: 0 } 
      },
      { 
        label: "Agindo rapidamente em campo ou situações de risco", 
        value: "police", 
        profiles: { police: 1, admin: 0, fiscal: 0, legal: 0, tech: 0 } 
      },
      { 
        label: "Interpretando regras, leis e escrevendo pareceres", 
        value: "legal-admin", 
        profiles: { legal: 1, admin: 1, fiscal: 0, police: 0, tech: 0 } 
      },
      { 
        label: "Organizando processos e atendendo pessoas", 
        value: "admin", 
        profiles: { admin: 1, fiscal: 0, police: 0, legal: 0, tech: 0 } 
      },
    ]
  },
  {
    id: 2,
    text: "Qual ambiente de trabalho mais te atrai?",
    options: [
      { 
        label: "Um escritório calmo, focado em leitura e escrita", 
        value: "legal", 
        profiles: { legal: 1, admin: 0, fiscal: 0, police: 0, tech: 0 } 
      },
      { 
        label: "Ambiente dinâmico, externo, nunca igual", 
        value: "police", 
        profiles: { police: 1, admin: 0, fiscal: 0, legal: 0, tech: 0 } 
      },
      { 
        label: "Ambiente corporativo, focado em resultados financeiros", 
        value: "fiscal", 
        profiles: { fiscal: 1, admin: 0, police: 0, legal: 0, tech: 0 } 
      },
      { 
        label: "Atendimento ao público e suporte administrativo", 
        value: "admin", 
        profiles: { admin: 1, fiscal: 0, police: 0, legal: 0, tech: 0 } 
      },
    ]
  },
  {
    id: 3,
    text: "Qual matéria escolar você tinha mais facilidade?",
    options: [
      { 
        label: "Matemática, Física, Estatística", 
        value: "tech-fiscal", 
        profiles: { tech: 1, fiscal: 1, admin: 0, police: 0, legal: 0 } 
      },
      { 
        label: "História, Geografia, Educação Física", 
        value: "police", 
        profiles: { police: 1, admin: 0, fiscal: 0, legal: 0, tech: 0 } 
      },
      { 
        label: "Português, Literatura, Redação", 
        value: "legal", 
        profiles: { legal: 1, admin: 0, fiscal: 0, police: 0, tech: 0 } 
      },
      { 
        label: "Era mediano em tudo, mas muito organizado", 
        value: "admin", 
        profiles: { admin: 1, fiscal: 0, police: 0, legal: 0, tech: 0 } 
      },
    ]
  },
  {
    id: 4,
    text: "O que te motiva mais?",
    options: [
      { 
        label: "Estabilidade e rotina previsível", 
        value: "admin-legal", 
        profiles: { admin: 1, legal: 1, fiscal: 0, police: 0, tech: 0 } 
      },
      { 
        label: "Adrenalina e sensação de dever cumprido", 
        value: "police", 
        profiles: { police: 1, admin: 0, fiscal: 0, legal: 0, tech: 0 } 
      },
      { 
        label: "Altos salários e prestígio técnico", 
        value: "fiscal", 
        profiles: { fiscal: 1, admin: 0, police: 0, legal: 0, tech: 0 } 
      },
      { 
        label: "Justiça e defesa de direitos", 
        value: "legal", 
        profiles: { legal: 1, admin: 0, fiscal: 0, police: 0, tech: 0 } 
      },
    ]
  },
  {
    id: 5,
    text: "Como você lida com hierarquia?",
    options: [
      { 
        label: "Respeito total, gosto de cadeia de comando rígida", 
        value: "police", 
        profiles: { police: 1, admin: 0, fiscal: 0, legal: 0, tech: 0 } 
      },
      { 
        label: "Gosto de autonomia para tomar minhas decisões", 
        value: "fiscal", 
        profiles: { fiscal: 1, admin: 0, police: 0, legal: 0, tech: 0 } 
      },
      { 
        label: "Sigo regras, mas gosto de argumentar", 
        value: "legal", 
        profiles: { legal: 1, admin: 0, fiscal: 0, police: 0, tech: 0 } 
      },
      { 
        label: "Prefiro seguir instruções claras", 
        value: "admin", 
        profiles: { admin: 1, fiscal: 0, police: 0, legal: 0, tech: 0 } 
      },
    ]
  }
];

export const Quiz: React.FC = () => {
  const { setAnswer } = useQuiz();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleNext = () => {
    if (!selectedOption) return;

    setAnswer(currentQuestion.id, selectedOption);
    setSelectedOption(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finished
      navigate(AppRoutes.RESULT);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      navigate(AppRoutes.HOME);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Seo title="Teste Vocacional em Andamento" description="Responda as perguntas." />
      
      {/* Progress Bar Fixed Top */}
      <div className="fixed top-0 left-0 w-full h-2 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 flex-grow flex flex-col items-center justify-center py-10 max-w-3xl">
        
        {/* Header / Back */}
        <div className="w-full flex justify-between items-center mb-8 text-slate-400 text-sm font-medium uppercase tracking-wider">
          <button onClick={handleBack} className="flex items-center gap-1 hover:text-slate-600 transition-colors">
            <ChevronLeft size={16} /> Voltar
          </button>
          <span>Questão {currentQuestionIndex + 1} de {questions.length}</span>
        </div>

        {/* Question Card */}
        <div className="w-full animate-in slide-in-from-bottom-5 fade-in duration-500">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-10 text-center leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(option)}
                className={`w-full p-6 text-left rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group
                  ${selectedOption?.value === option.value 
                    ? 'border-primary-500 bg-primary-50 text-primary-900 shadow-md scale-[1.01]' 
                    : 'border-slate-200 bg-white text-slate-600 hover:border-primary-200 hover:bg-slate-50'
                  }`}
              >
                <span className="text-lg font-medium">{option.label}</span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${selectedOption?.value === option.value 
                    ? 'border-primary-500 bg-primary-500' 
                    : 'border-slate-300 group-hover:border-primary-300'
                  }`}
                >
                  {selectedOption?.value === option.value && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="w-full mt-12 flex justify-end">
          <Button 
            size="lg" 
            disabled={!selectedOption} 
            onClick={handleNext}
            className="w-full md:w-auto px-12 text-lg shadow-xl shadow-primary-500/20"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Ver Resultado' : 'Próxima Pergunta'} 
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};