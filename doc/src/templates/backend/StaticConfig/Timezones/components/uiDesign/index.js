import React from "react";
import { Card, Highlight, Colors } from "e-ui-react";
import { default as SampleCodeJS  } from '!!raw-loader!./SampleCode.js';
import { SampleNote1, SampleNote2 } from "./SampleCode.js";

const UIDesign = ()=>{
 return (<div style={{ padding:'15px' }}>
  <ol>
    <li>
        <div className="mtop15p mbot10p"><b>Dropdown Timezone:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0','1','3']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['29']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['31T36']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['39']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote2 />
        </Card>
    </li> 
    <li>
        <div className="mtop15p mbot10p"><b>Select Options Timezone:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0T2']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['7']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['9T14']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['17T22']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote1 />
        </Card>
    </li>
  </ol>
 </div>);
};

export default UIDesign;