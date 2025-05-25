'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

interface Threat {
  id: number;
  type: string;
  location: string;
  severity: string;
  timestamp: string;
}

interface ClientMapProps {
  threatData: Threat[];
}

const ClientMap: React.FC<ClientMapProps> = ({ threatData }) => {
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    setMapInitialized(true);
  }, []);

  if (!mapInitialized) {
    return <div className="h-[600px] rounded-lg">Loading map...</div>;
  }

  // Define coordinates for each region
  const regionCoordinates: Record<string, number[]> = {
    'North America': [37.0902, -95.7129],
    'Europe': [54.5259, 15.2551],
    'Asia': [35.8617, 104.1954],
    'Africa': [14.8414, 25.6922],
    'South America': [-14.2350, -51.9253]
  };

  const threatMarkers = threatData?.map((threat) => {
    const coordinates = regionCoordinates[threat.location] || [0, 0];

    return (
      <Marker key={threat.id} position={coordinates as LatLngExpression}>
        <Popup>
          <div className="bg-white p-4 rounded shadow text-black" style={{ width: '200px' }}>
            <h3 className="font-bold text-black">{threat.type.toUpperCase()}</h3>
            <p className="text-black">Location: {threat.location}</p>
            <p className="text-black">Severity: {threat.severity}</p>
            <p className="text-black">Timestamp: {new Date(threat.timestamp).toLocaleString()}</p>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <div className="h-[600px] rounded-lg">
      <MapContainer center={[37.0902, -95.7129] as LatLngExpression} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {threatMarkers}
      </MapContainer>
    </div>
  );
};

export default ClientMap;
