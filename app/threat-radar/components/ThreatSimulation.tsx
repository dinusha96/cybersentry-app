'use client';

import React, { useState } from 'react';

interface SimulationState {
  decision: string;
  outcome: string;
  score: number;
}

const ThreatSimulation = () => {
  const [scenario, setScenario] = useState<string>('');
  const [decision, setDecision] = useState<string>('');
  const [outcome, setOutcome] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const scenarios = [
    {
      id: 1,
      description: "You receive an email from 'accounts@yourbank.com' asking to verify your account details due to suspicious activity.",
      correctDecision: "Report",
      outcome: "You reported the phishing attempt to your security team, preventing potential data loss."
    },
    {
      id: 2,
      description: "Your system administrator reports unusually high CPU usage on the database server.",
      correctDecision: "Investigate",
      outcome: "You discovered a DDoS attack early and were able to mitigate it before major damage occurred."
    }
  ];

  const handleDecision = (decision: string) => {
    setDecision(decision);
    const currentScenario = scenarios[0]; // For now, using first scenario
    if (decision === currentScenario.correctDecision) {
      setScore(score + 10);
    }
    setOutcome(currentScenario.outcome);
    setShowResult(true);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Threat Simulation</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg text-white" data-component-name="ThreatSimulation">
        <h3 className="font-semibold mb-4">Scenario:</h3>
        <p className="mb-4">{scenarios[0].description}</p>

        <div className="space-y-4">
          <button
            onClick={() => handleDecision('Block')}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Block
          </button>
          <button
            onClick={() => handleDecision('Investigate')}
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Investigate
          </button>
          <button
            onClick={() => handleDecision('Report')}
            className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Report
          </button>
        </div>
      </div>

      {showResult && (
        <div className="bg-gray-800 p-6 rounded-lg shadow text-white">
          <h3 className="font-semibold mb-2">Outcome:</h3>
          <p>{outcome}</p>
          <p className="mt-4">Current Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default ThreatSimulation;
