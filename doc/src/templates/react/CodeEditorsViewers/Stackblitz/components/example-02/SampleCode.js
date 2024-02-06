import React from "react";
import { Stackblitz } from 'e-ui-react';
/* import WebpackUtils from '!!raw-loader!e-ui-tmpl/config/webpack.utils.cjs?raw';
import IndexHtml from '!!raw-loader!e-ui-tmpl/public/index.html';
import IndexJS from '!!raw-loader!e-ui-tmpl/src/index.js';
import IndexCSS from '!!raw-loader!e-ui-tmpl/src/index.css';
import BabelConfig from '!!raw-loader!e-ui-tmpl/babel.config.json';
import PackageJSON from '!!raw-loader!e-ui-tmpl/package.json';
import PackageLockJSON from '!!raw-loader!e-ui-tmpl/package-lock.json';
import WebpackConfig from '!!raw-loader!e-ui-tmpl/webpack.config.cjs';

let data = {
  id: "mainForm",
  label:"Playground",
  title: "",
  description: "",
  template: "javascript",
  files: {
    "config/webpack.utils.js": WebpackUtils,
    "public/index.html": IndexHtml,
    "src/index.css": IndexCSS,
    "src/index.js": IndexJS,
    ".env": Env,
    "babel.config.json": BabelConfig,
    "package.json": PackageJSON,
    "package-lock.json": PackageLockJSON,
    "webpack.config.cjs": WebpackConfig,
  },
  dependencies:{
    "e-uireact":"1.0.6"
  },
  settings:{
    "compile":{
      "clearConsole": false
    }
  }
};
*/
export const SampleNote1 = () =>{ 
 return (<>
 {WebpackUtils.toString()}
 {/*<Stackblitz data={data} />*/}
 </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;