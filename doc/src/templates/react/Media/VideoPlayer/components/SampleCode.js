import React from "react";
import { VideoPlayer } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <div style={{ width:'500px', height:'auto' }}>
 <VideoPlayer src={{
  type: 'video',
  sources: [
    {
      src: 'liGVNbI2lUw',
      provider: 'youtube',
    },
  ],
 }} />
</div>
<div style={{ marginTop:'5px', width:'500px', height:'auto' }}>
 <VideoPlayer src={{
  type: 'video',
  sources: [
    {
      src: 'JZ7C-uZ9kS0',
      provider: 'youtube',
    },
  ],
 }} />
</div>
  </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;