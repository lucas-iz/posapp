import React from 'react';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom = 13 }) => {
  const position:[number,number] = [latitude, longitude];

  // Fix for default marker icon
  const icon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [41, 41],
  });

  const MapView = () => {
    const map = useMap();

    useEffect(() => {
      map.setView(position, zoom);
    }, [latitude, longitude, map, zoom]);

    return null;
  };

  return (
    <MapContainer center={position} zoom={zoom} className='mapContainer'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          You are here: {latitude}, {longitude}
        </Popup>
      </Marker>
      <MapView />
    </MapContainer>
  );
};

export default Map;
