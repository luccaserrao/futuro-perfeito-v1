import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Diante de um problema complexo no trabalho, qual é sua primeira reação?",
    options: [
      { 
        label: "Organizar os fatos em uma planilha ou relatório detalhado", 
        value: "analytical", 
        profiles: { admin: 2, fiscal: 3, tech: 1, police: 0, legal: 0 } 
      },
      { 
        label: "Tomar a frente e resolver a situação, mesmo sob pressão", 
        value: "action", 
        profiles: { admin: 0, fiscal: 0, tech: 0, police: 3, legal: 1 } 
      },
      { 
        label: "Consultar as regras e leis para saber o procedimento correto", 
        value: "normative", 
        profiles: { admin: 1, fiscal: 2, tech: 0, police: 1, legal: 3 } 
      },
      { 
        label: "Buscar uma solução tecnológica ou lógica para otimizar o processo", 
        value: "tech", 
        profiles: { admin: 0, fiscal: 1, tech: 3, police: 0, legal: 0 } 
      },
    ]
  },
  {
    id: 2,
    text: "Qual ambiente de trabalho te deixa mais confortável?",
    options: [
      { 
        label: "Escritório organizado, previsível e com processos claros", 
        value: "office", 
        profiles: { admin: 3, fiscal: 1, tech: 0, police: 0, legal: 1 } 
      },
      { 
        label: "Ambiente dinâmico, externo ou lidando com situações de risco", 
        value: "field", 
        profiles: { admin: 0, fiscal: 0, tech: 0, police: 3, legal: 0 } 
      },
      { 
        label: "Ambiente de análise intelectual, leitura e escrita jurídica", 
        value: "intellectual", 
        profiles: { admin: 0, fiscal: 1, tech: 0, police: 0, legal: 3 } 
      },
      { 
        label: "Ambiente de auditoria, fiscalização e análise de contas", 
        value: "audit", 
        profiles: { admin: 0, fiscal: 3, tech: 1, police: 1, legal: 0 } 
      },
    ]
  },
  {
    id: 3,
    text: "Quais matérias você tinha mais facilidade ou interesse na escola?",
    options: [
      { 
        label: "Matemática, Física e Estatística", 
        value: "math", 
        profiles: { admin: 0, fiscal: 3, tech: 3, police: 0, legal: 0 } 
      },
      { 
        label: "História, Geografia e Sociologia", 
        value: "humanities", 
        profiles: { admin: 1, fiscal: 0, tech: 0, police: 2, legal: 2 } 
      },
      { 
        label: "Português, Redação e Literatura", 
        value: "language", 
        profiles: { admin: 2, fiscal: 0, tech: 0, police: 0, legal: 3 } 
      },
      { 
        label: "Educação Física e Biologia", 
        value: "bio", 
        profiles: { admin: 0, fiscal: 0, tech: 0, police: 3, legal: 0 } 
      },
    ]
  },
  {
    id: 4,
    text: "O que você mais valoriza em uma carreira?",
    options: [
      { 
        label: "Estabilidade total e rotina definida", 
        value: "stability", 
        profiles: { admin: 3, fiscal: 0, tech: 0, police: 0, legal: 1 } 
      },
      { 
        label: "Altos salários e prestígio financeiro", 
        value: "money", 
        profiles: { admin: 0, fiscal: 3, tech: 1, police: 0, legal: 2 } 
      },
      { 
        label: "Senso de justiça e aplicação da lei", 
        value: "justice", 
        profiles: { admin: 0, fiscal: 1, tech: 0, police: 2, legal: 3 } 
      },
      { 
        label: "Inovação e resolver problemas lógicos", 
        value: "innovation", 
        profiles: { admin: 0, fiscal: 0, tech: 3, police: 0, legal: 0 } 
      },
    ]
  },
  {
    id: 5,
    text: "Como você lida com autoridade e hierarquia?",
    options: [
      { 
        label: "Respeito rigorosamente a cadeia de comando", 
        value: "rigid", 
        profiles: { admin: 1, fiscal: 0, tech: 0, police: 3, legal: 1 } 
      },
      { 
        label: "Gosto de ter autonomia para tomar minhas decisões", 
        value: "autonomous", 
        profiles: { admin: 0, fiscal: 3, tech: 2, police: 0, legal: 2 } 
      },
      { 
        label: "Prefiro trabalhar em equipe colaborativa horizontal", 
        value: "collab", 
        profiles: { admin: 2, fiscal: 0, tech: 3, police: 0, legal: 0 } 
      },
      { 
        label: "Gosto de liderar e coordenar pessoas", 
        value: "leader", 
        profiles: { admin: 2, fiscal: 2, tech: 1, police: 2, legal: 1 } 
      },
    ]
  }
];