import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { Menu, X, GraduationCap, Instagram, Mail } from 'lucide-react';
import { AppRoutes } from '../types';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isQuizPage = location.pathname.startsWith('/quiz') && location.pathname !== AppRoutes.RESULT;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Header */}
      {!isQuizPage && (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
          <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            <Link to={AppRoutes.HOME} className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white shadow-md group-hover:rotate-3 transition-transform">
                <GraduationCap size={20} />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                Concurso<span className="text-primary-600">Perfeito</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to={AppRoutes.HOME} 
                className={`text-sm font-medium transition-colors ${isActive(AppRoutes.HOME) ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}
              >
                Início
              </Link>
              <Link 
                to={AppRoutes.BLOG} 
                className={`text-sm font-medium transition-colors ${isActive(AppRoutes.BLOG) ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}
              >
                Blog
              </Link>
              <Link 
                to={AppRoutes.REPORT} 
                className={`text-sm font-medium transition-colors ${isActive(AppRoutes.REPORT) ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}
              >
                Relatório
              </Link>
              <Link to={AppRoutes.QUIZ}>
                <Button size="sm" className="shadow-lg shadow-primary-500/20">Fazer Teste Grátis</Button>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 z-40">
              <Link to={AppRoutes.HOME} onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium p-3 hover:bg-slate-50 rounded-lg transition-colors">Início</Link>
              <Link to={AppRoutes.BLOG} onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium p-3 hover:bg-slate-50 rounded-lg transition-colors">Blog</Link>
              <Link to={AppRoutes.REPORT} onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium p-3 hover:bg-slate-50 rounded-lg transition-colors">Relatório Premium</Link>
              <Link to={AppRoutes.ABOUT} onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium p-3 hover:bg-slate-50 rounded-lg transition-colors">Sobre o Criador</Link>
              <Link to={AppRoutes.CONTACT} onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium p-3 hover:bg-slate-50 rounded-lg transition-colors">Contato</Link>
              <div className="pt-2">
                <Link to={AppRoutes.QUIZ} onClick={() => setIsMenuOpen(false)}>
                  <Button fullWidth>Iniciar Teste Vocacional</Button>
                </Link>
              </div>
            </div>
          )}
        </header>
      )}

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer */}
      {!isQuizPage && (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white">
                    <GraduationCap size={20} />
                  </div>
                  <span className="font-bold text-xl text-white">
                    Concurso<span className="text-primary-500">Perfeito</span>
                  </span>
                </div>
                <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                  Nossa missão é guiar concurseiros rumo à aprovação através de autoconhecimento e estratégia baseada em dados. Criado por <strong>Lucca Serrão</strong>.
                </p>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-all"><Instagram size={18} /></a>
                  <a href="mailto:luccahenrique@gmail.com" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-all"><Mail size={18} /></a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-5">Institucional</h3>
                <ul className="space-y-3">
                  <li><Link to={AppRoutes.HOME} className="hover:text-primary-400 transition-colors inline-block">Início</Link></li>
                  <li><Link to={AppRoutes.ABOUT} className="hover:text-primary-400 transition-colors inline-block">Sobre o Criador</Link></li>
                  <li><Link to={AppRoutes.BLOG} className="hover:text-primary-400 transition-colors inline-block">Blog</Link></li>
                  <li><Link to={AppRoutes.REPORT} className="hover:text-primary-400 transition-colors inline-block">Relatório Completo</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-5">Ajuda & Legal</h3>
                <ul className="space-y-3">
                  <li><Link to={AppRoutes.SUPPORT} className="hover:text-primary-400 transition-colors inline-block">Suporte</Link></li>
                  <li><Link to={AppRoutes.CONTACT} className="hover:text-primary-400 transition-colors inline-block">Fale Conosco</Link></li>
                  <li><Link to={AppRoutes.TERMS} className="hover:text-primary-400 transition-colors inline-block">Termos de Uso</Link></li>
                  <li><Link to={AppRoutes.PRIVACY} className="hover:text-primary-400 transition-colors inline-block">Privacidade</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
              <p>© {new Date().getFullYear()} O Concurso Perfeito. Todos os direitos reservados.</p>
              <div className="flex items-center gap-1">
                Desenvolvido por Lucca Serrão <span className="text-red-500 animate-pulse">❤</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};