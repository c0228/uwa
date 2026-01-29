import React from "react";
import { Icon } from "e-ui-react";
import { Title } from '@Templates/Utils/index.js';

const OnlinevsOffline = () =>{
 return (<div className="lh28p fs16p mbot75p">
    <div><h3><b>Cost Comparison: Online vs Offline Rental Agreement</b></h3></div>
    <div className="mtop15p">
        <Title color="green">
            <Icon type="FontAwesome" name="fa-check-circle" size={18} color="green" style={{ marginRight:'5px'}} /> 
            Online Rental Agreement
        </Title>   
    </div>
    <div className="padLeft15p">
        <div className="mtop5p">You <b>only pay:</b></div>
        <ol>
            <li className="mtop5p">
                <div><b>Stamp Duty</b></div>
                <div>[Same as offline (government fixed rate)]</div>
            </li>
            <li className="mtop5p">
                <div><b>eSign charges</b></div>
                <div>[Very low (₹10–₹30 per signer approx, varies by volume)]</div>
            </li>
            <li className="mtop5p">
                <div><b>Your platform/service fee</b></div>
                <div>[Whatever margin you add]</div>
            </li>
        </ol>
        <div>You <b>do NOT pay:</b></div>
        <ul>
            <li className="mtop5p">Registration fee</li>
            <li className="mtop5p">Sub-Registrar charges</li>
            <li className="mtop5p">Registration scanning fees</li>
            <li className="mtop5p">Agent / middleman commissions</li>
            <li className="mtop5p">Physical visit costs (travel and time)</li>
        </ul>
        <div style={{ padding:'15px', backgroundColor:'#ccc', boxShadow:'2px 2px 2px 2px #eee' }}><h4><b>Total Cost: LOW</b></h4></div>
    </div>
 </div>);
};

export default OnlinevsOffline;