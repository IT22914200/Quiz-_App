import React from 'react';
import { Play, Trophy, Clock, Target } from 'lucide-react';

interface QuizLandingProps {
  onStart: () => void;
  isLoading: boolean;
}

export const QuizLanding: React.FC<QuizLandingProps> = ({ onStart, isLoading }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Trophy className="w-10 h-10 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quiz Master
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Test your knowledge with our challenging quiz questions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-purple-400" />
              <h3 className="text-white font-semibold">10 Questions</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Multiple choice questions across various categories
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="text-white font-semibold">30 Seconds</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Time limit per question to keep you on your toes
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h3 className="text-white font-semibold">Get Scored</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Detailed results with explanations and percentage
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onStart}
            disabled={isLoading}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading Questions...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Start Quiz
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};