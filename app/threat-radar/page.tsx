'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import ThreatMap from './components/ThreatMap';
import ThreatSimulation from './components/ThreatSimulation';
import ThreatAlerts from './components/ThreatAlerts';
import ThreatQuiz from './components/ThreatQuiz';
import ThreatFeed from './components/ThreatFeed';
import RadarCustomization from './components/RadarCustomization';
import IncidentResponse from './components/IncidentResponse';
import CyberAttackSimulator from './components/CyberAttackSimulator';

export default function ThreatRadar() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('map');
  
  // Interfaces
  interface Threat {
    id: number;
    type: string;
    location: string;
    severity: string;
    timestamp: string;
  }

  interface UserProfile {
    industry: string;
    interests: string[];
  }

  // Initial state
  const initialUserProfile: UserProfile = {
    industry: '',
    interests: []
  };

  // State
  const [threatData, setThreatData] = useState<Threat[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>(initialUserProfile);

  // Effects
  useEffect(() => {
    // Simulated threat data fetch
    const fetchThreatData = async () => {
      const data = [
        {
          id: 1,
          type: 'phishing',
          location: 'North America',
          severity: 'high',
          timestamp: new Date().toISOString()
        },
        {
          id: 2,
          type: 'malware',
          location: 'Europe',
          severity: 'medium',
          timestamp: new Date().toISOString()
        }
      ];
      setThreatData(data);
    };
    fetchThreatData();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
                <h1 className="text-3xl font-bold text-gray-200">Cyber Threat Radar</h1>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedTab('map')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTab === 'map' 
                      ? 'bg-blue-400 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  } hover:bg-blue-300 transition-colors`}
                >
                  Threat Map
                </button>
                <button
                  onClick={() => setSelectedTab('simulation')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTab === 'simulation' 
                      ? 'bg-blue-400 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  } hover:bg-blue-300 transition-colors`}
                >
                  Attack Simulation
                </button>
                <button
                  onClick={() => setSelectedTab('attack-simulation')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTab === 'attack-simulation' 
                      ? 'bg-blue-400 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  } hover:bg-blue-300 transition-colors`}
                >
                  Cyber Attack Simulator
                </button>
                <button
                  onClick={() => setSelectedTab('alerts')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTab === 'alerts' 
                      ? 'bg-blue-400 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  } hover:bg-blue-300 transition-colors`}
                >
                  Alerts
                </button>
                <button
                  onClick={() => setSelectedTab('quiz')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTab === 'quiz' 
                      ? 'bg-blue-400 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  } hover:bg-blue-300 transition-colors`}
                >
                  Quiz
                </button>
                <button
                  onClick={() => setSelectedTab('feed')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTab === 'feed' 
                      ? 'bg-blue-400 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  } hover:bg-blue-300 transition-colors`}
                >
                  Feed
                </button>
                <button
                  onClick={() => setSelectedTab('customization')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTab === 'customization' 
                      ? 'bg-blue-400 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  } hover:bg-blue-300 transition-colors`}
                >
                  Customization
                </button>
                <button
                  onClick={() => setSelectedTab('response')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTab === 'response' 
                      ? 'bg-blue-400 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  } hover:bg-blue-300 transition-colors`}
                >
                  Response
                </button>
              </div>
            </div>

            <div className="rounded-lg shadow bg-gray-800 overflow-hidden">
              {selectedTab === 'map' && <ThreatMap threatData={threatData} />}
              {selectedTab === 'simulation' && <ThreatSimulation />} 
              {selectedTab === 'alerts' && <ThreatAlerts userProfile={userProfile} />}
              {selectedTab === 'attack-simulation' && <CyberAttackSimulator />}
              {selectedTab === 'quiz' && <ThreatQuiz />} 
              {selectedTab === 'feed' && <ThreatFeed />} 
              {selectedTab === 'customization' && <RadarCustomization userProfile={userProfile} setUserProfile={setUserProfile} />} 
              {selectedTab === 'response' && <IncidentResponse />} 
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cyber Threat Radar</h1>
      
      {/* Tab Navigation */}
      <div className="mb-6">
        <button
          onClick={() => setSelectedTab('map')}
          className={`px-4 py-2 mr-2 ${selectedTab === 'map' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          Threat Map
        </button>
        <button
          onClick={() => setSelectedTab('simulation')}
          className={`px-4 py-2 mr-2 ${selectedTab === 'simulation' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          Simulation
        </button>
        <button
          onClick={() => setSelectedTab('alerts')}
          className={`px-4 py-2 mr-2 ${selectedTab === 'alerts' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          Alerts
        </button>
        <button
          onClick={() => setSelectedTab('quiz')}
          className={`px-4 py-2 mr-2 ${selectedTab === 'quiz' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          Quiz
        </button>
        <button
          onClick={() => setSelectedTab('feed')}
          className={`px-4 py-2 mr-2 ${selectedTab === 'feed' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          Feed
        </button>
        <button
          onClick={() => setSelectedTab('custom')}
          className={`px-4 py-2 mr-2 ${selectedTab === 'custom' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          Customize
        </button>
        <button
          onClick={() => setSelectedTab('response')}
          className={`px-4 py-2 ${selectedTab === 'response' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          Response Drill
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow p-6">
        {selectedTab === 'map' && <ThreatMap threatData={threatData} />}
        {selectedTab === 'simulation' && <ThreatSimulation />}
        {selectedTab === 'alerts' && <ThreatAlerts userProfile={userProfile} />}
        {selectedTab === 'quiz' && <ThreatQuiz />}
        {selectedTab === 'feed' && <ThreatFeed />}
        {selectedTab === 'custom' && <RadarCustomization userProfile={userProfile} setUserProfile={setUserProfile} />}
        {selectedTab === 'response' && <IncidentResponse />}
      </div>
    </div>
  );
}
