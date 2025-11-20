import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Option, CareerResult, ProfileKey } from '../types';
import { calculateDominantProfile, getAllScores } from '../utils/ScoreProcessor';

interface QuizContextType {
  answers: Record<number, Option>;
  setAnswer: (questionId: number, option: Option) => void;
  resetQuiz: () => void;
  getResult: () => CareerResult;
  getRawScores: () => Record<ProfileKey, number>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Record<number, Option>>({});

  const setAnswer = (questionId: number, option: Option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const resetQuiz = () => {
    setAnswers({});
  };

  const getResult = () => {
    return calculateDominantProfile(answers);
  };

  const getRawScores = () => {
    return getAllScores(answers);
  }

  return (
    <QuizContext.Provider value={{ answers, setAnswer, resetQuiz, getResult, getRawScores }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};