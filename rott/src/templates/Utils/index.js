import React from "react";
import { Icon } from "e-ui-react";

export const DisclaimerNote = ({ children }) =>{
 return (<div style={{ padding:'15px', backgroundColor:'#ccc', borderLeft:'5px solid #999' }}>
    <div><h4><b>
        <Icon type="FontAwesome" name="fa-lock" size={22} color="black" style={{ marginRight:'8px' }} />
        Important Disclaimer</b></h4></div>
        {children}
    </div>);
};