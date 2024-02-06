import React from "react";
import './index.css';

const Template01 = ({ data, withCard })=>{
 return (<>
 <div className="timeline">
  {data?.map((d, i)=>{
      return (
        <div key={i} className={(withCard)?("timeline-container timeline-"+d?.align+" timeline-border-"+d?.align):
          ("timeline-container timeline-"+d?.align)}>
          {(withCard)?(<div className="timeline-content">{d?.content}</div>):
          (<div>{d?.content}</div>)}
        </div>);
  })}
</div>
 </>);
};

export default Template01;