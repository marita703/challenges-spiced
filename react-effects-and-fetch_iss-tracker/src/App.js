import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// this is starting already with long and lat already set, because they need to exist for the short moment where the async function is loading....
export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords({
        longitude: data.longitude,
        longitude: data.latitude,
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getISSCoords();
    }, 5000);

    // this is the cleanup function, this run when we are about to reload the page
    // in this case we are cleaning the timer we set up...
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
