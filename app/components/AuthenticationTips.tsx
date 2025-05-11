'use client';

import { useRouter } from 'next/navigation';

export default function AuthenticationTips() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/mfa-guide')}
      className="h-full w-full text-left p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
      tabIndex={0}
      aria-label="Multi-Factor Authentication (MFA) Guide"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Multi-Factor Authentication (MFA)
      </h2>
      <div className="flex-grow">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enhance your account security with multiple layers of protection.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">✓</span>
            <span className="text-gray-600 dark:text-gray-300">Enable MFA on all critical accounts</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">✓</span>
            <span className="text-gray-600 dark:text-gray-300">Use authenticator apps instead of SMS</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">✓</span>
            <span className="text-gray-600 dark:text-gray-300">Keep backup codes in a secure location</span>
          </li>
        </ul>
      </div>
      <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
        <p className="text-sm text-teal-800 dark:text-teal-200">
          MFA adds an extra layer of security beyond just passwords. Click to learn more!
        </p>
      </div>
    </button>
  );
} 