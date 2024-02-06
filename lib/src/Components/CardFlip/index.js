import React from "react";
import './index.css';

export const CardFlip = ({ width, height, frontContent, backContent })=>{
 const divStyle = { width:'300px', height:'300px' };
 return (<>
 <div style={divStyle}>
  <div className="bs-flip-card">
  <div className="bs-flip-card-inner">
    <div className="bs-flip-card-front" style={divStyle}>
      {frontContent}
    </div>
    <div className="bs-flip-card-back" style={divStyle}>
      {backContent}
    </div>
  </div>
</div>
</div>
 </>);
};