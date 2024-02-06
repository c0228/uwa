import React from "react";
import MapChart from './components/MapChart/index.js';

export const GeoMap = ()=>{
 
  const boundingBox = [
      [68.1055, 37.0841],
      [97.3956, 37.0841],
      [97.3956, 8.0620],
      [68.1055, 8.0620],
      [68.1055, 37.0841], // Closing the loop
  ];

  return (
    <div>
      <h1>India Outline</h1>
      <MapChart />
    </div>
  );

};
