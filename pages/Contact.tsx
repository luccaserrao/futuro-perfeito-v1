import React, { useState } from 'react';
import { Seo } from '../components/Seo';
import { Button } from '../components/Button';
import { Mail, Phone, MessageCircle, Send, User, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formState);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <Seo 
        title="Contato | Fale com o Criador | O Concurso Perfeito" 
        description="Fale diretamente com o criador do O Concurso Perfeito, Lucca Serrão, entusiasta de IA e autor do teste vocacional." 
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Entre em Contato com o Criador</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Este projeto foi criado por <strong>Lucca Serrão</strong>, um entusiasta de IA que desenvolveu o 
            <em> O Concurso Perfeito</em> para ajudar pessoas a tomarem decisões mais inteligentes sobre seu futuro nos concursos públicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Canais Diretos</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Criador</p>
                  <p className="text-lg font-bold text-slate-900">Lucca Serrão</p>
                  <p className="text-sm text-slate-600">Entusiasta de IA & Desenvolvedor</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Telefone / WhatsApp</p>
                  <p className="text-lg font-bold text-slate-900">(91) 98423-3672</p>
                  <p className="text-xs text-slate-400">Atendimento horário comercial</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">E-mail Pessoal</p>
                  <a href="mailto:luccahenrique@gmail.com" className="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors">
                    luccahenrique@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Localização</p>
                  <p className="text-lg font-bold text-slate-900">Belém, PA</p>
                  <p className="text-sm text-slate-600">Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-600 mb-4">Precisa de uma resposta rápida?</p>
              <a 
                href="https://wa.me/5591984233672" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#1ebd56] transition-colors shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Seu Nome</label>
                <input 
                  type="text" 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-slate-200 p-3 focus:ring-2 focus:ring-primary-500 outline-none bg-slate-50 transition-all"
                  placeholder="Como podemos te chamar?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Seu E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-slate-200 p-3 focus:ring-2 focus:ring-primary-500 outline-none bg-slate-50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Assunto</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-slate-200 p-3 focus:ring-2 focus:ring-primary-500 outline-none bg-slate-50 transition-all"
                  placeholder="Ex: Dúvida sobre o relatório"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border-slate-200 p-3 focus:ring-2 focus:ring-primary-500 outline-none bg-slate-50 transition-all resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>
              <Button type="submit" fullWidth size="lg" className="shadow-lg shadow-primary-500/20">
                <Send size={18} className="mr-2" /> Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};