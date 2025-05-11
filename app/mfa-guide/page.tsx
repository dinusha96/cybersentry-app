'use client';

import Link from 'next/link';

export default function MFAGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-teal-700 dark:text-teal-300">Multi-Factor Authentication (MFA) Guide</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-200">
          Multi-Factor Authentication (MFA) adds an extra layer of security to your accounts by requiring more than just a password. Even if your password is compromised, MFA helps keep your accounts safe.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Types of MFA</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-200">
          <li><b>Authenticator App</b> (e.g., Google Authenticator, Authy)</li>
          <li><b>SMS Code</b> (text message to your phone)</li>
          <li><b>Email Code</b> (code sent to your email)</li>
          <li><b>Hardware Security Key</b> (e.g., YubiKey, Titan Key)</li>
          <li><b>Biometrics</b> (fingerprint, face recognition)</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">How to Enable MFA (General Steps)</h2>
        <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-200 space-y-1">
          <li>Log in to your account and go to security settings.</li>
          <li>Find the option for Multi-Factor Authentication or Two-Step Verification.</li>
          <li>Choose your preferred MFA method (authenticator app recommended).</li>
          <li>Follow the prompts to set up and verify your MFA method.</li>
          <li>Save your backup codes in a secure place.</li>
        </ol>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Best Practices</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-200">
          <li>Always enable MFA on important accounts (email, banking, social media).</li>
          <li>Prefer authenticator apps or hardware keys over SMS when possible.</li>
          <li>Never share your MFA codes with anyone.</li>
          <li>Keep backup codes secure and private.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Learn More</h2>
        <ul className="list-disc pl-6 mb-4 text-blue-700 dark:text-blue-300">
          <li><a href="https://www.cyber.gov.au/acsc/view-all-content/guidance-materials/multi-factor-authentication" target="_blank" rel="noopener noreferrer">Australian Cyber Security Centre: MFA Guidance</a></li>
          <li><a href="https://www.cisa.gov/secure-your-accounts" target="_blank" rel="noopener noreferrer">CISA: Secure Your Accounts</a></li>
          <li><a href="https://www.nist.gov/itl/applied-cybersecurity/tig/back-basics-multi-factor-authentication" target="_blank" rel="noopener noreferrer">NIST: MFA Basics</a></li>
        </ul>
        <div className="mt-8 text-center">
          <Link href="/dashboard" className="inline-block px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
} 