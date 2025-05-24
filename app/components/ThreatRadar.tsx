'use client';

export default function ThreatRadar() {
  return (
    <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white p-6 mb-4">
        Threat Radar
      </h2>
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 border-4 border-teal-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 border-4 border-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <p className="text-gray-600 dark:text-gray-300">
                Monitoring threats
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
        <p className="text-sm text-teal-800 dark:text-teal-200">
          Real-time threat monitoring and analysis.
        </p>
      </div>
    </div>
  );
}