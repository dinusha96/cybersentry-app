'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthenticationTips from '../components/AuthenticationTips';
import CyberMemoryGame from '../components/CyberMemoryGame';
import ThreatRadar from '../components/ThreatRadar';
import PhishingAwarenessQuiz from '../components/PhishingAwarenessQuiz';
import CyberDosAndDonts from '../components/CyberDosAndDonts';
import ComplianceCheck from '../components/ComplianceCheck';
import { ThemeProvider } from '../context/ThemeContext';
import { useTheme } from '../context/ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    
    if (isLoggedIn !== 'true') {
      router.push('/login');
    } else if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    router.push('/login');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                  CyberSentry Dashboard
                </h1>
                {username && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Welcome, {username}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggleButton />
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
              >
                <span>Logout</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to Your Security Hub
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore our security tools and enhance your cyber awareness
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Wrapper - Each card will have the same height */}
            <div className="h-[400px] transform hover:scale-105 transition-transform duration-200">
              <div className="h-full">
                <AuthenticationTips />
              </div>
            </div>

            <div className="h-[400px] transform hover:scale-105 transition-transform duration-200">
              <div className="h-full">
                <CyberMemoryGame />
              </div>
            </div>

            <div className="h-[400px] transform hover:scale-105 transition-transform duration-200">
              <div className="h-full">
                <ThreatRadar />
              </div>
            </div>

            <div className="h-[400px] transform hover:scale-105 transition-transform duration-200">
              <div className="h-full">
                <PhishingAwarenessQuiz />
              </div>
            </div>

            <div className="h-[400px] transform hover:scale-105 transition-transform duration-200">
              <div className="h-full">
                <CyberDosAndDonts />
              </div>
            </div>

            <div className="h-[400px] transform hover:scale-105 transition-transform duration-200">
              <div className="h-full">
                <ComplianceCheck />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
            <p className="text-sm">
              Stay vigilant, stay secure. Your cyber safety is our priority.
            </p>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
} 