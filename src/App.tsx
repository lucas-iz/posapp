import './App.css';
import { calculateSpeed, useGeolocation, useLicensePlates, useLocationData } from './functions';
import 'leaflet/dist/leaflet.css';
import Map from './Map';
import { useState, useEffect } from 'react';

interface PositionData {
  latitude: number,
  longitude: number,
  time: Date,
  speed: number | null,
  heading: number | null,
  altitude: number | null,
};

function App() {
  const {coordinates, error: geoError} = useGeolocation();
  const {locationData, error: locationError} = useLocationData(
    coordinates?.latitude ?? 0,
    coordinates?.longitude ?? 0
  );

  const [licensePlates, setLicensePlates] = useState<string[]>([]);
  const [licenseError, setLicenseError] = useState<string | null>(null);
  // const [speed, setSpeed] = useState<number>(0);
  const [lastPositions, setLastPositions] = useState<PositionData[]>([]);

  // TODO: Load licensePlates with useLicensePlates when locationData changes...
  const { licensePlates: fetchedLicensePlates, error: fetchedLicenseError } = useLicensePlates(locationData?.county || (locationData?.city || ""));

  // Set positions and speed
  useEffect(() => {
    const newData: PositionData = {
      latitude: coordinates?.latitude ?? 0, 
      longitude: coordinates?.longitude ?? 0, 
      time: new Date(),
      speed: (coordinates?.speed ?? null),
      heading: (coordinates?.heading ?? null),
      altitude: (coordinates?.altitude ?? null),
    };
    const positions = lastPositions;

    // If >=2, Remove oldest position
    if(positions.length >= 2) {
      positions.shift(); // Removes first entry in array
    }

    // Add newest position
    positions.push(newData);
    
    /*
    // Calculate speed using both values
    if(positions.length >= 2) {
      const prevPos: PositionData = positions[0];
      const currPos: PositionData = positions[1];
      const tmp_speed: number = calculateSpeed(
        prevPos.latitude, prevPos.longitude, prevPos.time,
        currPos.latitude, currPos.longitude, currPos.time
      )
      setSpeed(tmp_speed);
    }
    else {
      setSpeed(0);
    }
    */

    setLastPositions(positions);
  }, [coordinates]);

  // Set license plates
  useEffect(() => {
    if (locationData) {
      if (fetchedLicensePlates) {
        setLicensePlates(fetchedLicensePlates);
      }
      if (fetchedLicenseError) {
        setLicenseError(fetchedLicenseError);
      }
    }
  }, [locationData, fetchedLicensePlates, fetchedLicenseError]);

  return (
    <div className='content'>
      {geoError ? (
          <p>Error: {geoError}</p>
        ):(
          <div className='mainColumn'>
            {coordinates ? (
              <div className='mainData'>
                <div className='row top-row'>
                  <h1>{coordinates.latitude} <br /> {coordinates.longitude}</h1>
                </div>
                <div className='row grow'>
                  <div className='row container'>
                    {lastPositions[1].speed ? (
                      <div className='licensePlate'>{lastPositions[1].heading} km/h</div>
                    ) : (
                      <div className='licensePlate no-speed'>No Speed value</div>
                    )}
                    {locationError ? (<p>Kein Kennzeichen verfügbar</p>) : locationData ? (
                      <div className='licensePlate'>{licensePlates?.join(", ")}</div>
                    ) : (
                      <p>Keine Kennzeichen verfügbar</p>
                    )}
                  </div>
                </div>
                <div className='row bottom-row'>
                  <div className='left'>
                  {locationError ? (
                    <p>Error: {locationError}</p>
                  ) : locationData ? (
                    <div>
                      <p><strong>Straße:</strong> {locationData.street || "Nicht verfügbar"}</p>
                      <p><strong>Nr:</strong> {locationData.housenumber || "Nicht verfügbar"}</p>
                      <p><strong>PLZ:</strong> {locationData.plz || "Nicht verfügbar"}</p>
                      <p><strong>Ort:</strong> {locationData.city || "Nicht verfügbar"}</p>
                      <p><strong>Kreis:</strong> {locationData.county || "Nicht verfügbar"}</p>
                      <p><strong>Bundesland:</strong> {locationData.state || "Nicht verfügbar"}</p>
                      <p><strong>Land:</strong> {locationData.country || "Nicht verfügbar"}</p>
                      <p><strong>Amt:</strong> {locationData.municipality || "Nicht verfügbar"}</p>
                    </div>
                  ) : (
                    <p>Lade Standortdaten...</p>
                  )}
                  </div>
                  <div className='right'>
                    <Map latitude={coordinates.latitude} longitude={coordinates.longitude} />
                  </div>
                </div>
              </div>
            ) : (
              <div className='textData'>
                <p>Loading location...</p>
              </div>
            )}
          </div>
        )}
      
    </div>
  );
}

export default App;
