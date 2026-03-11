import React, { useState } from "react";
import { Toast, Select, Button } from 'e-ui-react';

export const SampleNote1 = () =>{

 const ToastExample = () => {
  const data = ["top-right", "top-left", "top-center", "middle-center", "middle-left", "middle-right", "bottom-right", "bottom-left", "bottom-center"];
  const [show, setShow] = useState(false);
  const [ selected, setSelected ] = useState();
  return (
    <div className="d-flex gap-2">
       <Select
         placeholder="Select Position"
         options={data?.map(d=>({ id: d, label: d, value: d }))}
         width="130" 
         fontSize="12"
         onChange={(event) => {
            setSelected(event.target.value);
          }}
         />
      <Button type="primary" size={11}
        onClick={() => setShow(true)}
      >
        View Toast
      </Button>

      <Toast
        position={selected}
        show={show}
        message="Hello, world! This is a toast message."
        onClose={() => setShow(false)}
      />
    </div>
  ); 
 };

 return (<ToastExample />);
};


const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;