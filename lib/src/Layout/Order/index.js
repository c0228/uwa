import React from 'react';

export const Order = ({ type, data, start}) =>{
 let typ = (type===undefined)?'number':type;
 return (<>
  {typ==='bullet' && (<ul>{data?.map((d,i)=><li key={i}>{d}</li>)}</ul>)}
  {typ==='number' && (<ol start={start}>{data?.map((d,i)=><li key={i}>{d}</li>)}</ol>)}
 </>);
};