import React from 'react';

export const Avatar = ({ size, src, border }) => {
 const borderColor = border?.color?.length > 0 ? border?.color : '#ccc';
 const borderSize = border?.size > 0 ? border?.size : '1';
 return (
   <img
    style={{
     borderRadius: '50%',
     border: borderSize + 'px solid ' + borderColor,
     width: size + 'px',
     objectFit: 'cover',
     maxHeight: size + 'px',
    }}
    src={src}
   />
 );
};
