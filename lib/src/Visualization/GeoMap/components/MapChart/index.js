import React from 'react';
import {
 ComposableMap,
 Geographies,
 Geography,
 Marker,
 Annotation,
} from 'react-simple-maps';

// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
// const geoUrl = "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";
const MapChart = () => {
 return (
  <>
   <div className="map-container">
    <ComposableMap projection="geoAlbersUsa">
     <Geographies geography="/test.geojson">
      {/*({ geographies }) => (
          <>
            {geographies.map(geo =>{
                console.log("geo.id", geo);
              return (<Geography
                key={geo.rsmKey}
                stroke={'#fff'}
                geography={geo}
                fill="orange"
                className="textHover"
                style={{
                    default: {
                         outline: "none" 
                        },
                    hover: { 
                        outline: "none" ,
                        cursor:'pointer',
                        color: '#fff'
                    },
                    pressed: { 
                        outline: "none",
                        fill:(geo?.id==='29')?'dodgerBlue':'',
                    },
                }}
                onClick={()=>alert(geo?.properties?.name)}
              />);
            
        })}
        </>
    )*/}
      {({ geographies }) =>
       geographies.map((geo) => {
        console.log('geo', geo);
        return <Geography key={geo.rsmKey} geography={geo} />;
       })
      }
     </Geographies>
    </ComposableMap>
   </div>
  </>
 );
};

export default MapChart;
