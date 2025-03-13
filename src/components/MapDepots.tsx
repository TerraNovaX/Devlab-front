import { useEffect, useState } from "react";
import Map from "./Map";

const MapDepots = () => {
  const [locations, setLocations] = useState<{ name: string; lat: number; lng: number }[]>([]);
  const defaultPosition: [number, number] = [48.8954, 2.2241]; // Position centrale des Hauts-de-Seine (92)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/depotss")
      .then((response) => response.json())
      .then((data) => {
        const formattedLocations = data.map((item: any) => ({
          name: item.nom,
          lat: item.latitude,
          lng: item.longitude,
        }));
        setLocations(formattedLocations);
      })
      .catch((error) => console.error("Erreur lors du chargement des dépôts :", error));
  }, []);

  return <Map defaultPosition={defaultPosition} locations={locations} />;
};

export default MapDepots;