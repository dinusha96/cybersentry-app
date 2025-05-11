'use client';

import Link from 'next/link';
import { useState } from 'react';

const TOPICS = [
  { id: 'password', title: 'Password Security', emoji: '🔑' },
  { id: 'email', title: 'Email Safety', emoji: '✉️' },
  { id: 'device', title: 'Device Security', emoji: '📱' },
  { id: 'online', title: 'Online Behavior', emoji: '🌐' },
  { id: 'backup', title: 'Data Backup', emoji: '💾' },
  { id: 'privacy', title: 'Privacy Settings', emoji: '🔒' },
  { id: 'network', title: 'Network Security', emoji: '🌐' },
  { id: 'physical', title: 'Physical Security', emoji: '🔒' },
];

interface TopicGuide {
  title: string;
  emoji: string;
  content: string[];
}

const TOPIC_GUIDES: Record<string, TopicGuide> = {
  password: {
    title: 'Password Security',
    emoji: '🔑',
    content: [
      'Use strong, unique passwords for each account.',
      'Enable multi-factor authentication (MFA).',
      'Use a password manager to store and generate passwords.',
      'Avoid using easily guessable information like birthdays or names.',
      'Change passwords regularly, especially after a security breach.',
    ],
  },
  email: {
    title: 'Email Safety',
    emoji: '✉️',
    content: [
      'Be cautious with email attachments and links.',
      'Verify sender details before responding.',
      'Use spam filters and report suspicious emails.',
      'Avoid sharing sensitive information via email.',
      'Log out of email accounts when finished.',
    ],
  },
  device: {
    title: 'Device Security',
    emoji: '📱',
    content: [
      'Regularly update software and devices.',
      'Lock your devices when not in use.',
      'Enable device encryption.',
      'Use a VPN on public networks.',
      'Install and update antivirus software.',
    ],
  },
  online: {
    title: 'Online Behavior',
    emoji: '🌐',
    content: [
      'Review privacy settings on social media.',
      'Keep personal information private.',
      'Use secure, HTTPS websites.',
      'Report suspicious activity promptly.',
      'Avoid oversharing personal info online.',
    ],
  },
  backup: {
    title: 'Data Backup',
    emoji: '💾',
    content: [
      'Back up important data frequently.',
      'Use cloud storage or external drives for backups.',
      'Test your backups regularly to ensure they work.',
      'Keep backup copies in a secure location.',
      'Automate backup processes when possible.',
    ],
  },
  privacy: {
    title: 'Privacy Settings',
    emoji: '🔒',
    content: [
      'Review and adjust privacy settings on all accounts.',
      'Limit the amount of personal information shared online.',
      'Use privacy-focused browsers and search engines.',
      'Enable two-factor authentication for added security.',
      'Regularly check for data breaches and update security settings.',
    ],
  },
  network: {
    title: 'Network Security',
    emoji: '🌐',
    content: [
      'Use a firewall to protect your network.',
      'Change default router passwords.',
      'Enable WPA3 encryption on your Wi-Fi.',
      'Regularly check for unauthorized devices on your network.',
      'Use a VPN when accessing public networks.',
    ],
  },
  physical: {
    title: 'Physical Security',
    emoji: '🔒',
    content: [
      'Lock doors and windows when leaving home or office.',
      'Use security cameras and alarms.',
      'Keep sensitive documents in a secure location.',
      'Shred documents containing personal information.',
      'Be aware of your surroundings and report suspicious activity.',
    ],
  },
};

export default function CyberHabitsBoard() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-teal-700 dark:text-teal-300 text-center">Cyber Habits Board</h1>
        <p className="mb-8 text-gray-700 dark:text-gray-200 text-center">
          Explore detailed guides for various cybersecurity topics. Click on a topic to learn more!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              {topic.emoji} {topic.title}
            </button>
          ))}
        </div>
        {selectedTopic && (
          <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-300 mb-4 flex items-center">
              {TOPIC_GUIDES[selectedTopic].emoji} {TOPIC_GUIDES[selectedTopic].title}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              {TOPIC_GUIDES[selectedTopic].content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-8 text-center">
          <Link href="/dashboard" className="inline-block px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
} 