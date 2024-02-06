import React, { useState, useEffect } from "react";
import {  SortJSONArray } from "e-ui-react";

export const Toast = ({ data })=>{
  const [toastData, setToastData ] = useState();
  
  useEffect(()=>{
    setToastData(SortJSONArray(data, 'timestamp', 'asc'));
  },[data]);

 const ToastContent = ({ data, index })=>{

  return (<div id={"toast-"+index} className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <strong className="me-auto">{data.title}</strong>
    <small>{data.timestamp}</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" 
     onClick={()=>{
        document.getElementById("toast-"+index).classList.remove("show");
        document.getElementById("toast-"+index).classList.add("hide");
     }}></button>
  </div>
  <div className="toast-body">
    {data.message}
  </div>
</div>);
 };

 return (<>
 <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
 <div className="toast-container">
   {toastData?.map((d,i)=><ToastContent key={i} index={i} data={d} />)}
 </div>
 </div>
 </>);
};