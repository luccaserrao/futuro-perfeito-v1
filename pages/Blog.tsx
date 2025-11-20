import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { AppRoutes, BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';

const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'como-escolher-carreira-publica',
    title: 'Como escolher a carreira pública ideal em 2024',
    excerpt: 'Não perca tempo estudando para o edital errado. Entenda os pilares da escolha vocacional.',
    content: '',
    date: '12 Out, 2024',
    author: 'Equipe OCP',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    slug: 'carreira-policial-vs-administrativa',
    title: 'Carreira Policial ou Administrativa: Qual combina com você?',
    excerpt: 'Uma análise detalhada do dia a dia, remuneração e exigências físicas de cada área.',
    content: '',
    date: '10 Out, 2024',
    author: 'Prof. Carlos',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    slug: 'tecnicas-estudo-iniciantes',
    title: '3 Técnicas de estudo para quem está começando do zero',
    excerpt: 'Pomodoro, Ciclo de Estudos e Revisão Ativa. Saiba como aplicar hoje.',
    content: '',
    date: '05 Out, 2024',
    author: 'Ana Silva',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <Seo title="Blog de Carreiras Públicas" description="Artigos e dicas sobre concursos públicos." />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog do Concurseiro</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dicas, análises de editais e orientação profissional para sua jornada até a aprovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`${AppRoutes.BLOG}/${post.slug}`} key={post.id} className="group block h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold text-sm mt-auto">
                    Ler artigo completo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};