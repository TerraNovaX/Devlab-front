import React, { useEffect, useState } from "react";
import Map from "./Map";

const MapFormation = () => {
  const [locations, setLocations] = useState([]);
  const defaultPosition = [48.8954, 2.2241]; // Position centrale des Hauts-de-Seine (92)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/adresse_formations")
      .then((response) => response.json())
      .then((data) => {
        const formattedLocations = data.map((item) => ({
          name: item.nom,
          lat: item.latitude,
          lng: item.longitude,
        }));
        setLocations(formattedLocations);
      })
      .catch((error) => console.error("Erreur lors du chargement des adresses :", error));
  }, []);

  return <Map defaultPosition={defaultPosition} locations={locations} />;
};

export default MapFormation;