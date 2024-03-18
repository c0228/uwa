import React from "react";

export const ProgressBar = ({ type, progress, height, value })=>{ 
 return (<div className="progress" style={{ height: height+'px' }}>
 <div className={"progress-bar progress-bar-striped progress-bar-animated bg-"+type} role="progressbar" 
    aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" 
    style={{ width: progress+'%' }}>{value}</div>
</div>);
};