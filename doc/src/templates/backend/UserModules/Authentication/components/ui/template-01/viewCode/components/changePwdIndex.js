import React from "react";
import { Highlight } from "e-ui-react";
import { default as AuthCode } from "!!raw-loader!../../changePwd/index.js";

export const ChangePwdIndex = ()=>{
 return (<>
  <Highlight content={AuthCode.toString()} lang="javascript" />
 </>);
};