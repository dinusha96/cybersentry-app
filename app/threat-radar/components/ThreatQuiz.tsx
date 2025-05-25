'use client';

import React, { useState } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const ThreatQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the most common type of cyber attack targeting businesses?",
      options: [
        "Phishing",
        "Ransomware",
        "DDoS",
        "SQL Injection"
      ],
      correctAnswer: 0,
      explanation: "Phishing remains the most common type of cyber attack, often used as an initial entry point for other attacks."
    },
    {
      id: 2,
      question: "Which of these is NOT a good security practice?",
      options: [
        "Using strong, unique passwords",
        "Clicking on suspicious email links",
        "Regular software updates",
        "Two-factor authentication"
      ],
      correctAnswer: 1,
      explanation: "Clicking on suspicious email links is a dangerous practice that can lead to malware infections and data breaches."
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedOption(answerIndex);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="space-y-6 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Threat Quiz</h2>
      
      {!showResults ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow text-white">
          <h3 className="font-semibold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <p className="mb-6">{questions[currentQuestion].question}</p>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full py-2 px-4 rounded ${
                  selectedOption !== null
                    ? selectedOption === index
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 border border-gray-600 hover:bg-gray-600 text-white'
                    : 'bg-gray-800 border border-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={nextQuestion}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={selectedOption === null}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Quiz Results</h3>
          <p className="text-2xl font-bold text-green-500 mb-4">
            Score: {score}/{questions.length}
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResults(false);
              setSelectedOption(null);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreatQuiz;
