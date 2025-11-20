import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SchemaJsonLd } from '../components/SchemaJsonLd';
import { Button } from '../components/Button';
import { FaqItem } from '../components/report/FaqItem';
import { AppRoutes } from '../types';
import { 
  CheckCircle2, 
  Lock, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Target, 
  BrainCircuit, 
  ArrowRight,
  CreditCard,
  Star
} from 'lucide-react';

export const ReportSales: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      alert("Integração de pagamento: Redirecionando para gateway (Mercado Pago/Stripe)...");
      setIsProcessing(false);
    }, 1500);
  };

  // Schema.org for Product
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Relatório Profissional Completo para Concursos",
    "image": "https://oconcursoperfeito.com.br/images/report-cover.jpg",
    "description": "Relatório detalhado de perfil vocacional para concursos públicos, incluindo cronograma de estudos e análise de compatibilidade.",
    "brand": {
      "@type": "Brand",
      "name": "O Concurso Perfeito"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://oconcursoperfeito.com.br/relatorio",
      "priceCurrency": "BRL",
      "price": "29.90",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1240"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Em quanto tempo recebo o relatório?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Imediatamente após a confirmação do pagamento. Ele é enviado para o seu e-mail e também fica disponível na tela de confirmação."
        }
      },
      {
        "@type": "Question",
        "name": "O pagamento é seguro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, utilizamos gateways de pagamento líderes de mercado com criptografia de ponta a ponta. Seus dados nunca são armazenados por nós."
        }
      },
      {
        "@type": "Question",
        "name": "Serve para quem nunca estudou?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com certeza! O relatório é ideal para iniciantes pois evita que você gaste tempo e dinheiro estudando para a área errada."
        }
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo 
        title="Relatório Profissional Completo | Qual Concurso Combina Com Você" 
        description="Receba um relatório detalhado com carreiras recomendadas, salários, rotina e perfil ideal para concurso. Economize anos de estudo focado na direção certa."
        keywords="relatório vocacional concurso, mentoria concurso, plano de estudos, cronograma concurso"
        type="product"
      />
      <SchemaJsonLd data={productSchema} />
      <SchemaJsonLd data={faqSchema} />
      
      {/* Hero Sales */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white" aria-label="Oferta do Relatório">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/40 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 size={14} /> Compatível com Edital 2024/2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Relatório Profissional Completo: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">O Concurso Perfeito</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Pare de perder tempo estudando matérias que você odeia para cargos que não combinam com seu perfil. Receba um plano de carreira personalizado baseado em dados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="shadow-xl shadow-primary-500/20 text-lg"
                >
                  Quero meu Relatório <ArrowRight className="ml-2" />
                </Button>
                <div className="flex items-center gap-4 text-sm text-slate-400 px-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                    ))}
                  </div>
                  <p>+1.200 alunos já compraram</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative bg-white text-slate-900 rounded-2xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="border border-slate-100 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Relatório.pdf</div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                        <Target size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Análise de Perfil</h3>
                        <p className="text-sm text-slate-500">Mapeamento completo de competências.</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-full bg-slate-100 rounded animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse"></div>
                      <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse"></div>
                    </div>
                    <div className="pt-4 flex justify-between items-center">
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold">Preço Promocional</p>
                        <p className="text-3xl font-bold text-primary-600">R$ 29,90</p>
                      </div>
                      <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 flex items-center gap-1">
                        <ShieldCheck size={12} /> Garantia de 7 dias
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">O que você recebe no relatório?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Não é apenas um resultado, é um mapa estratégico para sua aprovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Top 5 Carreiras", desc: "As 5 carreiras públicas que têm mais de 90% de compatibilidade com seu perfil natural." },
            { icon: BrainCircuit, title: "Análise Comportamental", desc: "Entenda seus pontos fortes (para usar na prova) e pontos fracos (para mitigar)." },
            { icon: FileText, title: "Sugestão de Editais", desc: "Lista de concursos previstos para 2025 que se encaixam no seu nível atual." },
            { icon: Clock, title: "Cronograma Inicial", desc: "Uma sugestão de ciclo de estudos para começar a estudar hoje mesmo." },
            { icon: ShieldCheck, title: "Raio-X da Rotina", desc: "Como é o dia a dia real de cada cargo sugerido (sem romantização)." },
            { icon: CreditCard, title: "Faixa Salarial", desc: "Perspectiva real de ganhos iniciais e final de carreira para suas opções." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                <item.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Como funciona na prática</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-700 z-0"></div>
            
            {[
              { step: 1, title: "Você faz o teste", desc: "Responde 5 perguntas rápidas." },
              { step: 2, title: "I.A. Processa", desc: "Nosso algoritmo cruza 50+ variáveis." },
              { step: 3, title: "Pagamento Seguro", desc: "Você libera o acesso completo." },
              { step: 4, title: "Download Imediato", desc: "Receba o PDF no seu e-mail." },
            ].map((s, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 text-primary-400">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          <FaqItem question="Em quanto tempo recebo o relatório?" answer="Imediatamente após a confirmação do pagamento. Ele é enviado para o seu e-mail e também fica disponível na tela de confirmação." />
          <FaqItem question="O pagamento é seguro?" answer="Sim, utilizamos gateways de pagamento líderes de mercado com criptografia de ponta a ponta. Seus dados nunca são armazenados por nós." />
          <FaqItem question="Serve para quem nunca estudou?" answer="Com certeza! O relatório é ideal para iniciantes pois evita que você gaste tempo e dinheiro estudando para a área errada." />
          <FaqItem question="Posso pedir reembolso?" answer="Sim. Se você achar que o relatório não agregou valor, você tem 7 dias para solicitar o reembolso total." />
        </div>
      </section>

      {/* Pricing / Checkout Anchor */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-primary-600 to-secondary-700 text-center px-4">
        <div className="container mx-auto max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="inline-block bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Oferta Limitada
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Relatório Profissional
            </h2>
            <p className="text-slate-600 mb-8">
              Tudo o que você precisa para iniciar sua preparação do jeito certo.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-slate-400 text-lg line-through">R$ 97,00</span>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
              R$ 29,90
            </div>
            <p className="text-slate-500 text-sm mb-8">pagamento único</p>

            <Button 
              size="lg" 
              fullWidth 
              onClick={handlePurchase}
              disabled={isProcessing}
              className="text-lg py-5 mb-6 shadow-xl shadow-primary-500/20"
            >
              {isProcessing ? 'Processando...' : 'Liberar Meu Acesso Agora'}
            </Button>

            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck size={16} className="text-green-500" /> Pagamento 100% Seguro
              </div>
              <div className="flex items-center justify-center gap-2">
                <Lock size={16} className="text-green-500" /> Acesso Imediato
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star size={16} className="text-green-500" /> Satisfação Garantida
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 text-xs text-slate-400 border-t border-slate-100">
            Seus dados estão protegidos. Aceitamos Pix e Cartão de Crédito.
          </div>
        </div>
      </section>
    </div>
  );
};