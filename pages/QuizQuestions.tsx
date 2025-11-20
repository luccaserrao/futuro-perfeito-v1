import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { questions } from '../data/questions';
import { AppRoutes, Option } from '../types';
import { ProgressBar } from '../components/quiz/ProgressBar';
import { AnswerButton } from '../components/quiz/AnswerButton';
import { Button } from '../components/Button';
import { Seo } from '../components/Seo';
import { ChevronLeft, ArrowRight, AlertCircle } from 'lucide-react';

export const QuizQuestions: React.FC = () => {
  const { setAnswer, answers } = useQuiz();
  const navigate = useNavigate();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Load previous answer if available (allows back navigation with state retention)
  useEffect(() => {
    if (answers[currentQuestion.id]) {
      setSelectedOption(answers[currentQuestion.id]);
    } else {
      setSelectedOption(null);
    }
  }, [currentIndex, currentQuestion.id, answers]);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setError(null);
  };

  const handleNext = () => {
    if (!selectedOption) {
      setError("Por favor, selecione uma opção para continuar.");
      return;
    }

    setAnswer(currentQuestion.id, selectedOption);
    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        navigate(AppRoutes.RESULT);
      }
    }, 300); // Small delay for animation
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      navigate(AppRoutes.QUIZ_INTRO);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Seo title={`Pergunta ${currentIndex + 1}`} description="Responda para ver seu resultado." />

      {/* Header */}
      <header className="bg-white border-b border-slate-100 px-4 py-4 sticky top-0 z-20">
        <div className="container mx-auto max-w-3xl flex items-center justify-between">
           <button 
             onClick={handleBack}
             className="text-slate-500 hover:text-slate-800 transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-50"
           >
             <ChevronLeft size={24} />
           </button>
           <div className="font-bold text-slate-900">
             Concurso<span className="text-primary-600">Perfeito</span>
           </div>
           <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl flex flex-col">
        
        <div className="mb-8">
          <ProgressBar current={currentIndex + 1} total={totalQuestions} />
        </div>

        <div className={`flex-grow flex flex-col justify-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          
          <span className="text-primary-600 font-bold text-sm uppercase tracking-wider mb-4 block">
            Questão {currentIndex + 1} de {totalQuestions}
          </span>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, idx) => (
              <AnswerButton
                key={idx}
                option={option}
                selected={selectedOption?.value === option.value}
                onClick={() => handleOptionSelect(option)}
              />
            ))}
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl mb-6 animate-in slide-in-from-top-2">
              <AlertCircle size={20} />
              <span className="font-medium">{error}</span>
            </div>
          )}

        </div>
        
        <div className="mt-auto pt-6 border-t border-slate-100 sticky bottom-0 bg-slate-50 pb-6 md:static md:bg-transparent md:pb-0">
          <Button 
            onClick={handleNext} 
            size="lg" 
            fullWidth 
            className="shadow-xl shadow-primary-500/20 text-lg"
          >
            {currentIndex === totalQuestions - 1 ? 'Finalizar Teste' : 'Próxima Pergunta'}
            <ArrowRight className="ml-2" />
          </Button>
        </div>

      </main>
    </div>
  );
};