import React, { useState } from "react";
import { Modal, Button } from 'e-ui-react';

export const SampleNote1 = () =>{
 
 const SimpleModal = ()=>{
  
  const [ showModel, setShowModal ] = useState(false);

  const HelloWorld = ()=>{
   return (<div>Hello World</div>);
  };

  return (<>
   <Button type="primary" size={11} onClick={()=>setShowModal(true)}>Open Simple Model</Button>
   <Modal title="Modal Header" show={showModel} onClose={setShowModal} content={<HelloWorld />} />
   </>);

 };

  return (<SimpleModal />);

};

export const SampleNote2 = () =>{
  
  const FullScreenModal = ()=>{
   const [ showModel, setShowModal ] = useState(false);

   const HelloWorld = ()=>{
    return (<div>Hello World</div>);
   };

   return (<>
    <Button type="primary" size={11} onClick={()=>setShowModal(true)}>Open Full-Screen Modal</Button>
    <Modal title="Modal Header" show={showModel} onClose={setShowModal} content={<HelloWorld />} fullScreen />
   </>);

 };

  return (<FullScreenModal />);

};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;