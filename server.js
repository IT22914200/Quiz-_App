import express from 'express';
import cors from 'cors';
import { questions } from './data/questions.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Utility function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Routes
app.get('/api/quiz', (req, res) => {
  try {
    // Shuffle questions and limit to 10
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);
    
    // Remove correct answers from response
    const clientQuestions = shuffledQuestions.map(({ correctAnswer, ...question }) => question);
    
    res.json({
      success: true,
      questions: clientQuestions,
      total: clientQuestions.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching quiz questions'
    });
  }
});

app.post('/api/quiz/submit', (req, res) => {
  try {
    const { answers } = req.body;
    
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid answers format'
      });
    }

    let score = 0;
    const results = [];

    // Calculate score and prepare results
    answers.forEach((answer, index) => {
      const question = questions.find(q => q.id === answer.questionId);
      if (!question) return;

      const isCorrect = answer.selectedAnswer === question.correctAnswer;
      if (isCorrect) score++;

      results.push({
        questionId: question.id,
        question: question.question,
        selectedAnswer: answer.selectedAnswer,
        correctAnswer: question.correctAnswer,
        options: question.options,
        isCorrect,
        category: question.category
      });
    });

    const percentage = Math.round((score / answers.length) * 100);
    
    res.json({
      success: true,
      score,
      total: answers.length,
      percentage,
      results,
      message: percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good job!' : 'Keep practicing!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error calculating quiz results'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});