import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
        <span>Progresso</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};