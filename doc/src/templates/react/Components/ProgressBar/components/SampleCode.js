import React, { useState } from "react";
import { ProgressBar } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
  <div className="mtop15p">
    <ProgressBar type="primary" progress="75" height="18" value="75%" />
  </div>
  <div className="mtop15p">
    <ProgressBar type="success" progress="100" height="18" value="Completed" />
  </div>
  <div className="mtop15p">
    <ProgressBar type="info" progress="60" height="15" />
  </div>
  <div className="mtop15p">
    <ProgressBar type="warning" progress="40" height="12" />
  </div>
  <div className="mtop15p">
    <ProgressBar type="danger" progress="55" height="10" />
  </div>
 </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;