import React from "react";
import { Stackblitz } from 'e-ui-react';
import IndexHtml from '!!raw-loader!./code/index.html'; 
import IndexJS from '!!raw-loader!./code/index.js'; 
import IndexCSS from '!!raw-loader!./code/index.css'; 

let data = {
  id: "mainForm",
  label:"Open My Codebase",
  title: "",
  description: "",
  template: "javascript",
  files: {
    "index.js": IndexJS,
    "index.html": IndexHtml,
    "index.css": IndexCSS
  },
  dependencies:{
    "rxjs":"5.5.6"
  },
  settings:{
    "compile":{
      "clearConsole": false
    }
  }
};

export const SampleNote1 = () =>{ 
 return (<>
 <Stackblitz data={data} />
 </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;