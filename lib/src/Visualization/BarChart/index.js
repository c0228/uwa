import React from "react";
import { BarChart as BarChartReChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
   ReferenceLine, Brush } from 'recharts';
import './../index.css';

export const BarChart = ({ type, height, data, stacks }) =>{
 const SimpleBarChart = ()=>{
  return (<ResponsiveContainer width="100%" height={height}>
   <BarChartReChart width={500} height={height} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="uv" fill="#82ca9d" />
  </BarChartReChart>
  </ResponsiveContainer>);
 };
 
 const StackedBarChart = ()=>{
  return (<ResponsiveContainer width="100%" height={height}>
   <BarChartReChart width={500} height={height} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
  </BarChartReChart>
  </ResponsiveContainer>);
 };

 const MixedBarChart = () =>{
  return (<ResponsiveContainer width="100%" height={height}>
  <BarChartReChart
   width={500}
   height={height}
   data={data}
   margin={{
     top: 20,
     right: 30,
     left: 20,
     bottom: 5
   }}
 >
   <CartesianGrid strokeDasharray="3 3" />
   <XAxis dataKey="name" />
   <YAxis />
   <Tooltip />
   <Legend />
   {stacks.map(d=>{
      return (d?.units.map(u=>{
         return (<Bar dataKey={u.dataKey} stackId={d.id} fill={u.color} />);
      }))
   })}
 </BarChartReChart>
 </ResponsiveContainer>);
 };

 const PosNegBarCharts = ()=>{
  return (<>
  <ResponsiveContainer width="100%" height={height}>
        <BarChartReChart
          width={500}
          height={height}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChartReChart>
      </ResponsiveContainer>
  </>);
 };

 const BrushBarChart = () =>{
  return (<>
  <ResponsiveContainer width="100%" height={height}>
        <BarChartReChart width={500}
      height={height}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
      <ReferenceLine y={0} stroke="#000" />
      <Brush dataKey="name" height={30} stroke="#8884d8" />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
         
   </BarChartReChart>
   </ResponsiveContainer>
  </>);
 };

 if(type==="simple") {
    return <SimpleBarChart />
 } else if(type==="stacked") {
    return <StackedBarChart />
 } else if(type==='mixed'){
    return <MixedBarChart />
 } else if(type==='positiveNegative'){
    return <PosNegBarCharts />
 } else if(type==='brush'){
    return <BrushBarChart />
 }

};