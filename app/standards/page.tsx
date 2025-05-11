'use client';

import { useRouter } from 'next/navigation';

interface Standard {
  id: string;
  name: string;
  description: string;
  category: 'framework' | 'regulation' | 'guideline';
  link?: string;
}

export default function StandardsPage() {
  const router = useRouter();
  const standards: Standard[] = [
    {
      id: 'nist',
      name: 'NIST Cybersecurity Framework',
      description: 'A framework for managing cybersecurity risk to systems, networks, and data.',
      category: 'framework',
      link: 'https://www.nist.gov/cyberframework'
    },
    {
      id: 'iso27001',
      name: 'ISO/IEC 27001',
      description: 'International standard for information security management systems.',
      category: 'framework',
      link: 'https://www.iso.org/isoiec-27001-information-security.html'
    },
    {
      id: 'ism',
      name: 'Information Security Manual (ISM)',
      description: 'Australian government security guidelines for protecting systems and data.',
      category: 'guideline',
      link: 'https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ism'
    },
    {
      id: 'e8',
      name: 'Essential 8',
      description: 'Australian cyber security mitigation strategies to protect organizations.',
      category: 'guideline',
      link: 'https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight'
    },
    {
      id: 'gdpr',
      name: 'GDPR',
      description: 'European data protection and privacy regulation.',
      category: 'regulation',
      link: 'https://gdpr.eu/'
    },
    {
      id: 'cis',
      name: 'CIS Controls',
      description: 'Critical security controls for effective cyber defense.',
      category: 'framework',
      link: 'https://www.cisecurity.org/controls/'
    }
  ];

  const getCategoryColor = (category: Standard['category']) => {
    switch (category) {
      case 'framework':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'regulation':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'guideline':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Security Standards
          </h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map(standard => (
            <div
              key={standard.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {standard.name}
                </h2>
                <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(standard.category)}`}>
                  {standard.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {standard.description}
              </p>
              {standard.link && (
                <a
                  href={standard.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 