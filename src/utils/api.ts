const API_BASE_URL = 'http://localhost:3001/api';

export const api = {
  async getQuestions() {
    const response = await fetch(`${API_BASE_URL}/quiz`);
    if (!response.ok) {
      throw new Error('Failed to fetch questions');
    }
    return response.json();
  },

  async submitAnswers(answers: Array<{ questionId: number; selectedAnswer: number }>) {
    const response = await fetch(`${API_BASE_URL}/quiz/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });
    if (!response.ok) {
      throw new Error('Failed to submit answers');
    }
    return response.json();
  },
};