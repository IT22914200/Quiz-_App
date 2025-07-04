# Quiz Master 🏆

A modern, full-stack quiz application built with React, TypeScript, Node.js, and Tailwind CSS. Test your knowledge across multiple categories with an engaging, responsive interface.

![Quiz Master Screenshot](https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

### 🎯 Core Functionality
- **10 Randomized Questions** - Each quiz session presents a unique set of questions
- **30-Second Timer** - Keep the pressure on with countdown timers for each question
- **Multiple Categories** - Geography, Science, History, Technology, and more
- **Real-time Scoring** - Instant feedback with detailed results
- **Progress Tracking** - Visual progress bar showing quiz completion

### 🎨 User Experience
- **Modern Design** - Beautiful gradient backgrounds with glassmorphism effects
- **Dark/Light Theme** - Automatic theme detection with manual toggle
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - Engaging transitions and hover effects
- **Confetti Celebration** - Animated rewards for high scores (80%+)
- **Loading States** - Professional loading indicators throughout

### 🔧 Technical Features
- **TypeScript** - Full type safety across the application
- **Component Architecture** - Modular, reusable React components
- **Custom Hooks** - Clean state management with useQuiz and useTheme
- **Error Handling** - Comprehensive error boundaries and user feedback
- **API Integration** - RESTful backend with proper CORS configuration

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3001`

## 📁 Project Structure

```
quiz-app/
├── src/
│   ├── components/          # React components
│   │   ├── QuizLanding.tsx  # Landing page
│   │   ├── QuizGame.tsx     # Main quiz interface
│   │   ├── QuizResults.tsx  # Results display
│   │   ├── QuestionCard.tsx # Individual question
│   │   ├── ProgressBar.tsx  # Progress indicator
│   │   ├── Timer.tsx        # Countdown timer
│   │   └── ThemeToggle.tsx  # Theme switcher
│   ├── hooks/               # Custom React hooks
│   │   ├── useQuiz.ts       # Quiz state management
│   │   └── useTheme.ts      # Theme management
│   ├── types/               # TypeScript definitions
│   │   └── quiz.ts          # Quiz-related types
│   ├── utils/               # Utility functions
│   │   └── api.ts           # API client
│   └── App.tsx              # Main application
├── data/
│   └── questions.js         # Question bank
├── server.js                # Express server
└── package.json
```

## 🎮 How to Play

1. **Start Quiz** - Click the "Start Quiz" button on the landing page
2. **Answer Questions** - Select your answer from the multiple choice options
3. **Beat the Timer** - You have 30 seconds per question
4. **Navigate** - Use "Next Question" or let the timer auto-advance
5. **View Results** - See your score and detailed answer breakdown
6. **Play Again** - Restart for a new set of randomized questions

## 🛠️ API Endpoints

### GET `/api/quiz`
Fetches a randomized set of 10 quiz questions.

**Response:**
```json
{
  "success": true,
  "questions": [...],
  "total": 10
}
```

### POST `/api/quiz/submit`
Submits answers and returns detailed results.

**Request:**
```json
{
  "answers": [
    {
      "questionId": 1,
      "selectedAnswer": 2
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "score": 8,
  "total": 10,
  "percentage": 80,
  "results": [...],
  "message": "Excellent!"
}
```

## 🎨 Customization

### Adding Questions
Edit `data/questions.js` to add new questions:

```javascript
{
  id: 16,
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 0, // Index of correct answer
  category: "Your Category"
}
```

### Styling
The application uses Tailwind CSS. Key design tokens:

- **Colors**: Purple/blue gradient theme
- **Fonts**: System font stack with mono for timers
- **Spacing**: 8px grid system
- **Animations**: Smooth transitions with hover effects

### Timer Settings
Modify timer duration in `src/hooks/useQuiz.ts`:

```typescript
// Change from 30 seconds to your preferred duration
timeLeft: 30
```

## 📱 Responsive Design

The application is built mobile-first with breakpoints:

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Optimized spacing
- **Desktop**: > 1024px - Full feature layout

## 🔧 Development Scripts

```bash
npm run dev      # Start development servers (frontend + backend)
npm run client   # Start only frontend (Vite)
npm run server   # Start only backend (Express)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🚀 Production Deployment

### Frontend (Vite Build)
```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

### Backend (Express Server)
```bash
# Set environment variables
export PORT=3001
export NODE_ENV=production

# Start the server
node server.js
```

### Environment Variables
Create a `.env` file for production:

```env
PORT=3001
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lucide React** - Beautiful icons
- **Tailwind CSS** - Utility-first CSS framework
- **Canvas Confetti** - Celebration animations
- **Pexels** - Stock photography

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include your environment details and steps to reproduce

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**