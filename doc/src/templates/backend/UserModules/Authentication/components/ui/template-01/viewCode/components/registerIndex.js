import React from "react";
import { Highlight } from "e-ui-react";
import { default as AuthCode } from "!!raw-loader!../../register/index.js";

export const RegisterIndex = ()=>{
 return (<>
  <Highlight content={AuthCode.toString()} lang="javascript" />
 </>);
};