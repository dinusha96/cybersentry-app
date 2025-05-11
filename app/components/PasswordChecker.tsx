'use client';

import { useState, useEffect } from 'react';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const checkPasswordStrength = (pass: string) => {
    let score = 0;
    let feedbacks = [];

    if (pass.length >= 8) score += 1;
    else feedbacks.push('Password should be at least 8 characters long');

    if (/[A-Z]/.test(pass)) score += 1;
    else feedbacks.push('Add uppercase letters');

    if (/[a-z]/.test(pass)) score += 1;
    else feedbacks.push('Add lowercase letters');

    if (/[0-9]/.test(pass)) score += 1;
    else feedbacks.push('Add numbers');

    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    else feedbacks.push('Add special characters');

    setStrength(score);
    setFeedback(feedbacks.join(', '));
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 0:
      case 1:
        return 'bg-red-500';
      case 2:
      case 3:
        return 'bg-yellow-500';
      case 4:
      case 5:
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Password Strength Checker
      </h2>
      <div className="space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password to check"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
        />
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${getStrengthColor()}`}
            style={{ width: `${(strength / 5) * 100}%` }}
          />
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {feedback && <p>Suggestions: {feedback}</p>}
          <p className="mt-2">
            Strength: {strength}/5
          </p>
        </div>
      </div>
    </div>
  );
} 