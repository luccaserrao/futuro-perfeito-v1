import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Seo } from '../components/Seo';
import { AppRoutes } from '../types';
import { ArrowRight, Clock, Target, BrainCircuit } from 'lucide-react';

export const QuizHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20 px-4">
      <Seo title="Teste Vocacional - Início" description="Prepare-se para descobrir sua carreira pública ideal." />

      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary-600">
          <BrainCircuit size={40} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Teste Vocacional 2.0
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Nossa inteligência artificial analisará suas respostas para identificar com precisão qual carreira pública combina com seu perfil comportamental e cognitivo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
              <Clock size={18} className="text-primary-500" /> 3 Minutos
            </div>
            <p className="text-sm text-slate-500">Tempo médio de resposta.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
              <Target size={18} className="text-primary-500" /> 5 Perguntas
            </div>
            <p className="text-sm text-slate-500">Objetivas e diretas.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
              <BrainCircuit size={18} className="text-primary-500" /> I.A. Powered
            </div>
            <p className="text-sm text-slate-500">Análise de dados reais.</p>
          </div>
        </div>

        <Link to={AppRoutes.QUIZ_QUESTIONS}>
          <Button size="lg" fullWidth className="text-lg py-4 shadow-xl shadow-primary-500/20">
            Iniciar Teste Agora <ArrowRight className="ml-2" />
          </Button>
        </Link>

        <p className="text-xs text-slate-400 mt-6">
          Ao iniciar, você concorda com nossos termos de uso.
        </p>
      </div>
    </div>
  );
};