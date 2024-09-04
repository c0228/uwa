import React from "react";
import { Button } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
<Button type="primary" size={11}><b>Primary Button</b></Button>
<Button type="secondary" size={11}><b>Secondary Button</b></Button>
<Button type="success" size={11}><b>Success Button</b></Button>
<Button type="danger" size={11}><b>Danger Button</b></Button>
<Button type="warning" size={11}><b>Warning Button</b></Button>
<Button type="info" size={11}><b>Info Button</b></Button>
<Button type="dark" size={11}><b>Dark Button</b></Button>
<Button type="light" size={11}><b>Light Button</b></Button>
 </>);
};

export const SampleNote2 = () =>{
 return (<>
<Button type="outline-primary" size={11}><b>Outline Primary Button</b></Button>
<Button type="outline-secondary" size={11}><b>Outline Secondary Button</b></Button>
<Button type="outline-success" size={11}><b>Outline Success Button</b></Button>
<Button type="outline-danger" size={11}><b>Outline Danger Button</b></Button>
<Button type="outline-warning" size={11}><b>Outline Warning Button</b></Button>
<Button type="outline-info" size={11}><b>Outline Info Button</b></Button>
<Button type="outline-dark" size={11}><b>Outline Dark Button</b></Button>
<Button type="outline-light" size={11}><b>Outline Light Button</b></Button>
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;