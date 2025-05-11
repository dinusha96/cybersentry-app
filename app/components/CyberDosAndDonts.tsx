'use client';

import { useRouter } from 'next/navigation';

export default function CyberDosAndDonts() {
  const router = useRouter();

  return (
    <div 
      onClick={() => router.push('/cyber-habits')}
      className="h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow flex flex-col"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Cyber Habits Board
      </h2>
      <div className="flex-grow flex flex-col justify-center">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">📋</div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Learn about good and risky cybersecurity habits to stay safe online.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="text-center">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Good Habits</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">❌</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Risky Habits</p>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
        <p className="text-sm text-teal-800 dark:text-teal-200">
          Click to explore our comprehensive guide to cyber habits.
        </p>
      </div>
    </div>
  );
} 