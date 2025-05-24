'use client';

import React, { useState, useEffect } from 'react';

interface UserProfile {
  industry: string;
  interests: string[];
}

interface ThreatAlert {
  id: number;
  title: string;
  description: string;
  severity: string;
  industry: string;
  timestamp: string;
}

const ThreatAlerts: React.FC<{ userProfile: UserProfile }> = ({ userProfile }) => {
  const [alerts, setAlerts] = useState<ThreatAlert[]>([]);

  useEffect(() => {
    // Simulated alert data based on user profile
    const generateAlerts = () => {
      const alerts: ThreatAlert[] = [
        {
          id: 1,
          title: "New Ransomware Variant Detected",
          description: "A new ransomware variant has been identified in the wild. It targets financial institutions and encrypts database files.",
          severity: "high",
          industry: "Finance",
          timestamp: new Date().toISOString()
        },
        {
          id: 2,
          title: "Phishing Campaign Targeting HR",
          description: "A sophisticated phishing campaign targeting HR departments has been identified. The emails mimic legitimate job applications.",
          severity: "medium",
          industry: "All",
          timestamp: new Date().toISOString()
        }
      ];
      setAlerts(alerts);
    };

    generateAlerts();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Personalized Threat Alerts</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow text-white" data-component-name="ThreatAlerts">
        <h3 className="font-semibold mb-4">Your Profile:</h3>
        <p>Industry: {userProfile.industry || 'Not specified'}</p>
        <p>Interests: {userProfile.interests.join(', ') || 'Not specified'}</p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-gray-800 p-6 rounded-lg shadow text-white">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{alert.title}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  alert.severity === 'high' ? 'bg-red-500 text-white' :
                  alert.severity === 'medium' ? 'bg-yellow-500 text-white' :
                  'bg-green-500 text-white'
                }`}
              >
                {alert.severity.toUpperCase()}
              </span>
            </div>
            <p className="mt-2">{alert.description}</p>
            <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Learn More
              </button>
              <button className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700">
                Mark as Read
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatAlerts;
