import React from 'react';

export const Order = ({ type, data, listStyle, start }) => {
 let typ = type === undefined ? 'number' : type;
 let styles = [];
 if(listStyle === 'none') { styles.listStyleType = 'none'; }
 return (
  <>
   {typ === 'bullet' && (
    <ul style={styles}>
     {data?.map((d, i) => (
      <li key={i}>{d}</li>
     ))}
    </ul>
   )}
   {typ === 'number' && (
    <ol start={start} style={styles}>
     {data?.map((d, i) => (
      <li key={i}>{d}</li>
     ))}
    </ol>
   )}
  </>
 );
};
