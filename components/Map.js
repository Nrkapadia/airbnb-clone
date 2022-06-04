import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Popup, Marker } from "react-map-gl";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/nisarg1422/cl3wvgnr6000514tg8xo9qktu"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              <svg className="fill-red-500"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            </p>
          </Marker>

          {selectedLocation.long === result.long? (
            <Popup
              closeButton={false}
              className='text-xs font-semibold	z-40'
              latitude={result.lat}
              longitude={result.long}
              onClose={()=>setSelectedLocation({})}
              >
              {result.title}
            </Popup>
          ):(false) }
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;