import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Seo } from '../components/Seo';
import { SchemaJsonLd } from '../components/SchemaJsonLd';
import { AppRoutes } from '../types';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Shield, Star } from 'lucide-react';

export const Home: React.FC = () => {
  // Schema.org Data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "O Concurso Perfeito",
        "url": "https://oconcursoperfeito.com.br",
        "logo": "https://oconcursoperfeito.com.br/logo.png",
        "sameAs": [
          "https://instagram.com/oconcursoperfeito",
          "https://facebook.com/oconcursoperfeito"
        ]
      },
      {
        "@type": "WebSite",
        "name": "O Concurso Perfeito",
        "url": "https://oconcursoperfeito.com.br",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://oconcursoperfeito.com.br/blog?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
      <Seo 
        title="Teste Vocacional para Concurso Público" 
        description="Descubra qual concurso combina com seu perfil. Teste vocacional online, rápido e gratuito com análise de perfil e carreiras recomendadas."
        keywords="teste vocacional concurso, qual concurso fazer, carreira pública, concurso público 2025"
      />
      <SchemaJsonLd data={schemaData} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50" aria-label="Introdução">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm mb-8 animate-in fade-in zoom-in duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            IA Atualizada para Concursos 2024/2025
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]">
            Qual Concurso Fazer? <br />
            Descubra Agora com Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Teste Vocacional</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            90% dos concurseiros desistem porque escolhem a área errada. Descubra em 3 minutos qual carreira pública combina com seu perfil, habilidades e objetivos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to={AppRoutes.QUIZ}>
              <Button size="lg" className="w-full sm:w-auto shadow-primary-500/25 shadow-xl">
                Iniciar Teste Grátis <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to={AppRoutes.REPORT}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Conhecer Metodologia
              </Button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
              <span>Análise Comportamental DISC</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
              <span>Baseado em Editais Reais</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
              <span>+50.000 Alunos Testados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Preview */}
      <section className="py-20 bg-white border-y border-slate-100" aria-label="Áreas de Atuação">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Analisamos seu perfil para as <br/>principais áreas de atuação</h2>
            <p className="text-slate-600">Nosso algoritmo cruza suas soft-skills com as exigências de cada carreira.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Carreira Policial", icon: Shield, desc: "Para perfis dinâmicos, com alta energia e senso de justiça.", color: "bg-blue-100 text-blue-600" },
              { title: "Área Fiscal", icon: TrendingUp, desc: "Para quem gosta de análise, números e alta remuneração.", color: "bg-green-100 text-green-600" },
              { title: "Tribunais", icon: Target, desc: "Foco em rotinas estruturadas, leitura e interpretação de leis.", color: "bg-purple-100 text-purple-600" },
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Urgency */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative" aria-label="Benefícios">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que você não pode estudar "no escuro"?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Tempo é o seu recurso mais escasso</h3>
                    <p className="text-slate-400">Estudar para Fiscal quando seu perfil é Policial pode custar 2 anos da sua vida.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Frustração gera desistência</h3>
                    <p className="text-slate-400">Fazer algo que você odeia todos os dias torna a aprovação impossível.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link to={AppRoutes.QUIZ}>
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-none shadow-lg shadow-white/10">
                    Descobrir Meu Perfil Agora
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              {/* Visual Decorativo - Não precisa de alt text detalhado pois é ilustrativo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-full bg-slate-700"></div>
                   <div>
                     <div className="h-4 w-32 bg-slate-700 rounded mb-2"></div>
                     <div className="h-3 w-20 bg-slate-700/50 rounded"></div>
                   </div>
                 </div>
                 <div className="space-y-3">
                   <div className="h-4 w-full bg-slate-700/50 rounded"></div>
                   <div className="h-4 w-full bg-slate-700/50 rounded"></div>
                   <div className="h-4 w-3/4 bg-slate-700/50 rounded"></div>
                 </div>
                 <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center">
                    <div className="text-green-400 font-bold flex items-center gap-2">
                      <Star size={16} fill="currentColor" /> Compatibilidade Alta
                    </div>
                    <div className="text-2xl font-bold">98%</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50" aria-label="Depoimentos">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Quem fez, aprovou</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { name: "Lucas M.", role: "Aprovado na PF", text: "Eu estudava para auditor fiscal e não passava de 60%. Fiz o teste, mudei para área policial e passei na PF em 8 meses." },
               { name: "Ana Clara", role: "Estudante TJ-SP", text: "O relatório completo me mostrou que eu tenho perfil analítico, mas não para exatas. Tribunais foi a escolha perfeita." },
               { name: "Roberto S.", role: "Iniciante", text: "Estava perdido com tantos editais. O teste me deu um norte. Economizei muito dinheiro com material errado." },
             ].map((t, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                 <div className="flex text-yellow-400 mb-4" aria-label="5 estrelas">
                   {[...Array(5)].map((_, ii) => <Star key={ii} size={16} fill="currentColor" />)}
                 </div>
                 <blockquote className="text-slate-600 mb-6 italic">"{t.text}"</blockquote>
                 <div>
                   <p className="font-bold text-slate-900">{t.name}</p>
                   <p className="text-sm text-slate-500">{t.role}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-secondary-700 text-center px-4" aria-label="Chamada para ação">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Seu futuro começa com a escolha certa
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            O teste é rápido, gratuito e pode mudar sua trajetória de estudos.
          </p>
          <Link to={AppRoutes.QUIZ}>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-slate-50 shadow-2xl text-lg px-10">
              Começar Teste Vocacional
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};