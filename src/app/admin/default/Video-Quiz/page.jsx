'use client';
import React, { useState } from 'react';

const questions = [
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
    text: 'Which planet is the largest in our solar system?',
    options: ['Venus', 'Earth', 'Mars', 'Jupiter'],
    correctAnswer: 'Jupiter',
  },
];

const VideoQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
    } else {
      alert(`Quiz completed! Your score is: ${score}`);
      // Handle quiz completion, e.g., navigate or display results
    }
  };

  const handleCorrectAnswer = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-4 text-gray-900 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <p className="mb-4 text-lg">{questions[currentQuestion].text}</p>
      <div className="mb-4 flex flex-wrap justify-center text-gray-900">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`${
              selectedAnswer === option
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            } m-2 rounded-md px-4 py-2`}
            onClick={() => {
              handleAnswerSelect(option);
              if (option === questions[currentQuestion].correctAnswer) {
                handleCorrectAnswer();
              }
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        Next
      </button>
    </div>
  );
};

export default VideoQuizPage;
