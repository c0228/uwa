import React, { useState, useEffect } from "react";
import { Select } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <Select
         value="Light"
         placeholder="Select Theme"
         options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
         { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
         className="navbar-layout"
         width="130"
         fontSize="12"
         onChange={(event) => {
            let option = event.target.value;
            let bgColor = (option === 'Dark') ? '#282a36' : '#fff';
            let color = (option === 'Dark') ? '#fff' : '#282a36';
            document.body.style.backgroundColor = bgColor;
            document.body.style.color = color;
         }}
      />
 </>); 
};

export const SampleNote2 = () =>{
 return (<>
  <Form name="testForm">
    <Select
         value="Light"
         placeholder="Select Theme"
         options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
         { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
         className="navbar-layout"
         width="130"
         fontSize="12"
         onChange={(event) => {
            let option = event.target.value;
            let bgColor = (option === 'Dark') ? '#282a36' : '#fff';
            let color = (option === 'Dark') ? '#fff' : '#282a36';
            document.body.style.backgroundColor = bgColor;
            document.body.style.color = color;
         }}
      />
  </Form>
  </>);
};
   

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;