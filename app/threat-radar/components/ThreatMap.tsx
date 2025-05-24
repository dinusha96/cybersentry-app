'use client';

import React from 'react';
import ClientMap from './ClientMap';

interface Threat {
  id: number;
  type: string;
  location: string;
  severity: string;
  timestamp: string;
}

interface ThreatMapProps {
  threatData: Threat[];
}

const ThreatMap: React.FC<ThreatMapProps> = ({ threatData }) => {
  if (!threatData || threatData.length === 0) {
    return (
      <div className="h-[600px] rounded-lg flex items-center justify-center">
        <p className="text-gray-600">No threats to display</p>
      </div>
    );
  }

  return (
    <ClientMap threatData={threatData} />
  );
};

export default ThreatMap;
