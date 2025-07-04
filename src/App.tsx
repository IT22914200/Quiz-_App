import React from 'react';
import { QuizLanding } from './components/QuizLanding';
import { QuizGame } from './components/QuizGame';
import { QuizResults } from './components/QuizResults';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { ThemeToggle } from './components/ThemeToggle';
import { useQuiz } from './hooks/useQuiz';
import { useTheme } from './hooks/useTheme';

function App() {
  const quiz = useQuiz();
  const { isDark, toggleTheme } = useTheme();

  if (quiz.error) {
    return (
      <>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <ErrorMessage message={quiz.error} onRetry={quiz.resetQuiz} />
      </>
    );
  }

  if (quiz.isLoading && quiz.quizStarted) {
    return (
      <>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <LoadingSpinner />
      </>
    );
  }

  if (quiz.quizCompleted && quiz.results) {
    return (
      <>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <QuizResults results={quiz.results} onRestart={quiz.resetQuiz} />
      </>
    );
  }

  if (quiz.quizStarted && quiz.questions.length > 0) {
    return (
      <>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <QuizGame state={quiz} />
      </>
    );
  }

  return (
    <>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <QuizLanding onStart={quiz.startQuiz} isLoading={quiz.isLoading} />
    </>
  );
}

export default App;