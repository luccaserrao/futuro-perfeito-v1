import React from 'react';
import { Option } from '../../types';

interface AnswerButtonProps {
  option: Option;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({ option, selected, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group
        ${selected 
          ? 'border-primary-500 bg-primary-50 text-primary-900 shadow-lg scale-[1.01] z-10' 
          : 'border-slate-200 bg-white text-slate-600 hover:border-primary-300 hover:bg-slate-50 hover:shadow-md'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span className="font-medium text-base md:text-lg leading-relaxed">{option.label}</span>
      <div className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
        ${selected 
          ? 'border-primary-500 bg-primary-500' 
          : 'border-slate-300 group-hover:border-primary-400'
        }`}
      >
        {selected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
      </div>
    </button>
  );
};