import React from "react";
import { Button } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
<Button type="primary" label="Primary Button" size={11} />
<Button type="secondary" label="Secondary Button" size={11} />
<Button type="success" label="Success Button" size={11} />
<Button type="danger" label="Danger Button" size={11} />
<Button type="warning" label="Warning Button" size={11} />
<Button type="info" label="Info Button" size={11} />
<Button type="dark" label="Dark Button" size={11} />
<Button type="light" label="Light Button" size={11} />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
<Button type="outline-primary" label="Outline Primary Button" size={11} />
<Button type="outline-secondary" label="Outline Secondary Button" size={11} />
<Button type="outline-success" label="Outline Success Button" size={11} />
<Button type="outline-danger" label="Outline Danger Button" size={11} />
<Button type="outline-warning" label="Outline Warning Button" size={11} />
<Button type="outline-info" label="Outline Info Button" size={11} />
<Button type="outline-dark" label="Outline Dark Button" size={11} />
<Button type="outline-light" label="Outline Light Button" size={11} />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;