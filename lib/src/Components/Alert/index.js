import React, { useState } from 'react';

export const Alert =({ type, show, heading, body })=> {
  const className = "alert alert-"+type+" alert-dismissible";
  const [ display, setDisplay ] = useState(show);
  if(display) {
    return (<div className={className} role="alert">
    {(heading!==undefined) && (<><h5 className="alert-heading">{heading}</h5><hr className="mb-3" /></>)}
    <div>{body}</div>   
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setDisplay(false)}></button>
  </div>);
  } else {
    return (<div></div>)
  }
};
