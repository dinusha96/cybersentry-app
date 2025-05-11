'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Theme Settings
      </h2>
      <button
        onClick={toggleTheme}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      >
        <span className="text-gray-700 dark:text-gray-300">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
        <span className="text-gray-700 dark:text-gray-300">
          {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </span>
      </button>
    </div>
  );
} 