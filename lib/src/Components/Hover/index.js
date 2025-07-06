import React from 'react';
import './index.css';



export const Hover = ({ type, placement, children, hoverContent }) => {
 return (
  <>
   {type === 'tooltip' && (
    <span className="tooltipComponent">
     {children}
      <div className={'tooltiptext tooltiptext-' + placement}>
       {hoverContent}
      </div>
    </span>
   )}
  </>
 );
};
