import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Button } from '../components/Button';
import { AppRoutes } from '../types';
import { BrainCircuit, Rocket, Heart, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <Seo 
        title="Sobre o Criador | O Concurso Perfeito" 
        description="Conheça a história de Lucca Serrão, criador do O Concurso Perfeito e entusiasta de IA focado em ajudar pessoas." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
               <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                 <User size={64} className="text-primary-600" />
               </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Sobre o Criador</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                "Meu nome é <strong>Lucca Serrão</strong> e eu criei o <em>O Concurso Perfeito</em> para ajudar pessoas que, assim como eu, gostam de clareza, direção e lógica para tomar decisões importantes."
              </p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BrainCircuit className="text-primary-500" /> Minha Visão
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Sou um entusiasta de inteligência artificial apaixonado por criar soluções que resolvem problemas reais. Acredito que a tecnologia não deve apenas entreter, mas também servir como uma bússola para guiar escolhas de vida.
            </p>
            <p className="text-slate-600 leading-relaxed">
              O mercado de concursos públicos é cheio de incertezas. Eu vi muitos amigos gastando anos estudando para cargos que não tinham nada a ver com eles. Por isso, decidi usar dados e IA para acabar com esse "chute" e trazer ciência para a escolha de carreira.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-8 text-white">
             <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
               <Rocket className="text-primary-400" /> Missão
             </h2>
             <p className="text-slate-300 leading-relaxed mb-6">
               Ajudar pessoas a decidirem seu futuro com confiança, eliminando o desperdício de tempo e dinheiro em caminhos errados.
             </p>
             <div className="pt-6 border-t border-slate-700">
               <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-2">Contato Direto</p>
               <p className="font-semibold">luccahenrique@gmail.com</p>
               <p className="font-semibold">(91) 98423-3672</p>
             </div>
          </div>
        </div>

        {/* Why Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
           <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Heart className="text-red-500" /> Por que criei este projeto?
           </h2>
           <div className="prose prose-slate max-w-none text-slate-600">
             <p>
               Eu percebi que a maioria das pessoas escolhe um concurso olhando apenas para o salário ou para a quantidade de vagas. Isso é um erro clássico. A verdadeira satisfação e a aprovação rápida vêm quando você alinha suas habilidades naturais (soft skills) com as exigências do cargo.
             </p>
             <p>
               Desenvolvi o algoritmo do <strong>O Concurso Perfeito</strong> para ser essa ponte. Ele não julga, ele analisa. Ele usa padrões comportamentais validados para dizer: "Ei, seu perfil brilha aqui, não ali".
             </p>
           </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Pronto para descobrir seu caminho?</h3>
          <Link to={AppRoutes.QUIZ}>
            <Button size="lg" className="px-10 shadow-xl shadow-primary-500/20 text-lg">
              Começar Teste Vocacional
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};