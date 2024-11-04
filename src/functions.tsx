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

export default useGeolocation;
