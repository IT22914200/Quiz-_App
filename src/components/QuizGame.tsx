import React from 'react';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { Timer } from './Timer';
import { ArrowRight, Flag } from 'lucide-react';
import { useQuiz } from '../hooks/useQuiz';

interface QuizGameProps {
  state: ReturnType<typeof useQuiz>;
}

export const QuizGame: React.FC<QuizGameProps> = ({ state }) => {
  const { questions, currentQuestion, answers, timeLeft, selectAnswer, nextQuestion, finishQuiz } = state;
  
  const currentQ = questions[currentQuestion];
  const selectedAnswer = answers.find(a => a.questionId === currentQ?.id)?.selectedAnswer ?? null;
  const isLastQuestion = currentQuestion === questions.length - 1;

  if (!currentQ) {
    return <div>Loading question...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <ProgressBar current={currentQuestion} total={questions.length} />
        <Timer timeLeft={timeLeft} />
        
        <div className="mb-8">
          <QuestionCard
            question={currentQ}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={selectAnswer}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={isLastQuestion ? finishQuiz : nextQuestion}
            disabled={selectedAnswer === null}
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLastQuestion ? (
              <>
                <Flag className="w-5 h-5" />
                Finish Quiz
              </>
            ) : (
              <>
                Next Question
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};