import React from 'react';
import { Seo } from '../components/Seo';
import { Mail, Phone, MessageCircle, LifeBuoy } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <Seo 
        title="Suporte e Ajuda | O Concurso Perfeito" 
        description="Precisa de ajuda? Fale com o suporte do O Concurso Perfeito." 
      />
      
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 text-center">
          
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600">
            <LifeBuoy size={40} />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Suporte e Ajuda</h1>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto">
            Se você teve algum problema técnico, dúvida sobre o relatório ou precisa de qualquer tipo de assistência, fale diretamente com o criador do projeto.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            <a href="mailto:luccahenrique@gmail.com" className="group bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-white p-2 rounded-lg shadow-sm text-primary-600">
                  <Mail size={24} />
                </div>
                <span className="font-bold text-slate-900">E-mail</span>
              </div>
              <p className="text-slate-600 group-hover:text-primary-700 transition-colors">luccahenrique@gmail.com</p>
            </a>

            <a href="tel:+5591984233672" className="group bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-white p-2 rounded-lg shadow-sm text-primary-600">
                  <Phone size={24} />
                </div>
                <span className="font-bold text-slate-900">Telefone</span>
              </div>
              <p className="text-slate-600 group-hover:text-primary-700 transition-colors">(91) 98423-3672</p>
            </a>

            <a href="https://wa.me/5591984233672" target="_blank" rel="noopener noreferrer" className="group bg-[#25D366]/10 p-6 rounded-xl border border-[#25D366]/30 hover:bg-[#25D366]/20 hover:shadow-md transition-all md:col-span-2">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-white p-2 rounded-lg shadow-sm text-[#25D366]">
                  <MessageCircle size={24} />
                </div>
                <span className="font-bold text-slate-900">WhatsApp (Resposta Rápida)</span>
              </div>
              <p className="text-slate-700 group-hover:text-slate-900 transition-colors">Clique para abrir conversa direta</p>
            </a>

          </div>

          <p className="text-xs text-slate-400 mt-10">
            Horário de atendimento: Segunda a Sexta, das 09h às 18h.
          </p>
        </div>
      </div>
    </div>
  );
};