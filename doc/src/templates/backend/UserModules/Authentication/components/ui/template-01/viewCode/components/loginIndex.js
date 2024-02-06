import React from "react";
import { Highlight } from "e-ui-react";
import { default as AuthCode } from "!!raw-loader!../../login/index.js";

export const LoginIndex = ()=>{
 return (<>
   <Highlight content={AuthCode.toString()} lang="javascript" />
 </>);
};