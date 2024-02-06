import React from "react";
import { Rating } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
  return (<>
<div align="center">
 <Rating name="myRating" size={6} 
    colors={{
      default: [ "#ccc" ],
      onSelect:[{ "1,2": "red", "3":"orange", "4T6":"green" }]
    }} 
    value={2} />
</div>
  </>);
};

export const SampleNote2 = () =>{  
 return (<>
<Form name="feedbackForm" 
  btnSubmit={{ align:'center', btnType:'primary', label:'Submit', size: 11 }}
  btnReset={{ btnType:'danger', label:'Reset', size: 11 }}
  onSubmit={async(form, isValidForm, triggerReset)=>{  }}
  onReset={async()=>{ }}>
    <div align="center">
      <Rating name="myRating" size={6} 
        colors={{
            default: [ "#ccc" ],
            onSelect:[{ "1,2": "red", "3": "orange", "4T6": "green" }]
        }} />
    </div>
</Form>
 </>);
};

export const SampleNote3 = () =>{  
  return (<>
<div align="center">
  <Rating name="myRating" size={6} position="static"
    colors={{
      default: [ "#ccc" ],
      onSelect:[{ "1,2": "red", "3": "orange", "4T6": "green" }]
    }} 
    value={3} />
</div>
  </>);
 };

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;