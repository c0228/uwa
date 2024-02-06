import React from "react";
import { SimpleHeader, Form, Rating } from 'e-ui-react';

export const FeedbackPage = ()=>{
 return (<>
 <SimpleHeader title="User Modules - Feedback" />
 <div className="pad15p">
    <Form name="feedbackForm" btnSubmit={{
                 align:'center',
                 btnType:'primary',
                 label:'Submit',
                 size: 11
             }}
             btnReset={{
                 btnType:'danger',
                 label:'Reset',
                 size: 11
             }}
             onSubmit={async(form, isValidForm, triggerReset)=>{
                 // 
     
                // triggerReset();
             }}
             onReset={async()=>{
                
             }}>
    <Rating name="myRating" size={6} colors={{
        default: ["#ccc"],
        onSelect:[{"1,2": "red","3":"orange","4T6":"green"}]
    }} />
    </Form>
 </div>
 </>);
};
