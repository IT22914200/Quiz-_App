import React, { useEffect } from 'react';
import { Trophy, RotateCcw, CheckCircle, XCircle, Star } from 'lucide-react';
import { QuizResponse } from '../types/quiz';
import confetti from 'canvas-confetti';

interface QuizResultsProps {
  results: QuizResponse;
  onRestart: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ results, onRestart }) => {
  const { score, total, percentage, results: questionResults, message } = results;

  useEffect(() => {
    if (percentage >= 80) {
      // Trigger confetti for high scores
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [percentage]);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (percentage: number) => {
    if (percentage >= 80) return <Trophy className="w-12 h-12 text-yellow-400" />;
    if (percentage >= 60) return <Star className="w-12 h-12 text-yellow-400" />;
    return <Trophy className="w-12 h-12 text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Score Summary */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            {getScoreIcon(percentage)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiz Complete!
          </h1>
          <div className={`text-6xl md:text-7xl font-bold mb-4 ${getScoreColor(percentage)}`}>
            {percentage}%
          </div>
          <p className="text-xl text-gray-300 mb-2">
            You scored {score} out of {total} questions correctly
          </p>
          <p className="text-lg text-purple-300 font-semibold">
            {message}
          </p>
        </div>

        {/* Detailed Results */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Detailed Results</h2>
          <div className="space-y-4">
            {questionResults.map((result, index) => (
              <div
                key={result.questionId}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {result.isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-400">
                        Question {index + 1}
                      </span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        {result.category}
                      </span>
                    </div>
                    <p className="text-white font-medium mb-3">{result.question}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Your answer:</span>
                        <span className={`font-medium ${result.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                          {result.options[result.selectedAnswer]}
                        </span>
                      </div>
                      {!result.isCorrect && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Correct answer:</span>
                          <span className="font-medium text-green-400">
                            {result.options[result.correctAnswer]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restart Button */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
          >
            <RotateCcw className="w-5 h-5" />
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};