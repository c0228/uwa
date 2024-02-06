import React from "react";
import { Tab, UrlParams, Card } from 'e-ui-react';

const url = UrlParams().baseUrl; 

const Component = ({ title })=>{
  return (<>
  <Card padding={10} borderRadius={0}>{title}</Card>
  </>);
};

export const SampleNote1 = () =>{
 return (<>
<Tab minValues={4} menulinks={[{ id:"home", label:"Home", url:url+"Component/Tab#home", component:(<Component title="Home Content"/>) },
    { id:"menu1", label:"Menu 1", url:url+"Component/Tab#menu1", component:(<Component title="Menu #1 Content"/>) },
    { id:"menu2", label:"Menu 2", component:(<Component title="Menu #2 Content"/>) },
    { id:"menu3", label:"Menu 3", url:url+"Component/Tab#menu3", component:(<Component title="Menu #3 Content"/>) },
    { id:"menu4", label:"Menu 4", url:url+"Component/Tab#menu4", component:(<Component title="Menu #4 Content"/>) },
    { id:"menu5", label:"Menu 5", url:url+"Component/Tab#menu5", component:(<Component title="Menu #5 Content"/>) },
    { id:"menu6", label:"Menu 6", url:url+"Component/Tab#menu6", component:(<Component title="Menu #6 Content"/>) },
  ]} />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
<Tab justify={true} minValues={4} menulinks={[{ id:"home", label:"Home", component:(<Component title="Home Content"/>) },
    { id:"menu1", label:"Menu 1", component:(<Component title="Menu #1 Content"/>) },
    { id:"menu2", label:"Menu 2", component:(<Component title="Menu #2 Content"/>) },
    { id:"menu3", label:"Menu 3", component:(<Component title="Menu #3 Content"/>) },
    { id:"menu4", label:"Menu 4", component:(<Component title="Menu #4 Content"/>) },
    { id:"menu5", label:"Menu 5", component:(<Component title="Menu #5 Content"/>) },
    { id:"menu6", label:"Menu 6", component:(<Component title="Menu #6 Content"/>) },
  ]} />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;