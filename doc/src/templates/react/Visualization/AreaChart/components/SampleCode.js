import React from "react";
import { AreaChart } from 'e-ui-react';

export const SampleNote1 = () =>{
 const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: -1000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 500, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: -2000, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: -250, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }];
 return (<>
  <AreaChart type="simple" data={data} xAxis="name" 
     yAxis={[{ dataKey:'uv', color:'#8884d8'},
       { dataKey:'pv', color:'#82ca9d'},
       { dataKey:'amt', color:'#ffc658'}]} />
  </>);
};

export const SampleNote2 = () =>{
 const data = [{ name: '2015.01', uv: 4000, pv: 2400, amt: 2400 },
        { name: '2015.02', uv: 3000, pv: 1398, amt: 2210 },
        { name: '2015.03', uv: 2000, pv: 9800, amt: 2290 },
        { name: '2015.04', uv: 2780, pv: 3908, amt: 2000 },
        { name: '2015.05', uv: 1890, pv: 4800, amt: 2181 },
        { name: '2015.06', uv: 2390, pv: 3800, amt: 2500 },
        { name: '2015.07', uv: 3490, pv: 4300, amt: 2100 }];
 return (<>
  <AreaChart type="percentage" data={data} xAxis="name" 
     yAxis={[{ dataKey:'uv', color:'#8884d8'},
       { dataKey:'pv', color:'#82ca9d'},
       { dataKey:'amt', color:'#ffc658'}]} />
 </>);
};

export const SampleNote3 = () =>{
 const data = [{ name: 'Page A', uv: 4000 },
        { name: 'Page B', uv: 3000 },
        { name: 'Page C', uv: -1000 },
        { name: 'Page D', uv: 500 },
        { name: 'Page E', uv: -2000 },
        { name: 'Page F', uv: -250 },
        { name: 'Page G', uv: 3490 }];
 return (<>
  <AreaChart type="fillByValue" data={data} xAxis="name" 
     yAxis={{ dataKey:'uv', range: { from:'#8884d8', to:'#ffc658' } }} />
 </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;