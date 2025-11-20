export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  label: string;
  value: string; // Internal identifier
  profiles: Record<ProfileKey, number>; // Weight for each profile
}

export type ProfileKey = 'admin' | 'police' | 'fiscal' | 'legal' | 'tech';

export interface CareerResult {
  key: ProfileKey;
  title: string;
  description: string;
  percentage: number;
  skills: string[];
  recommendedRoles: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
}

export enum AppRoutes {
  HOME = '/',
  QUIZ = '/quiz',
  QUIZ_INTRO = '/quiz',
  QUIZ_QUESTIONS = '/quiz/perguntas',
  RESULT = '/quiz/resultado',
  REPORT = '/relatorio',
  CHECKOUT = '/checkout',
  BLOG = '/blog',
  CONTACT = '/contato',
  TERMS = '/termos',
  PRIVACY = '/privacidade',
  ABOUT = '/sobre',
  SUPPORT = '/suporte',
  THANK_YOU = '/obrigado',
}