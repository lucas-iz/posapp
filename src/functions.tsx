import { useState, useEffect } from "react";

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

export {useGeolocation, useLocationData};
