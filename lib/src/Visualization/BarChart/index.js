import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart as BarChartReChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Brush,
} from 'recharts';
import './../index.css';

export const BarChart = ({ type, height, data, dataKeys, showLegend, stacks, customToolTip }) => {
 const SimpleBarChart = () => {
  return (
   <ResponsiveContainer width="100%" height={height}>
    <BarChartReChart
     width={500}
     height={height}
     data={data}
     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
     <XAxis dataKey="name" />
     <YAxis />
     <CartesianGrid strokeDasharray="3 3" />
     <Tooltip />
     <Legend />
     <Bar dataKey="pv" fill="#8884d8" />
     <Bar dataKey="uv" fill="#82ca9d" />
    </BarChartReChart>
   </ResponsiveContainer>
  );
 };

 const StackedBarChart = () => {
  return (
   <ResponsiveContainer width="100%" height={height}>
    <BarChartReChart
     width={500}
     height={height}
     data={data}
     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="name" />
     <YAxis />
     <Tooltip />
     <Legend />
     <Bar dataKey="pv" stackId="a" fill="#8884d8" />
     <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChartReChart>
   </ResponsiveContainer>
  );
 };

 const MixedBarChart = () => {
  return (
   <ResponsiveContainer width="100%" height={height}>
    <BarChartReChart
     width={500}
     height={height}
     data={data}
     margin={{
      top: 20,
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
     {stacks.map((d) => {
        return d?.units.map((u) => {
            return (
            <Bar 
                key={`${d.id}-${u.dataKey}`} // Adding a unique key
                dataKey={u.dataKey} 
                stackId={d.id} 
                fill={u.color} 
            />
            );
        });
      })}
    </BarChartReChart>
   </ResponsiveContainer>
  );
 };

 const PosNegBarCharts = () => {
  return (
   <>
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
   </>
  );
 };

 const BrushBarChart = () => {
  return (
   <>
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
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <ReferenceLine y={0} stroke="#000" />
      <Brush dataKey="name" height={30} stroke="#8884d8" />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
     </BarChartReChart>
    </ResponsiveContainer>
   </>
  );
 };

 const VerticalBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChartReChart
        width={200}
        height={height}
        data={data}
        layout="vertical" // IMPORTANT
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" /> {/* Because value is along X axis */}
        <YAxis dataKey="name" type="category" 
        width={50} // Increase to avoid cutting off
  interval={0} // Show all labels
  tick={{ fill: 'black', fontSize: 12 }}
        /> {/* Category on Y axis */}
        {customToolTip?<Tooltip content={customToolTip} />:<Tooltip />}
        {showLegend && <Legend />}
        {dataKeys?.map((dKey)=>{
            return (<Bar dataKey={dKey?.label} fill={dKey?.color} />);
        })}
      </BarChartReChart>
    </ResponsiveContainer>
  );
};


 if (type === 'simple') {
  return <SimpleBarChart />;
 } else if (type === 'stacked') {
  return <StackedBarChart />;
 } else if (type === 'mixed') {
  return <MixedBarChart />;
 } else if (type === 'positiveNegative') {
  return <PosNegBarCharts />;
 } else if (type === 'brush') {
  return <BrushBarChart />;
 } else if (type === 'vertical') {
  return <VerticalBarChart />;
 }
};

BarChart.propTypes = {
    type: PropTypes.string,
    height: PropTypes.number.isRequired, // Assuming height is a required number
    data: PropTypes.arrayOf(PropTypes.object).isRequired, // Assuming data is an array of objects
    stacks: PropTypes.arrayOf(PropTypes.string), // Assuming stacks is an array of strings
    children: PropTypes.node.isRequired,
};