'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const modules = [
  {
    title: 'Threat Intelligence',
    description: 'Monitor and analyze potential security threats',
    icon: '🔍',
  },
  {
    title: 'Vulnerability Management',
    description: 'Track and manage system vulnerabilities',
    icon: '🛡️',
  },
  {
    title: 'Incident Response',
    description: 'Handle and respond to security incidents',
    icon: '🚨',
  },
  {
    title: 'Compliance',
    description: 'Ensure regulatory compliance',
    icon: '📋',
  },
  {
    title: 'Asset Management',
    description: 'Manage and track security assets',
    icon: '💼',
  },
  {
    title: 'Reports & Analytics',
    description: 'View security metrics and reports',
    icon: '📊',
  },
];

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Security Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{module.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {module.title}
              </h2>
              <p className="text-gray-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 