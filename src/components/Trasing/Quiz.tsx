"use client"

import { useState } from "react"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: string
}

const questions: Question[] = [
  {
    id: 1,
    text: "Which continent has the highest number of countries?",
    options: ["Asia", "Europe", "North America", "Africa"],
    correctAnswer: "Africa"
  },
  // Add more questions here...
]

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1)
    setSelectedAnswer(null)
  }

  const question = questions[currentQuestion]

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-purple-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Quiz App</h1>
      </div>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          {currentQuestion + 1}. {question.text}
        </h2>
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              className={`w-full text-left py-3 px-4 rounded-md border ${
                selectedAnswer === option
                  ? option === "Asia"
                    ? "bg-red-100 border-red-300"
                    : option === "Africa"
                    ? "bg-green-100 border-green-300"
                    : "bg-gray-100 border-gray-300"
                  : "bg-white border-gray-300"
              }`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-6">
        <div className="w-full">
          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
            onClick={handleNextQuestion}
          >
            Next
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            {currentQuestion + 1} of {questions.length} questions
          </p>
        </div>
      </div>
    </div>
  )
}