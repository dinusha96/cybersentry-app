'use client';

import { useState } from 'react';

interface ScanResult {
  id: string;
  name: string;
  status: 'secure' | 'warning' | 'critical';
  description: string;
}

export default function DeviceSecurityScanner() {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<ScanResult[]>([
    {
      id: 'firewall',
      name: 'Firewall Status',
      status: 'secure',
      description: 'Firewall is active and properly configured'
    },
    {
      id: 'antivirus',
      name: 'Antivirus Protection',
      status: 'warning',
      description: 'Antivirus definitions need updating'
    },
    {
      id: 'updates',
      name: 'System Updates',
      status: 'critical',
      description: 'Critical security updates available'
    },
    {
      id: 'encryption',
      name: 'Disk Encryption',
      status: 'secure',
      description: 'Full disk encryption is enabled'
    }
  ]);

  const startScan = () => {
    setScanning(true);
    // Simulate scan progress
    setTimeout(() => {
      setScanning(false);
    }, 2000);
  };

  const getStatusColor = (status: ScanResult['status']) => {
    switch (status) {
      case 'secure':
        return 'text-green-600 dark:text-green-400';
      case 'warning':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'critical':
        return 'text-red-600 dark:text-red-400';
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Device Security Scanner
      </h2>
      <div className="space-y-4">
        <button
          onClick={startScan}
          disabled={scanning}
          className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50"
        >
          {scanning ? 'Scanning...' : 'Start Security Scan'}
        </button>
        <div className="space-y-3">
          {results.map(result => (
            <div key={result.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 dark:text-white">{result.name}</h3>
                <span className={`font-semibold ${getStatusColor(result.status)}`}>
                  {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 