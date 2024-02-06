import React, { useState } from "react";
import { Toast, GetCurrentTimeStamp } from 'e-ui-react';

export const SampleNote1 = () =>{

 const ToastExample = ()=>{

  const [ toastList, setToastList ] = useState([]);
  
  const toastData = { title:'Bootstrap', message:'Hello, world! This is a toast message.', timestamp: GetCurrentTimeStamp() };

  return (<>
   <button type="button" className="btn btn-primary" id="liveToastBtn" onClick={()=>setToastList([...toastList, toastData])}>View Toast</button>
   <Toast data={toastList} />
  </>);
  
 };

 return (<ToastExample />);
};


const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;