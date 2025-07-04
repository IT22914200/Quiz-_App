export interface Question {
  id: number;
  question: string;
  options: string[];
  category: string;
}

export interface QuestionWithAnswer extends Question {
  correctAnswer: number;
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
}

export interface QuizResult {
  questionId: number;
  question: string;
  selectedAnswer: number;
  correctAnswer: number;
  options: string[];
  isCorrect: boolean;
  category: string;
}

export interface QuizResponse {
  success: boolean;
  score: number;
  total: number;
  percentage: number;
  results: QuizResult[];
  message: string;
}

export interface QuizState {
  questions: Question[];
  currentQuestion: number;
  answers: UserAnswer[];
  timeLeft: number;
  isLoading: boolean;
  error: string | null;
  quizStarted: boolean;
  quizCompleted: boolean;
  results: QuizResponse | null;
}