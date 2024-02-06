import React, { useState } from "react";
import { Icon, Drawer, Button } from 'e-ui-react';

export const SampleNote1 = () =>{
 const [show, setShow] = useState(false);
 return (<>
<Drawer 
  width="100%"
  colorConfig={{
    backgroundColor:'#777',
    color: '#fff'
  }} 
  triggerElement={<Button label={<>
    <Icon type="FontAwesome" name="fa-bars" size="12" color="primary" /> Open Drawer
  </>} type="primary" />}>
    <div style={{ color:'#fff' }}>
      Test Content
    </div>
  </Drawer>
  </>);
};

export const SampleNote2 = () =>{
  return (<>
<Drawer 
  width="250px"
  colorConfig={{
   backgroundColor:'#000',
   color: '#fff'
  }} 
  triggerElement={<Button type="outline-primary" label={<>
    <Icon type="FontAwesome" name="fa-bars" size="12" color="primary" /> Open Drawer
  </>} />}>
    <div align="center">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
</Drawer>
   </>);
 };

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;