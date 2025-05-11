'use client';

export default function CyberMemoryGame() {
  return (
    <div className="h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Cyber Memory Game
      </h2>
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎮</div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Test your memory while learning about cybersecurity!
          </p>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            Coming Soon
          </button>
        </div>
      </div>
      <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
        <p className="text-sm text-teal-800 dark:text-teal-200">
          A fun way to learn and remember important security concepts.
        </p>
      </div>
    </div>
  );
} 