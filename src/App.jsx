
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { useState, useEffect } from "react";
import { Map as MapLibreMap, NavigationControl } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import Map from "./components/Map";
/**
 * Central map component
 */
 const App = () => {
  // const [mapReady, setMapReady] = useState(false);

  // useEffect(() => {
  //   try{
  //   if (!mapReady) return;

  //   const map = new MapLibreMap({
  //     container: "central-map",
  //     center: [0, 0],
  //     zoom: 0,
  //     style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json?",
  //     transformRequest: (url, resourceType) => {
      
  //       url = url + "&api_key=kAZ8xZYc7QF2K6jhK0FrTX0sTN0NT3uGKDPKcGhx";
  //       return { url, resourceType };
  //     },
  //   });

  //   const nav = new NavigationControl({
  //     visualizePitch: true,
  //   });
  //   map.addControl(nav, "top-left");
  // }catch(error){
  //   console.log("Error :"+error)
  //     }
  // }, [mapReady]);

      return (
          <Map apiKey={"kAZ8xZYc7QF2K6jhK0FrTX0sTN0NT3uGKDPKcGhx"}/>
      );
    };

 

    export default App;