import React, { useState } from "react";
import { Toast, Select, Button, Icon } from 'e-ui-react';

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
        onClose={() => setShow(false)}>
          <div>
            <Icon type="FontAwesome" name="fa-hand-paper-o" size={13} style={{ marginRight:'5px' }} />
            <span><b>Hello, world! This is a toast message.</b></span>
          </div>
        </Toast>
    </div>
  ); 
 };

 return (<ToastExample />);
};


const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;