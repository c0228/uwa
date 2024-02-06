import React from "react";
import { AreaChart as AreaReChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import './../index.css';

export const AreaChart = ({ type, data, xAxis, yAxis }) =>{

 const SimpleAreaChart = () =>{
  return (<AreaReChart
    width={500}
    height={400}
    data={data}
    margin={{ 
      top: 0,
      right: 30,
      left: 0,
      bottom: 0
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={xAxis} />
    <YAxis />
    <Tooltip />
    {yAxis?.map((y)=><Area type="monotone" dataKey={y?.dataKey} stroke={y?.color} fill={y?.color} />)}
  </AreaReChart>);
 };

 const PercentageAreaChart = ()=>{

    const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

    const getPercent = (value, total) => {
      const ratio = total > 0 ? value / total : 0;
    
      return toPercent(ratio, 2);
    };
    
    const renderTooltipContent = (o) => {
      const { payload, label } = o;
      const total = payload.reduce((result, entry) => result + entry.value, 0);
    
      return (
        <div className="customized-tooltip-content" style={{ backgroundColor:'#fff' }}>
          <p className="total">{`${label} (Total: ${total})`}</p>
          <ul className="list">
            {payload.map((entry, index) => (
              <li key={`item-${index}`} style={{ color: entry.color }}>
                {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
              </li>
            ))}
          </ul>
        </div>
      );
    };

  return (<AreaReChart
    width={500}
    height={400}
    data={data}
    stackOffset="expand"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={xAxis} />
    <YAxis tickFormatter={toPercent} />
    <Tooltip content={renderTooltipContent} />
    {yAxis?.map((y)=><Area type="monotone" dataKey={y?.dataKey} stackId="1" stroke={y?.color} fill={y?.color} />)}
  </AreaReChart>);
 };

 const AreaChartFillByValue = () =>{
    const gradientOffset = () => {
     const dataMax = Math.max(...data?.map((i) => i.uv));
     const dataMin = Math.min(...data?.map((i) => i.uv));
      
     if (dataMax <= 0) {
      return 0;
     }
     if (dataMin >= 0) {
      return 1;
     }
      
     return dataMax / (dataMax - dataMin);
    };
      
    const off = gradientOffset();
    return (<AreaReChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxis} />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor={yAxis?.range?.from} stopOpacity={1} />
            <stop offset={off} stopColor={yAxis?.range?.to} stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="uv" stroke="url(#splitColor)" fill="url(#splitColor)" />
      </AreaReChart>);
 };

 return (<div>
    {type==='simple' && <SimpleAreaChart />}
    {type==='percentage' && <PercentageAreaChart />}
    {type==='fillByValue' && <AreaChartFillByValue />}

 </div>);
};