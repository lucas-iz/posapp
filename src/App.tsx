import './App.css';
import { useGeolocation, useLicensePlates, useLocationData } from './functions';
import 'leaflet/dist/leaflet.css';
import Map from './Map';
import { useState, useEffect } from 'react';

function App() {
  const {coordinates, error: geoError} = useGeolocation();
  const {locationData, error: locationError} = useLocationData(
    coordinates?.latitude ?? 0,
    coordinates?.longitude ?? 0
  );

  const [licensePlates, setLicensePlates] = useState<string[]>([]);
  const [licenseError, setLicenseError] = useState<string | null>(null);
  const [prevPosition, setPrevPosition] = useState<number[]>([0,0]);
  const [speed, setSpeed] = useState<number>(0);

  // TODO: Load licensePlates with useLicensePlates when locationData changes...
  const { licensePlates: fetchedLicensePlates, error: fetchedLicenseError } = useLicensePlates(locationData?.county ?? "");

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

  useEffect(() => {
    const prevLat = prevPosition[0];
    const prevLng = prevPosition[1];

    if(prevLat != coordinates?.latitude && prevLng != coordinates?.longitude) {
      setSpeed(1);
    }
    else {
      setSpeed(-1);
    }

  }, [prevPosition, coordinates]);

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
                  <p>{speed} km/h</p><br />
                  {locationError ? (<p>Kein Kennzeichen verfügbar</p>) : locationData ? (
                    <div className='licensePlate'>{licensePlates?.join(", ")}</div>
                  ) : (
                    <p>Keine Kennzeichen verfügbar</p>
                  )}
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
