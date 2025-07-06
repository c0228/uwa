import React from "react";
import { Hover, Button } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<div align="center">
 <Hover type="tooltip" placement="top" hoverContent="Hover Text">
    <Button type="primary" size={11}>Top</Button>
 </Hover>
 <Hover type="tooltip" placement="left" hoverContent="Hover Text">
    <Button type="primary" size={11}>Left</Button>
 </Hover>
 <Hover type="tooltip" placement="right" hoverContent="Hover Text">
    <Button type="primary" size={11}>Right</Button>
 </Hover>
 <Hover type="tooltip" placement="bottom" hoverContent="Hover Text">
    <Button type="primary" size={11}>Bottom</Button>
 </Hover>
 </div>);
};

export const SampleNote2 = () =>{

  const CustomToolTip = () =>{
    return (<span>
      <div>This is the Sample ToolTip Code</div>
    </span>);
  };

  return (<div align="center">
  <Hover type="tooltip" placement="top" hoverContent={<CustomToolTip />}>
    <span style={{ padding:'5px' }}>Top</span>
  </Hover>
  <Hover type="tooltip" placement="left" hoverContent={<CustomToolTip />}>
    <span style={{ padding:'5px' }}>Left</span>
  </Hover>
  <Hover type="tooltip" placement="right" hoverContent={<CustomToolTip />}>
    <span style={{ padding:'5px' }}>Right</span>
  </Hover>
  <Hover type="tooltip" placement="bottom" hoverContent={<CustomToolTip />}>
    <span style={{ padding:'5px' }}>Bottom</span>
  </Hover>
  </div>);
 };

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;