import React from "react";
import { Highlight } from "e-ui-react";
import { default as AuthCode } from "!!raw-loader!../../forgotPwd/index.js";

export const ForgotPwdIndex = ()=>{
 return (<>
  <Highlight content={AuthCode.toString()} lang="javascript" />
 </>);
};