import React from "react";
import { Hover, Button } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<div align="center">
 <Hover type="tooltip" placement="top" component={<Button type="primary" label="Top" size={11} />} hoverContent="Hover Text" />
 <Hover type="tooltip" placement="left" component={<Button type="primary" label="Left" size={11} />} hoverContent="Hover Text" />
 <Hover type="tooltip" placement="right" component={<Button type="primary" label="Right" size={11} />} hoverContent="Hover Text" />
 <Hover type="tooltip" placement="bottom" component={<Button type="primary" label="Bottom" size={11} />} hoverContent="Hover Text" />
 </div>);
};

export const SampleNote2 = () =>{
  return (<div align="center">
  <Hover type="tooltip" placement="top" component={<span style={{ padding:'5px' }}>Top</span>} hoverContent="Hover Text" />
  <Hover type="tooltip" placement="left" component={<span style={{ padding:'5px' }}>Left</span>} hoverContent="Hover Text" />
  <Hover type="tooltip" placement="right" component={<span style={{ padding:'5px' }}>Right</span>} hoverContent="Hover Text" />
  <Hover type="tooltip" placement="bottom" component={<span style={{ padding:'5px' }}>Bottom</span>} hoverContent="Hover Text" />
  </div>);
 };

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;