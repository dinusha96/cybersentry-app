'use client';

import React, { useState } from 'react';

interface ResponseStep {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

const IncidentResponse = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const responseSteps: ResponseStep[] = [
    {
      id: 1,
      question: "A user reports receiving a suspicious email attachment. What should you do first?",
      options: [
        "Open the attachment to investigate",
        "Isolate the user's system",
        "Report to management",
        "Run antivirus scan"
      ],
      correctOption: 1,
      explanation: "Isolating the system prevents potential spread of malware."
    },
    {
      id: 2,
      question: "You detect unusual network traffic patterns. What's the next step?",
      options: [
        "Shut down the network",
        "Investigate the traffic patterns",
        "Notify all users",
        "Update firewall rules"
      ],
      correctOption: 1,
      explanation: "Investigating helps determine if it's a legitimate threat."
    }
  ];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    if (optionIndex === responseSteps[currentStep].correctOption) {
      setScore(score + 1);
    }
  };

  const nextStep = () => {
    if (currentStep < responseSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setScore(0);
    setSelectedOption(null);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Incident Response Drill</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow text-white" data-component-name="IncidentResponse">
        <h3 className="font-semibold mb-4">
          Step {currentStep + 1} of {responseSteps.length}
        </h3>
        <p className="mb-6">{responseSteps[currentStep].question}</p>

        <div className="space-y-4">
          {responseSteps[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`w-full py-2 px-4 rounded ${
                selectedOption !== null
                  ? selectedOption === index
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-600 text-white'
                  : 'bg-gray-800 border border-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption !== null && (
          <div className="mt-4 p-4 bg-gray-700 rounded text-white">
            <h4 className="font-semibold mb-2">Feedback:</h4>
            <p>{responseSteps[currentStep].explanation}</p>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Previous
            </button>
          )}
          {currentStep < responseSteps.length - 1 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={selectedOption === null}
            >
              Next
            </button>
          ) : (
            <div className="flex space-x-4">
              <button
                onClick={restart}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Restart
              </button>
              <span className="text-2xl font-bold text-green-600">
                Score: {score}/{responseSteps.length}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncidentResponse;
