import React from 'react';
import { Seo } from '../components/Seo';
import { AppRoutes } from '../types';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <Seo title="Política de Privacidade | O Concurso Perfeito" description="Como tratamos seus dados pessoais." />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="lead">Sua privacidade é nossa prioridade. Esta política explica de forma transparente como coletamos, usamos e protegemos suas informações.</p>
          
          <h3>1. Controlador de Dados</h3>
          <p>
            O responsável pelo tratamento dos seus dados pessoais é <strong>Lucca Serrão</strong>. <br/>
            Para solicitações relacionadas à LGPD, exclusão de dados ou dúvidas, entre em contato diretamente:
          </p>
          <ul className="bg-slate-50 p-4 rounded-xl border border-slate-100 list-none pl-4">
            <li><strong>E-mail:</strong> luccahenrique@gmail.com</li>
            <li><strong>Telefone:</strong> (91) 98423-3672</li>
          </ul>

          <h3>2. Dados Coletados</h3>
          <p>Coletamos as seguintes informações para o funcionamento do serviço:</p>
          <ul>
            <li><strong>Respostas do Quiz:</strong> Para gerar seu perfil vocacional (processado de forma anônima para estatísticas).</li>
            <li><strong>Nome e E-mail:</strong> Caso você opte por comprar o relatório completo, para envio do material.</li>
            <li><strong>Dados de Navegação:</strong> Cookies técnicos para funcionamento do site.</li>
          </ul>
          
          <h3>3. Finalidade do Uso</h3>
          <p>Seus dados são utilizados exclusivamente para:</p>
          <ul>
            <li>Entregar o resultado do seu teste vocacional.</li>
            <li>Processar a compra do relatório (via gateway seguro, não armazenamos cartão de crédito).</li>
            <li>Melhorar a precisão do nosso algoritmo de IA.</li>
          </ul>
          
          <h3>4. Compartilhamento</h3>
          <p>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. Seus dados podem ser compartilhados apenas com processadores de pagamento estritamente para efetuar a transação do relatório.</p>

          <h3>5. Seus Direitos</h3>
          <p>Você tem direito a solicitar o acesso, correção ou exclusão dos seus dados pessoais a qualquer momento entrando em contato pelos canais informados acima.</p>

          <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
             <p>Última atualização: Outubro de 2024.</p>
             <p>Voltar para a <Link to={AppRoutes.HOME} className="text-primary-600 hover:underline">Página Inicial</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};