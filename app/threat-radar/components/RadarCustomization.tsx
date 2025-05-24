'use client';

import React, { useState } from 'react';

interface UserProfile {
  industry: string;
  interests: string[];
}

interface FilterOption {
  id: string;
  label: string;
  selected: boolean;
}

const RadarCustomization: React.FC<{
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}> = ({ userProfile, setUserProfile }) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>([
    { id: 'malware', label: 'Malware', selected: true },
    { id: 'phishing', label: 'Phishing', selected: true },
    { id: 'ddos', label: 'DDoS', selected: true },
    { id: 'ransomware', label: 'Ransomware', selected: true },
    { id: 'vulnerability', label: 'Vulnerability', selected: true }
  ]);

  const [selectedRegions, setSelectedRegions] = useState<FilterOption[]>([
    { id: 'north-america', label: 'North America', selected: true },
    { id: 'europe', label: 'Europe', selected: true },
    { id: 'asia', label: 'Asia', selected: true },
    { id: 'africa', label: 'Africa', selected: true },
    { id: 'south-america', label: 'South America', selected: true }
  ]);

  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const severityOptions = [
    { value: 'all', label: 'All' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' }
  ];

  const handleFilterChange = (id: string) => {
    setSelectedFilters(filters =>
      filters.map(filter =>
        filter.id === id ? { ...filter, selected: !filter.selected } : filter
      )
    );
  };

  const handleRegionChange = (id: string) => {
    setSelectedRegions(regions =>
      regions.map(region =>
        region.id === id ? { ...region, selected: !region.selected } : region
      )
    );
  };

  const handleSeverityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeverity(event.target.value);
  };

  const handleSave = () => {
    // Save user preferences
    setUserProfile({
      industry: userProfile.industry,
      interests: selectedFilters
        .filter(filter => filter.selected)
        .map(filter => filter.id)
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Customize Your Threat Radar</h2>

      <div className="bg-gray-800 p-6 rounded-lg shadow text-white">
        <h3 className="font-semibold mb-4">Threat Types</h3>
        <div className="grid grid-cols-2 gap-4">
          {selectedFilters.map((filter) => (
            <div key={filter.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filter.selected}
                onChange={() => handleFilterChange(filter.id)}
                className="rounded bg-gray-700 border-gray-600 checked:bg-blue-500"
              />
              <label className="text-white">{filter.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow text-white">
        <h3 className="font-semibold mb-4">Regions</h3>
        <div className="grid grid-cols-2 gap-4">
          {selectedRegions.map((region) => (
            <div key={region.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={region.selected}
                onChange={() => handleRegionChange(region.id)}
                className="rounded bg-gray-700 border-gray-600 checked:bg-blue-500"
              />
              <label className="text-white">{region.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow text-white">
        <h3 className="font-semibold mb-4 text-white">Severity</h3>
        <select
          value={selectedSeverity}
          onChange={handleSeverityChange}
          className="w-full p-2 border-gray-600 rounded bg-gray-700 text-white" data-component-name="RadarCustomization"
        >
          {severityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default RadarCustomization;
