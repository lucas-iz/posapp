import './App.css';
import useGeolocation from './functions';

function App() {
  const {coordinates, error} = useGeolocation();

  return (
    <div className='content'>
      <h1>Hello</h1>
      {error ? (
          <p>Error: {error}</p>
        ):(
          <div>
            {coordinates ? (
              <div className='textData'>
                <p>Latitude: {coordinates.latitude}</p>
                <p>Longitude: {coordinates.longitude}</p>
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
