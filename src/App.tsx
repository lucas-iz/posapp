import './App.css';
import { useGeolocation, useLocationData } from './functions';

function App() {
  const {coordinates, error: geoError} = useGeolocation();
  const {locationData, error: locationError} = useLocationData(
    coordinates?.latitude ?? 0,
    coordinates?.longitude ?? 0
  );

  console.log("Location Data:", locationData);

  return (
    <div className='content'>
      <h1>Hello</h1>
      {geoError ? (
          <p>Error: {geoError}</p>
        ):(
          <div>
            {coordinates ? (
              <div className='textData'>
                <p>Latitude: {coordinates.latitude}</p>
                <p>Longitude: {coordinates.longitude}</p>
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
