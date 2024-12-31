import React from 'react';
import { geoCentroid } from 'd3-geo';
import {
 ComposableMap,
 Geographies,
 Geography,
 Marker,
 Annotation,
} from 'react-simple-maps';
import './LocationOutline.css';
import geoUrl from './data/usa.geo.json';
import allStates from './data/allstates.json';

// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
// const geoUrl = "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";
// const offsets = {};

const offsets = {
 VT: [50, -8],
 NH: [34, 2],
 MA: [30, -1],
 RI: [28, 2],
 CT: [35, 10],
 NJ: [34, 1],
 DE: [33, 0],
 MD: [47, 10],
 DC: [49, 21],
};

const MapChart = () => {
 return (
  <div className="map-container">
   <ComposableMap projection="geoAlbersUsa">
    <Geographies geography={geoUrl}>
     {({ geographies }) => (
      <>
       {geographies.map((geo) => {
        console.log('geo.id', geo);
        return (
         <Geography
          key={geo.rsmKey}
          stroke={'#fff'}
          geography={geo}
          fill="orange"
          className="textHover"
          style={{
           default: {
            outline: 'none',
           },
           hover: {
            fill: geo?.id === '29' ? 'dodgerBlue' : '',
            outline: 'none',
            cursor: 'pointer',
            color: '#fff',
           },
           pressed: { outline: 'none' },
          }}
         />
        );
       })}
       {geographies.map((geo) => {
        const centroid = geoCentroid(geo);
        const cur = allStates.find((s) => s.val === geo.id);
        return (
         <g key={geo.rsmKey + '-name'}>
          {cur &&
           centroid[0] > -160 &&
           centroid[0] < -67 &&
           (Object.keys(offsets).indexOf(cur.id) === -1 ? (
            <Marker coordinates={centroid}>
             <text y="2" fontSize={14} textAnchor="middle" fill="#000">
              {cur.id}
             </text>
            </Marker>
           ) : (
            <Annotation
             subject={centroid}
             dx={offsets[cur.id][0]}
             dy={offsets[cur.id][1]}
            >
             <text x={4} fontSize={14} alignmentBaseline="middle" fill="#000">
              {cur.id}
             </text>
            </Annotation>
           ))}
         </g>
        );
       })}
      </>
     )}
    </Geographies>
   </ComposableMap>
  </div>
 );
};

export default MapChart;
