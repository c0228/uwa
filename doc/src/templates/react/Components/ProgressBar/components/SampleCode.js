import React, { useState } from "react";
import { ProgressBar } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
  <div className="mtop15p">
    <ProgressBar
      height={20}
      background="#000"
      segments={[
        {
          progress: 40,
          color: '#28a745',
          value: 'Completed'
        },
        {
          progress: 20,
          color: '#ffc107',
          value: 'Revision'
        },
        {
          progress: 10,
          color: '#17a2b8',
          value: 'Mock Tests'
        }
      ]}
    />
  </div>
 </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;