import React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const isUrgent = timeLeft <= 10;
  const percentage = (timeLeft / 30) * 100;

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2">
        <Clock size={20} className={`${isUrgent ? 'text-red-500' : 'text-gray-500'}`} />
        <span className={`font-mono text-lg font-bold ${isUrgent ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>
          {timeLeft}s
        </span>
      </div>
      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-linear ${
            isUrgent ? 'bg-red-500' : 'bg-green-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};