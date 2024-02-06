import React from "react";
import { CardFlip } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
<CardFlip width="300" height="300" 
  frontContent={<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"  />} 
  backContent={<div className="mtop15p">
    <h1 className="bs-header">Nellutla L N Rao</h1>
    <p>Architect & Engineer</p>
    <p>We love that guy</p>
  </div>}
/>
  </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;