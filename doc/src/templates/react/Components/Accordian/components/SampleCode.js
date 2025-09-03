import React from "react";
import { Accordian } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
  <Accordian id="AccordianExample" 
    data={[{ id:"Item#1", title: <h5 className="bs-header">Accordion Item #1</h5>, component:"This is the first item's accordion body"  },
        { id:"Item#2", title: "Accordion Item #2", component:"This is the Second item's accordion body", backgroundColor:'#eee'  },
        { id:"Item#3", title: "Accordion Item #3", component:"This is the Third item's accordion body"  }]} 
  />
  </>);
};

export const SampleNote2 = () =>{
  return (<>
   <Accordian id="AccordianExample" 
     data={[{ id:"Item#1", title: "Accordion Item #1", component:"This is the first item's accordion body"  },
         { id:"Item#2", title: "Accordion Item #2", component:"This is the Second item's accordion body"  },
         { id:"Item#3", title: "Accordion Item #3", component:"This is the Third item's accordion body"  }]} 
     defaultOpen="Item#2"
   />
   </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;