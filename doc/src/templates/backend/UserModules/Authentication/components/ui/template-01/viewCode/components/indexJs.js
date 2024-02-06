import React from "react";
import { Highlight } from "e-ui-react";
import { default as AuthCode } from "!!raw-loader!../../index.js";

export const IndexJs = ()=>{
 return (<>
  <Highlight content={AuthCode.toString()} lang="javascript" lines={['1T26','28T37','39T48','50T55']} />
 </>);
};