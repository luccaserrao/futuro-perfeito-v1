import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { AppRoutes, ProfileKey } from '../types';
import { Button } from '../components/Button';
import { Seo } from '../components/Seo';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Unlock, RefreshCcw, CheckCircle, Award, Briefcase, Shield, TrendingUp, Scale, Computer, BookOpen } from 'lucide-react';

export const Result: React.FC = () => {
  const { answers, getResult, getRawScores, resetQuiz } = useQuiz();

  if (Object.keys(answers).length === 0) {
    return <Navigate to={AppRoutes.HOME} />;
  }

  const result = getResult();
  const scores = getRawScores();

  const chartData = [
    { subject: 'Policial', A: scores.police, fullMark: 10 },
    { subject: 'Fiscal', A: scores.fiscal, fullMark: 10 },
    { subject: 'Admin', A: scores.admin, fullMark: 10 },
    { subject: 'Tribunais', A: scores.legal, fullMark: 10 },
    { subject: 'T.I.', A: scores.tech, fullMark: 10 },
  ];

  const getIcon = (key: ProfileKey) => {
    switch(key) {
      case 'police': return <Shield className="w-12 h-12 text-white" />;
      case 'fiscal': return <TrendingUp className="w-12 h-12 text-white" />;
      case 'legal': return <Scale className="w-12 h-12 text-white" />;
      case 'tech': return <Computer className="w-12 h-12 text-white" />;
      default: return <BookOpen className="w-12 h-12 text-white" />;
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Seo 
        title="Resultado do Teste Vocacional | Seu Perfil Ideal de Concurso" 
        description={`Seu perfil é ${result.title}. Veja a análise completa e recomendações de carreiras.`} 
        keywords="resultado teste vocacional, perfil concurso, qual carreira seguir"
      />
      
      {/* Hero Result */}
      <div className="bg-slate-900 text-white pb-32 pt-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 shadow-lg mb-6 animate-in zoom-in duration-500">
            {getIcon(result.key)}
          </div>
          <p className="text-primary-300 font-semibold uppercase tracking-wider mb-2">Resultado da Análise</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Seu Resultado no Teste: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">{result.title}</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {result.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Chart Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Radar de Afinidade</h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  {result.percentage}% Compatível
                </span>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={false} axisLine={false} />
                    <Radar
                      name="Você"
                      dataKey="A"
                      stroke="#2563eb"
                      strokeWidth={3}
                      fill="#3b82f6"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Careers List */}
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="text-primary-500" /> Carreiras Recomendadas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.recommendedRoles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Award className="text-yellow-500 w-5 h-5" />
                    <span className="font-medium text-slate-700">{role}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Paywall Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-primary-900/10 border border-primary-100 overflow-hidden ring-4 ring-primary-50/50 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  <h3 className="text-xl font-bold mb-1 relative">Relatório Completo</h3>
                  <p className="text-primary-100 text-sm relative">Sua estratégia de aprovação</p>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-sm text-slate-600"><strong>Cronograma de Estudos</strong> personalizado para {result.title}.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-sm text-slate-600"><strong>Análise SWOT</strong> dos seus pontos fortes e fracos.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-sm text-slate-600"><strong>Guia de Editais</strong> previstos para 2025.</p>
                    </div>
                  </div>

                  <div className="text-center mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-slate-400 line-through text-sm">de R$ 97,00</span>
                    <div className="text-4xl font-bold text-slate-900 my-1">R$ 29,90</div>
                    <span className="text-xs text-green-600 font-bold uppercase tracking-wider">Oferta por tempo limitado</span>
                  </div>

                  <Link to={AppRoutes.REPORT}>
                    <Button fullWidth size="lg" className="mb-4 shadow-lg shadow-primary-500/30 animate-pulse text-lg">
                      <Unlock className="w-5 h-5 mr-2" /> Liberar Relatório Completo
                    </Button>
                  </Link>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                    <Shield size={12} /> Compra segura e garantida
                  </div>
                </div>
              </div>

              <button 
                onClick={resetQuiz} 
                className="w-full py-4 text-slate-500 hover:text-primary-600 text-sm flex items-center justify-center gap-2 transition-colors border border-slate-200 rounded-xl hover:bg-white hover:shadow-sm"
              >
                <RefreshCcw size={16} /> Refazer o teste gratuitamente
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};