'use client';

import { useState } from 'react';

export default function CookieConsentSimulator() {
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const toggleConsent = (type: keyof typeof consent) => {
    setConsent(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Cookie Consent Simulator
      </h2>
      <div className="space-y-4">
        {Object.entries(consent).map(([type, value]) => (
          <div key={type} className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300 capitalize">{type}</span>
            <button
              onClick={() => toggleConsent(type as keyof typeof consent)}
              className={`w-12 h-6 rounded-full transition-colors ${
                value ? 'bg-teal-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                value ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 