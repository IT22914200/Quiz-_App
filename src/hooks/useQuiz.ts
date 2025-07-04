import { useState, useEffect, useCallback } from 'react';
import { QuizState, UserAnswer } from '../types/quiz';
import { api } from '../utils/api';

const initialState: QuizState = {
  questions: [],
  currentQuestion: 0,
  answers: [],
  timeLeft: 30,
  isLoading: false,
  error: null,
  quizStarted: false,
  quizCompleted: false,
  results: null,
};

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>(initialState);

  const startQuiz = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const response = await api.getQuestions();
      setState(prev => ({
        ...prev,
        questions: response.questions,
        quizStarted: true,
        isLoading: false,
        timeLeft: 30,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Failed to load quiz questions',
        isLoading: false,
      }));
    }
  }, []);

  const selectAnswer = useCallback((selectedAnswer: number) => {
    const currentQ = state.questions[state.currentQuestion];
    if (!currentQ) return;

    const newAnswer: UserAnswer = {
      questionId: currentQ.id,
      selectedAnswer,
    };

    setState(prev => ({
      ...prev,
      answers: [...prev.answers.filter(a => a.questionId !== currentQ.id), newAnswer],
    }));
  }, [state.questions, state.currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (state.currentQuestion < state.questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        timeLeft: 30,
      }));
    } else {
      finishQuiz();
    }
  }, [state.currentQuestion, state.questions.length]);

  const finishQuiz = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const response = await api.submitAnswers(state.answers);
      setState(prev => ({
        ...prev,
        results: response,
        quizCompleted: true,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Failed to submit quiz results',
        isLoading: false,
      }));
    }
  }, [state.answers]);

  const resetQuiz = useCallback(() => {
    setState(initialState);
  }, []);

  const tick = useCallback(() => {
    setState(prev => {
      if (prev.timeLeft > 1) {
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      } else {
        // Time's up, move to next question
        setTimeout(() => nextQuestion(), 100);
        return prev;
      }
    });
  }, [nextQuestion]);

  useEffect(() => {
    if (state.quizStarted && !state.quizCompleted && state.timeLeft > 0) {
      const timer = setInterval(tick, 1000);
      return () => clearInterval(timer);
    }
  }, [state.quizStarted, state.quizCompleted, state.timeLeft, tick]);

  return {
    ...state,
    startQuiz,
    selectAnswer,
    nextQuestion,
    finishQuiz,
    resetQuiz,
  };
};