'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Earth', 'Mars', 'Mercury'],
    correctAnswer: 'Mercury',
  },
  {
    id: 2,
    text: 'Which planet is known as the “Blue Planet”?',
    options: ['Venus', 'Earth', 'Neptune', 'Uranus'],
    correctAnswer: 'Earth',
  },
  {
    id: 3,
    text: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    id: 4,
    text: 'Which is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
    correctAnswer: 'Jupiter',
  },
  {
    id: 5,
    text: 'Which planet has rings around it?',
    options: ['Venus', 'Mars', 'Saturn', 'Mercury'],
    correctAnswer: 'Saturn',
  },
  {
    id: 6,
    text: 'What is the hottest planet in our solar system?',
    options: ['Mercury', 'Venus', 'Earth', 'Mars'],
    correctAnswer: 'Venus',
  },
  {
    id: 7,
    text: 'What is the name of the dwarf planet in our solar system?',
    options: ['Pluto', 'Neptune', 'Uranus', 'Earth'],
    correctAnswer: 'Pluto',
  },
  {
    id: 8,
    text: 'Which planet is farthest from the Sun?',
    options: ['Saturn', 'Uranus', 'Neptune', 'Jupiter'],
    correctAnswer: 'Neptune',
  },
  {
    id: 9,
    text: 'How many planets are in our solar system?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '8',
  },
  {
    id: 10,
    text: 'What is the smallest planet in our solar system?',
    options: ['Mercury', 'Mars', 'Earth', 'Venus'],
    correctAnswer: 'Mercury',
  },
];


export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
    setReviewMode(false);
  };

  const startReview = () => {
    setReviewMode(true);
    setCurrentQuestion(0);
  };

  if (quizCompleted && !reviewMode) {
    const passThreshold = questions.length * 0.5;
    const passed = score >= passThreshold;
    return (
      <div className="flex h-screen w-full items-center bg-gray-100 dark:bg-navy-900">
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-navy-900">
          <div className="bg-purple-100 p-6 dark:bg-navy-800">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white ">
              Quiz Completed!
            </h1>
          </div>
          <div className="p-6 text-left dark:text-white bg-navy-800">
            <img
              src={
                passed
                  ? '/complete.jpg?height=200&width=200&text=Success'
                  : '/retry.jpg?height=200&width=200&text=Try+Again'
              }
              alt={passed ? 'Success' : 'Try Again'}
              className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
            />
            <h2 className="mb-4 text-3xl font-bold dark:text-white">
              Your Score: {score}/{questions.length}
            </h2>
            <p className="mb-6 text-lg dark:text-white">
              {passed
                ? "Great job! You've passed the quiz."
                : 'You can do better! Why not give it another try?'}
            </p>
            <div className="space-x-4 ">
              {passed && (
                <Link href="/admin/Learning">
                  <button className="h-12 rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                    Go to Home
                  </button>
                </Link>
              )}
              <button
                className="h-12 rounded-md bg-navy-600 px-4 py-2 text-white hover:bg-navy-300"
                onClick={resetQuiz}
              >
                Retry
              </button>
              {!passed && (
                <button
                  className="h-12 rounded-md bg-navy-600 px-4 py-2 text-white hover:bg-navy-300"
                  onClick={startReview}
                >
                  Review Answers
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="flex h-screen w-full items-center bg-gray-100 dark:bg-navy-900">
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-navy-900">
        <div className="bg-purple-100 p-6 text-white dark:bg-brand-400 dark:bg-navy-800 ">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Quiz App
          </h1>
        </div>
        <div className="p-6 dark:bg-navy-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            {currentQuestion + 1}. {question.text}
          </h2>
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option}
                className={`w-full rounded-md border px-4 py-3 text-left ${
                  reviewMode
                    ? option === question.correctAnswer
                      ? 'border-green-300 bg-green-100'
                      : 'border-gray-300 bg-white'
                    : selectedAnswer === option
                    ? 'border-gray-300 bg-navy-100'
                    : 'border-gray-300 bg-white'
                }`}
                onClick={() => !reviewMode && handleAnswerSelect(option)}
                disabled={reviewMode}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-6 dark:bg-navy-800">
          <div className="w-full  dark:bg-navy-800">
            {reviewMode ? (
              <div className="flex justify-between dark:bg-navy-800">
                <button
                  className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
                  onClick={() =>
                    setCurrentQuestion(Math.max(0, currentQuestion - 1))
                  }
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                <button
                  className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
                  onClick={() => {
                    if (currentQuestion < questions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      resetQuiz();
                    }
                  }}
                >
                  {currentQuestion === questions.length - 1
                    ? 'Finish Review'
                    : 'Next'}
                </button>
              </div>
            ) : (
              <button
                className="w-full rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 dark:bg-brand-400"
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
            <p className="mt-4 text-center text-sm text-gray-500">
              {currentQuestion + 1} of {questions.length} questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
