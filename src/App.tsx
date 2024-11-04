import './App.css';
import { useGeolocation, useLocationData } from './functions';
import 'leaflet/dist/leaflet.css';
import Map from './Map';

function App() {
  const {coordinates, error: geoError} = useGeolocation();
  const {locationData, error: locationError} = useLocationData(
    coordinates?.latitude ?? 0,
    coordinates?.longitude ?? 0
  );

  console.log("Location Data:", locationData);

  return (
    <div className='content'>
      {geoError ? (
          <p>Error: {geoError}</p>
        ):(
          <div className='mainColumn'>
            {coordinates ? (
              <div className='mainData'>
                <div className='row top-row'>
                  <h1>{coordinates.latitude} / {coordinates.longitude}</h1>
                </div>
                <div className='row grow'>
                  <div className='licensePlate'>AB - CD 123</div>
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
