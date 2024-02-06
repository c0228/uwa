import React from "react";
import './index.css';

export const Hover = ({ type, placement, component, hoverContent })=>{

 return (<>
 {type==='tooltip' && (
     <span className="tooltipComponent">{component}
      {hoverContent?.length>0 && <span className={"tooltiptext tooltiptext-"+placement}>{hoverContent}</span>}
     </span>
 )}
 
 
 </>);
};