import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in slide-in-from-top-2">
          {answer}
        </div>
      )}
    </div>
  );
};
