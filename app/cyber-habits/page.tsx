'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Habit {
  id: string;
  text: string;
  type: 'good' | 'risky';
  icon: string;
}

export default function CyberHabitsPage() {
  const router = useRouter();
  const [habits] = useState<Habit[]>([
    {
      id: 'mfa',
      text: 'Enable Multi-Factor Authentication',
      type: 'good',
      icon: '🔒'
    },
    {
      id: 'password',
      text: 'Use Strong, Unique Passwords',
      type: 'good',
      icon: '🔑'
    },
    {
      id: 'update',
      text: 'Keep Software Updated',
      type: 'good',
      icon: '🔄'
    },
    {
      id: 'backup',
      text: 'Regular Data Backups',
      type: 'good',
      icon: '💾'
    },
    {
      id: 'verify',
      text: 'Verify Email Senders',
      type: 'good',
      icon: '✉️'
    },
    {
      id: 'privacy',
      text: 'Review Privacy Settings',
      type: 'good',
      icon: '👁️'
    },
    {
      id: 'click',
      text: 'Click Unknown Links',
      type: 'risky',
      icon: '⚠️'
    },
    {
      id: 'share',
      text: 'Share Passwords',
      type: 'risky',
      icon: '🤫'
    },
    {
      id: 'public',
      text: 'Use Public Wi-Fi for Banking',
      type: 'risky',
      icon: '📶'
    },
    {
      id: 'ignore',
      text: 'Ignore Security Updates',
      type: 'risky',
      icon: '❌'
    },
    {
      id: 'download',
      text: 'Download from Untrusted Sources',
      type: 'risky',
      icon: '⬇️'
    },
    {
      id: 'post',
      text: 'Post Sensitive Information',
      type: 'risky',
      icon: '📱'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Cyber Habits Board</h1>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Good habits keep you safe, risky habits put you in danger. Which side are you on?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Good Habits Side */}
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-4 flex items-center">
                  <span className="mr-2">✅</span> Good Habits
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {habits
                    .filter(habit => habit.type === 'good')
                    .map(habit => (
                      <div
                        key={habit.id}
                        className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="text-2xl mr-3">{habit.icon}</span>
                        <span className="text-gray-700 dark:text-gray-300">{habit.text}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Risky Habits Side */}
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-4 flex items-center">
                  <span className="mr-2">❌</span> Risky Habits
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {habits
                    .filter(habit => habit.type === 'risky')
                    .map(habit => (
                      <div
                        key={habit.id}
                        className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="text-2xl mr-3">{habit.icon}</span>
                        <span className="text-gray-700 dark:text-gray-300">{habit.text}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
            <p className="text-sm text-teal-800 dark:text-teal-200">
              💡 Tip: Make good habits your default behavior. It's easier to stay safe than to recover from a security incident!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 