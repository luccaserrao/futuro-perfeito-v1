import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { SchemaJsonLd } from '../components/SchemaJsonLd';
import { Button } from '../components/Button';
import { AppRoutes } from '../types';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Mock Data - in real app, this comes from params/api
  const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const date = "2024-10-12";
  const author = "Equipe OCP";
  const description = "Artigo detalhado sobre estratégias de estudo e escolha de carreiras públicas.";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": "https://picsum.photos/1200/600",
    "editor": author,
    "genre": "Concursos Públicos",
    "keywords": "concurso público, carreira, estudo, dicas",
    "wordcount": "1200",
    "publisher": {
      "@type": "Organization",
      "name": "O Concurso Perfeito",
      "logo": {
        "@type": "ImageObject",
        "url": "https://oconcursoperfeito.com.br/logo.png"
      }
    },
    "url": `https://oconcursoperfeito.com.br/blog/${slug}`,
    "datePublished": date,
    "dateCreated": date,
    "dateModified": date,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <Seo 
        title={`${title}`} 
        description={description}
        type="article" 
      />
      <SchemaJsonLd data={articleSchema} />
      
      {/* Header Image */}
      <div className="w-full h-[400px] bg-slate-200 relative">
        <img 
          src="https://picsum.photos/1200/600?random=10" 
          alt={`Capa do artigo ${title}`} 
          className="w-full h-full object-cover" 
          width="1200"
          height="600"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white container mx-auto">
          <Link to={AppRoutes.BLOG} className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ChevronLeft size={20} className="mr-1" /> Voltar para o Blog
          </Link>
          <div className="flex items-center gap-4 text-sm mb-4 text-white/70">
             <span className="flex items-center gap-1"><Calendar size={14}/> 12 Out, 2024</span>
             <span className="flex items-center gap-1"><User size={14}/> Equipe OCP</span>
             <span className="flex items-center gap-1"><Tag size={14}/> Dicas de Estudo</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight">
            {title || 'Artigo não encontrado'}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-600 font-medium mb-8">
            Esta é uma introdução otimizada para SEO que resume o conteúdo do artigo e prende a atenção do leitor logo nos primeiros segundos de leitura.
          </p>

          <h2>A Importância da Escolha Certa</h2>
          <p>
            Muitos estudantes falham não por falta de estudo, mas por falta de estratégia. Escolher a carreira errada no serviço público é o erro número um.
          </p>
          <p>
            Para evitar isso, recomendamos ferramentas de autoconhecimento, como o nosso <Link to={AppRoutes.QUIZ} className="text-primary-600 font-bold hover:underline">Teste Vocacional para Concursos</Link>.
          </p>

          <div className="bg-blue-50 border-l-4 border-primary-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-blue-900 font-bold text-lg m-0 mb-2">Dica de Ouro</h3>
            <p className="text-blue-800 m-0">
              Antes de comprar qualquer curso preparatório, leia o edital anterior e veja se as matérias te interessam genuinamente.
            </p>
          </div>

          <h2>Como Analisar seu Perfil</h2>
          <p>
            Entender se você tem perfil para carreiras Policiais ou Fiscais muda tudo. A rotina, o salário e o tipo de pressão são completamente diferentes.
          </p>
          <ul>
            <li>Analise sua tolerância ao risco</li>
            <li>Verifique sua afinidade com exatas vs humanas</li>
            <li>Considere o ambiente de trabalho (escritório vs rua)</li>
          </ul>

          <h3>Conclusão</h3>
          <p>
            Não existe concurso fácil, existe aquele para o qual você tem mais aptidão para estudar por longos períodos. Se você ainda tem dúvidas, acesse nosso <Link to={AppRoutes.REPORT} className="text-primary-600 font-bold hover:underline">Relatório Completo de Carreiras</Link>.
          </p>
        </article>

        {/* CTA Footer */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
             <h3 className="text-2xl font-bold mb-4">Ainda não sabe qual área escolher?</h3>
             <p className="text-slate-300 mb-8 max-w-lg mx-auto">
               Nossa inteligência artificial pode analisar seu perfil em 3 minutos e te dar a resposta exata.
             </p>
             <Link to={AppRoutes.QUIZ}>
               <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                 Fazer Teste Vocacional Gratuito
               </Button>
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};