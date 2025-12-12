import React, { useState, useEffect } from "react";
import { Autocomplete } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{

 const data = ["Nellutla", 
    (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span 
          data-no-highlight 
          style={{ padding:'8px', borderRadius:'50%', backgroundColor:'green', color:'white' }}
        >
          N
        </span>
        <span>Nethula</span>
      </div>
    ),
    "Nemalikanti"];

 return (<>
 <Autocomplete name="surname" label="Surname" placeholder="Enter your Surname" autoCompleteData={data} />
 </>); 
};

export const SampleNote2 = () =>{
 const [ data, setData ] = useState([]);

 useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => setData(json.map((d)=>d.name)));

  // Results:
  // ["Leanne Graham","Ervin Howell","Clementine Bauch","Patricia Lebsack","Chelsey Dietrich","Mrs. Dennis Schulist","Kurtis Weissnat","Nicholas Runolfsdottir V",
  // "Glenna Reichert","Clementina DuBuque"]

 },[]);

   
 return (<>
  <Autocomplete name="surname" label="Surname" placeholder="Enter your Surname" autoCompleteData={data} value="Clementine Bauch" />
 </>);

};

export const SampleNote3 = () =>{
 const data = ["Nellutla", "Nethula", "Nemalikanti"];
 return (<>
  <Form name="testForm">
   <Autocomplete name="surname" label="Surname" 
        placeholder="Enter your Surname" autoCompleteData={data} 
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
            }
        }}
    />
  </Form>
  </>);
};
   

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;