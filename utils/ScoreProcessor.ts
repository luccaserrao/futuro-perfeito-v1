import { ProfileKey, CareerResult, Option } from '../types';

const PROFILE_DETAILS: Record<ProfileKey, Omit<CareerResult, 'key' | 'percentage'>> = {
  police: {
    title: "Carreira Policial",
    description: "Você possui um perfil dinâmico, resiliente e orientado para a ação. Carreiras policiais exigem raciocínio rápido, coragem e disciplina hierárquica.",
    skills: ["Resiliência", "Ação Rápida", "Disciplina", "Investigação"],
    recommendedRoles: ["Polícia Federal", "Polícia Civil", "Polícia Rodoviária", "Agente Penitenciário"]
  },
  fiscal: {
    title: "Carreira Fiscal",
    description: "Você tem afinidade com números, auditoria e legislação tributária. É um perfil analítico, detalhista e que busca alta remuneração.",
    skills: ["Análise de Dados", "Contabilidade", "Direito Tributário", "Auditoria"],
    recommendedRoles: ["Auditor da Receita", "Analista Tributário", "Fiscal de Rendas", "Controladoria"]
  },
  legal: {
    title: "Tribunais e Jurídico",
    description: "Você possui facilidade com leitura, interpretação de leis e argumentação. Valoriza a justiça e ambientes mais formais e intelectuais.",
    skills: ["Interpretação de Leis", "Escrita", "Argumentação", "Processos"],
    recommendedRoles: ["Técnico Judiciário", "Analista Judiciário", "Defensoria", "Ministério Público"]
  },
  admin: {
    title: "Administrativo",
    description: "Você é organizado, metódico e gosta de processos claros. É o motor que faz o serviço público funcionar com eficiência e atendimento.",
    skills: ["Organização", "Atendimento", "Gestão de Processos", "Redação Oficial"],
    recommendedRoles: ["INSS", "Assistente Administrativo", "Prefeituras", "Agências Reguladoras"]
  },
  tech: {
    title: "Tecnologia da Informação",
    description: "Você busca inovação e soluções lógicas. O governo digital cresce exponencialmente e precisa de profissionais que modernizem o estado.",
    skills: ["Lógica de Programação", "Banco de Dados", "Segurança da Informação", "Inovação"],
    recommendedRoles: ["Analista de T.I.", "Perito Criminal (Computação)", "Dataprev", "Serpro"]
  }
};

export const calculateDominantProfile = (answers: Record<number, Option>): CareerResult => {
  const scores: Record<ProfileKey, number> = {
    admin: 0,
    police: 0,
    fiscal: 0,
    legal: 0,
    tech: 0
  };

  // Sum weights from all answers
  Object.values(answers).forEach((option) => {
    if (option.profiles) {
      (Object.keys(option.profiles) as ProfileKey[]).forEach((key) => {
        scores[key] += option.profiles[key];
      });
    }
  });

  // Find max score
  let maxScore = 0;
  let dominantKey: ProfileKey = 'admin';

  (Object.keys(scores) as ProfileKey[]).forEach((key) => {
    if (scores[key] > maxScore) {
      maxScore = scores[key];
      dominantKey = key;
    }
  });

  // Normalize to percentage (approximate)
  const totalPossiblePerProfile = Object.keys(answers).length * 3; // Assuming max weight is 3 per q
  const percentage = Math.min(100, Math.round((scores[dominantKey] / totalPossiblePerProfile) * 100));

  return {
    key: dominantKey,
    percentage: percentage > 60 ? percentage : 75, // Boost confidence for UX if low
    ...PROFILE_DETAILS[dominantKey]
  };
};

export const getAllScores = (answers: Record<number, Option>): Record<ProfileKey, number> => {
  const scores: Record<ProfileKey, number> = {
    admin: 0,
    police: 0,
    fiscal: 0,
    legal: 0,
    tech: 0
  };
  
  Object.values(answers).forEach((option) => {
    if (option.profiles) {
      (Object.keys(option.profiles) as ProfileKey[]).forEach((key) => {
        scores[key] += option.profiles[key];
      });
    }
  });
  
  return scores;
}