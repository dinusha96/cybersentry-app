'use client';

import { useState } from 'react';

interface SecurityTip {
  id: string;
  platform: string;
  tips: string[];
  checked: boolean;
}

export default function SocialMediaSecurity() {
  const [platforms, setPlatforms] = useState<SecurityTip[]>([
    {
      id: 'facebook',
      platform: 'Facebook',
      tips: [
        'Enable two-factor authentication',
        'Review privacy settings regularly',
        'Check active sessions and devices',
        'Use strong, unique password'
      ],
      checked: false
    },
    {
      id: 'twitter',
      platform: 'Twitter/X',
      tips: [
        'Enable login verification',
        'Review connected apps',
        'Protect your tweets if needed',
        'Use strong, unique password'
      ],
      checked: false
    },
    {
      id: 'instagram',
      platform: 'Instagram',
      tips: [
        'Enable two-factor authentication',
        'Review account activity',
        'Check saved login information',
        'Use strong, unique password'
      ],
      checked: false
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      tips: [
        'Enable two-step verification',
        'Review privacy settings',
        'Check active sessions',
        'Use strong, unique password'
      ],
      checked: false
    }
  ]);

  const togglePlatform = (id: string) => {
    setPlatforms(prev =>
      prev.map(platform =>
        platform.id === id ? { ...platform, checked: !platform.checked } : platform
      )
    );
  };

  const progress = (platforms.filter(p => p.checked).length / platforms.length) * 100;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Social Media Security
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Follow these steps to secure your social media accounts and protect your online presence.
      </p>
      <div className="space-y-4">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="space-y-4">
          {platforms.map(platform => (
            <div key={platform.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id={platform.id}
                  checked={platform.checked}
                  onChange={() => togglePlatform(platform.id)}
                  className="mt-1 w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor={platform.id}
                      className="font-medium text-gray-900 dark:text-white"
                    >
                      {platform.platform}
                    </label>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {platform.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
          <p className="text-sm text-teal-800 dark:text-teal-200">
            Remember to regularly review your security settings and update your passwords.
          </p>
        </div>
      </div>
    </div>
  );
} 