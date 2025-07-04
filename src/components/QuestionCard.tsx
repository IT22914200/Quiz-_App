import React from 'react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answer: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}) => {
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
      <div className="mb-2">
        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
          {question.category}
        </span>
      </div>
      
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
              selectedAnswer === index
                ? 'bg-purple-500/30 border-purple-400 text-white'
                : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-gray-200'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                selectedAnswer === index
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-gray-300'
              }`}>
                {optionLabels[index]}
              </span>
              <span className="flex-1">{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};