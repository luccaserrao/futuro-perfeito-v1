import React from 'react';
import { Seo } from '../components/Seo';
import { AppRoutes } from '../types';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <Seo title="Termos de Uso | O Concurso Perfeito" description="Termos e condições de uso da plataforma." />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Termos de Uso</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="lead">Bem-vindo ao O Concurso Perfeito. Ao utilizar nosso site e nossos serviços, você concorda integralmente com os termos descritos abaixo.</p>
          
          <h3>1. O Serviço</h3>
          <p>
            O Concurso Perfeito fornece um teste vocacional online e relatórios baseados em análise de dados para auxiliar na escolha de carreiras públicas. 
            <strong>Importante:</strong> Nossos resultados são sugestivos e baseados em perfis comportamentais. Não garantimos aprovação em concursos públicos, pois isso depende exclusivamente do esforço e estudo do candidato.
          </p>
          
          <h3>2. Propriedade Intelectual</h3>
          <p>
            Todo o conteúdo, design, logotipos, algoritmo de teste e textos deste site são propriedade intelectual exclusiva de <strong>Lucca Serrão</strong>. É proibida a reprodução total ou parcial sem autorização expressa.
          </p>
          
          <h3>3. Compra e Reembolso</h3>
          <p>
            Ao adquirir o "Relatório Profissional Completo", você recebe uma licença de uso pessoal e intransferível do material digital.
          </p>
          <ul>
            <li><strong>Garantia:</strong> Oferecemos uma garantia incondicional de 7 dias. Se você não estiver satisfeito, pode solicitar o reembolso total.</li>
            <li><strong>Entrega:</strong> O material é enviado digitalmente para o e-mail cadastrado imediatamente após a confirmação do pagamento.</li>
          </ul>
          
          <h3>4. Limitação de Responsabilidade</h3>
          <p>
            O criador não se responsabiliza por decisões de carreira tomadas exclusivamente com base no teste, nem por eventuais falhas técnicas momentâneas no site.
          </p>

          <h3>5. Contato Legal</h3>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 not-prose mb-8">
            <p className="font-bold text-slate-900 mb-2">Responsável pelo Site:</p>
            <p className="text-slate-700">Lucca Serrão</p>
            <p className="text-slate-700"><strong>E-mail:</strong> luccahenrique@gmail.com</p>
            <p className="text-slate-700"><strong>Telefone:</strong> (91) 98423-3672</p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
             <p>Ao continuar navegando, você declara estar ciente destes termos.</p>
             <p>Voltar para a <Link to={AppRoutes.HOME} className="text-primary-600 hover:underline">Página Inicial</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};