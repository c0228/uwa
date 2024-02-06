import React from "react";
import { Highlight } from "e-ui-react";
import { default as AuthCode } from "!!raw-loader!../../index.css";

export const IndexCss = ()=>{
 return (<>
  <Highlight content={AuthCode.toString()} lang="css" />
 </>);
};