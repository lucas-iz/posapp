import { useState, useEffect } from "react";
import de_licensePlates from "./licensePlates";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface GeolocationState {
  coordinates: Coordinates | null;
  error: string | null;
}

const useGeolocation = (): GeolocationState => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    const success = (position: GeolocationPosition) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const failure = (err: GeolocationPositionError) => {
      setError(err.message);
    };

    // Start watching the position continuously
    const watchId = navigator.geolocation.watchPosition(success, failure, {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000,
    });

    // Clear the watcher on component unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { coordinates, error };
};

interface LocationData {
  street?: string,
  housenumber?: string,
  plz?: string,
  city?: string,
  county?: string, // Kreis
  municipality?: string, // Amt,Gemeinde
  state?: string, // Bundesland
  country?: string,
}

interface UseLocationDataResult {
  locationData: LocationData | null;
  error: string | null;
}

const useLocationData = (latitude: number, longitude: number): UseLocationDataResult => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(latitude === 0 && longitude === 0) {
      setLocationData(null);
      setError("Waiting for valid coordinates...");
      return;
    }

    const fetchLocationData = async () => {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1&accept-language=de`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch location data");

        const data = await response.json();
        if (data && data.address) {
          const locationData: LocationData = {
            street: data.address.street || data.address.road,
            housenumber: data.address.house_number,
            plz: data.address.postcode,
            city: data.address.city || data.address.town || data.address.village,
            county: data.address.county,
            municipality: data.address.municipality,
            state: data.address.state,
            country: data.address.country,
          };
          setLocationData(locationData);
          setError(null);
        } else {
          setError("No location data found.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      }
    };

    fetchLocationData();
  }, [latitude, longitude]);

  return { locationData, error };
};

interface useLicensePlatesResult {
  licensePlates: string[];
  error: string | null;
}

const useLicensePlates = (givenCounty: string): useLicensePlatesResult => {
  const [licensePlates, setLicensePlates] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if(givenCounty === "") {
        setLicensePlates([]);
        setError("No county given.");
        return;
      }
      const filteredPlates = de_licensePlates.filter((item) => item.county.includes(givenCounty)).map((item) => item.plate);
      console.log(filteredPlates);
      setLicensePlates(filteredPlates);
      setError(null);
    } catch(error: any) {
      setError(error);
    }
  }, [givenCounty]);

  return { licensePlates, error };
};

// Hilfsfunktion zur Berechnung der Entfernung zwischen zwei Koordinaten (in Kilometern)
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Radius der Erde in Kilometern
  const toRad = (value: number) => (value * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);

  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Entfernung in Kilometern
}

const calculateSpeed = (lat1: number, lng1: number, time1: Date, lat2: number, lng2: number, time2: Date): number => {
  if(lat1 == null || lng1 == null || lat2 == null || lng2 == null) {
    return -1;
  }
  
  // Berechne die Zeitdifferenz in Stunden
  const timeDifference = (time2.getTime() - time1.getTime()) / (1000 * 60 * 60); // in Stunden

  // Berechne die Entfernung zwischen den beiden Punkten
  const distance = calculateDistance(lat1, lng1, lat2, lng2);

  // Berechne die Geschwindigkeit
  const speed_kmh: number = distance / timeDifference; // Geschwindigkeit in km/h
  const speed_rounded = parseFloat(speed_kmh.toFixed(2));

  return speed_rounded; 
};

export {useGeolocation, useLocationData, useLicensePlates, calculateSpeed};
