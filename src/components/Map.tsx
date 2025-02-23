import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Location {
  lat: number;
  lng: number;
  name: string;
}

interface MapProps {
  defaultPosition: [number, number];
  locations: Location[];
}

// Composant pour mettre à jour la vue de la carte
const ChangeView: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);

  return null;
};

const Map: React.FC<MapProps> = ({ defaultPosition, locations }) => {
  return (
    <MapContainer
      className="rounded-xl shadow-lg"
      style={{ height: "300px", width: "700px" }}
      // PAS de center ni de zoom ici !
    >
      {/* Gestion du zoom et de la position via ChangeView */}
      <ChangeView center={defaultPosition} zoom={11} />

      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
