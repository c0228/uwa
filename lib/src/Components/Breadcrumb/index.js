import React from "react";

export const Breadcrumb = ({ backgroundColor })=>{
 return (<div><nav aria-label="breadcrumb" style={{ padding:'8px', backgroundColor: backgroundColor }}>
 <ol className="breadcrumb" style={{ marginBottom:'0px' }}>
   <li className="breadcrumb-item"><a href="#">Home</a></li>
   {/*<li clasNames="breadcrumb-item"><a href="#">Library</a></li>
   <li className="breadcrumb-item" aria-current="page">Data</li>*/}
 </ol>
</nav></div>);
};