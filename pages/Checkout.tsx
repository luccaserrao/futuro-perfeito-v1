import React, { useState } from 'react';
import { Seo } from '../components/Seo';
import { Button } from '../components/Button';
import { ShieldCheck, CreditCard } from 'lucide-react';

export const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <Seo title="Finalizar Compra" description="Adquira seu relatório completo." />
      
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
            <h1 className="font-bold text-lg text-slate-900">Checkout Seguro</h1>
            <ShieldCheck className="text-green-500" />
          </div>

          <div className="p-8">
            {/* Order Summary */}
            <div className="flex gap-4 mb-8 pb-8 border-b border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                PDF
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Relatório Vocacional Premium</h3>
                <p className="text-sm text-slate-500 mb-1">Análise completa + Cronograma</p>
                <span className="text-primary-600 font-bold">R$ 29,90</span>
              </div>
            </div>

            {/* Form Placeholder */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email para recebimento</label>
                <input type="email" className="w-full rounded-lg border-slate-300 border p-2.5 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="seu@email.com" />
              </div>
              
              <div className="pt-4">
                <label className="block text-sm font-medium text-slate-700 mb-3">Método de Pagamento</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 p-3 border-2 border-primary-500 bg-primary-50 text-primary-700 rounded-xl font-medium">
                    <CreditCard size={18} /> Cartão
                  </button>
                  <button className="flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600">
                     Pix
                  </button>
                </div>
              </div>

              <div className="pt-6">
                <Button fullWidth size="lg" className="text-lg">
                  Pagar R$ 29,90
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Ambiente 100% criptografado. Garantia de 7 dias.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};