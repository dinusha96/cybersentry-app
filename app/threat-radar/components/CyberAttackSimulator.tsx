'use client';

import React, { useState, ReactElement } from 'react';

interface AttackScenario {
  id: number;
  type: string;
  description: string;
  simulation: ReactElement;
}

const CyberAttackSimulator = () => {
  const [selectedAttack, setSelectedAttack] = useState<number | null>(null);
  const [showSimulation, setShowSimulation] = useState(false);

  const attackScenarios: AttackScenario[] = [
    {
      id: 1,
      type: 'DDoS Attack',
      description: 'A Distributed Denial of Service attack where multiple compromised systems flood the target with traffic.',
      simulation: (
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Network Traffic Analysis</h3>
            <div className="flex items-center space-x-2">
              <div className="w-64 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-64 h-4 bg-red-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-64 h-4 bg-red-500 rounded-full animate-pulse delay-200"></div>
            </div>
            <p className="text-white mt-2">Inbound traffic: 12.5 Gbps</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Attacker IP Distribution</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-red-500 text-white p-2 rounded">192.168.1.100 (25%)</div>
              <div className="bg-red-500 text-white p-2 rounded">192.168.1.101 (20%)</div>
              <div className="bg-red-500 text-white p-2 rounded">192.168.1.102 (15%)</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      type: 'SQL Injection',
      description: 'An attack where malicious SQL code is inserted into input fields to manipulate the database.',
      simulation: (
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Request Analysis</h3>
            <div className="bg-gray-600 p-3 rounded-lg">
              <p className="text-white">URL: /users/profile?id=1 OR 1=1</p>
              <p className="text-white">Method: GET</p>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Database Response</h3>
            <div className="bg-gray-600 p-3 rounded-lg">
              <p className="text-white">Error: You have an error in your SQL syntax...</p>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Vulnerable Parameters</h3>
            <div className="space-y-2">
              <div className="bg-red-500 text-white p-2 rounded">id - High Risk</div>
              <div className="bg-yellow-500 text-white p-2 rounded">search - Medium Risk</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'Ransomware Attack',
      description: 'A type of malware that encrypts files and demands payment for decryption.',
      simulation: (
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">System Status</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-500 text-white p-3 rounded-lg">
                <p>Encryption Status: Active</p>
                <p>Files Encrypted: 1,245</p>
              </div>
              <div className="bg-red-500 text-white p-3 rounded-lg">
                <p>Ransom Amount: $1,000 BTC</p>
                <p>Deadline: 24h Remaining</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">File System Impact</h3>
            <div className="bg-gray-600 p-3 rounded-lg">
              <p className="text-white">C:\Documents\*.docx - Encrypted</p>
              <p className="text-white">C:\Photos\*.jpg - Encrypted</p>
              <p className="text-white">C:\Database\*.bak - Encrypted</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      type: 'XSS Attack',
      description: 'Cross-Site Scripting attack where malicious scripts are injected into web pages viewed by other users.',
      simulation: (
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Attack Vector</h3>
            <div className="bg-gray-600 p-3 rounded-lg">
              <p className="text-white">Payload: <script>alert('XSS')</script></p>
              <p className="text-white">Injection Point: Comment Section</p>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Victim Browser</h3>
            <div className="bg-gray-600 p-3 rounded-lg">
              <p className="text-white">Cookies Stolen: 5</p>
              <p className="text-white">Session ID: 1234567890abcdef</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      type: 'MITM Attack',
      description: 'Man-in-the-Middle attack where attackers intercept and possibly alter the communication between two parties.',
      simulation: (
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Network Traffic</h3>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-600 p-2 rounded">Client → Attacker</div>
              <div className="bg-gray-600 p-2 rounded">Attacker → Server</div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Captured Data</h3>
            <div className="bg-gray-600 p-3 rounded-lg">
              <p className="text-white">Username: admin</p>
              <p className="text-white">Password: ********</p>
              <p className="text-white">Session Token: eyJhbGciOiJIUzI1NiJ9</p>
            </div>
          </div>
        </div>
      )
    },
  ];

  const handleAttackSelect = (attackId: number) => {
    setSelectedAttack(attackId);
    setShowSimulation(true);
  };

  const handleClose = () => {
    setSelectedAttack(null);
    setShowSimulation(false);
  };

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Cyber Attack Simulator</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow text-white">
        <p className="mb-6 text-center">Select an attack type to see how it works:</p>
        
        <div className="space-y-4">
          {attackScenarios.map((attack) => (
            <button
              key={attack.id}
              onClick={() => handleAttackSelect(attack.id)}
              className="w-full py-3 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-center"
            >
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <h3 className="font-semibold">{attack.type}</h3>
                  <p className="text-gray-400">{attack.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-red-500 text-white">
                    {attack.type === 'DDoS Attack' ? 'HIGH' : 'MEDIUM'}
                  </span>
                  <span className="text-gray-400">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {showSimulation && selectedAttack !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-center w-full">
                {attackScenarios.find(a => a.id === selectedAttack)?.type} Simulation
              </h3>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                ×
              </button>
            </div>
            
            {attackScenarios
              .find((attack) => attack.id === selectedAttack)
              ?.simulation}
          </div>
        </div>
      )}
    </div>
  );
};

export default CyberAttackSimulator;
