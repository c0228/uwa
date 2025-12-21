import React from "react";
import { Badge } from 'e-ui-react';
const Welcome = () =>{
 return (<div className="p-5" style={{ backgroundColor:'#fbf7f7', borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc'  }}>
       <Badge type="warning" label={<b>Real World Impact</b>} size="12" style={{ marginRight:'5px' }} />
       <div><h2><b>KYT Case Studies</b></h2></div>
       <div><h4><i>How landlords, property managers, and institutions reduced risk,
       fraud, and disputes using {process.env.APP_NAME} platform.</i></h4></div>
       <div style={{ marginTop:'35px' }}>
          <div>
             <div><span style={{ backgroundColor:'#ccc', fontSize:'20px', padding:'15px', borderTopRightRadius:'18px', 
                borderBottomRightRadius:'18px',  }}><b>Common Society Violations & How KYT Resolves Them</b></span></div>
             <div style={{ padding:'25px 15px 5px 15px', borderLeft:'5px solid #ccc'  }}>
                <div><h5><b>Note:</b></h5></div>
                <h5 style={{ lineHeight:'26px' }}>The following case studies are illustrative societal scenarios created to demonstrate how KYT helps 
                   prevent rental-related violations and risks.<br/> No real individuals or properties are referenced.</h5>
             </div>
          </div>
       </div>
    </div>);
};

export default Welcome;