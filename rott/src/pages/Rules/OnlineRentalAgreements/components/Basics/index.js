import React from "react";
import { Icon, Card, Table } from "e-ui-react";
import { Title, DisclaimerNote } from '@Templates/Utils/index.js';

const BasicRules = () =>{
    return (<div>
        <div><h3><b>Basic Rules You Must Know (India)</b></h3></div>
        <div className="lh28p fs16p mbot75p">
            <div className="mtop15p">Before understanding state-wise stamp duty and registration rules, it is important to 
                    know the <b>basic legal rules</b> that apply to <b>all online rental agreements in India.</b>
                    These rules apply to <b>both Commercial and Residential rental agreements,</b> unless mentioned otherwise.</div>
            <div className="mtop15p">
                    <DisclaimerNote>
                        <div>This page is for <b>general informational purposes only</b>.<br/>
                        Stamp duty and registration rules may change based on state government notifications.</div>
                    </DisclaimerNote>
            </div>
            <AboutORA />
            <ORALegalValidity />
            <AboutStampDuty />
            <RegistrationProcess />
            <OnlineSignatures />
            <CommercialResidentialRentalAgreements />
        </div>
    </div>);
};

export const AboutORA = () =>{
 return (<div className="mtop15p">
    <Title>1. About Online Rental Agreements</Title>
    <div className="padLeft15p">
        <div>Online rental agreements are legally valid in India if they satisfy the following laws:</div>
            <ul>
                <li className="mtop5p"><b>Indian Contract Act, 1872</b></li>
                <li className="mtop5p"><b>Information Technology Act, 2000</b></li>
                <li className="mtop5p"><b>State Stamp Acts</b></li>
                <li className="mtop5p"><b>Registration Act, 1908 (where applicable)</b></li>
            </ul>
            <div>An online rental agreement has the <b>same legal validity</b> as a physical agreement when:</div>
            <ul>
                <li className="mtop5p">Proper <b>stamp duty is paid</b></li>
                <li className="mtop5p">The agreement is <b>signed using a valid electronic signature (eSign)</b></li>
                <li className="mtop5p">Both parties give <b>free consent</b></li>
            </ul>
        </div>
 </div>);
};

const ORALegalValidity = () =>{
 return (<div className="mtop15p">
                    <Title>2. Online Rental Agreements Legal Validity</Title>
                    <div className="padLeft15p">
                        <div>A rental agreement—online or offline—is legally valid only if all the following conditions are met:</div>
                        <div className="mtop5p"><h5><b>Essential Conditions:</b></h5></div>
                        <ul>
                            <li className="mtop5p">Name and details of <b>Owner (Lessor)</b> and <b>Tenant (Lessee)</b></li>
                            <li className="mtop5p">Description of the <b>rented property</b></li>
                            <li className="mtop5p">Monthly rent amount</li>
                            <li className="mtop5p">Lease duration</li>
                            <li className="mtop5p">Security deposit (if any)</li>
                            <li className="mtop5p">Rights and obligations of both parties</li>
                            <li className="mtop5p">Proper <b>stamp duty</b></li>
                            <li className="mtop5p">Valid <b>signatures</b></li>
                        </ul>
                        <div className="mtop5p mbot15p">
                            <span style={{ padding:'15px', border:'1px solid green', borderRadius:'5px' }}>
                                <Icon type="FontAwesome" name="fa-exclamation-circle" color="green" size="16" style={{ marginRight:'10px' }} />
                                Without stamp duty, the agreement is not legally enforceable, even if signed.
                            </span>
                        </div>
        </div>
    </div>);
};

const AboutStampDuty = () =>{
  return (<div className="mtop15p">
    <Title>3. About Stamp Duty</Title>
    <div className="padLeft15p">
        <div>Stamp duty is a <b>state tax paid</b> on rental agreements to make them legally enforceable.</div>
        <div className="mtop5p"><h5><b>Key Points:</b></h5></div>
        <ul>
            <li className="mtop5p">Stamp duty rules <b>vary from state to state</b></li>
            <li className="mtop5p">Amount depends on:
                <ul>
                    <li className="mtop5p">State</li>
                    <li className="mtop5p">Monthly rent</li>
                    <li className="mtop5p">Lease period</li>
                    <li className="mtop5p">Commercial or residential usage</li>
                </ul>
            </li>
            <li className="mtop5p">
                <div>An unstamped agreement is <b>not admissible in court</b></div>
                <div className="mtop15p mbot15p">
                    <span style={{ padding:'15px', border:'1px solid green', borderRadius:'5px' }}>
                        <Icon type="FontAwesome" name="fa-hand-o-right" color="green" size="16" style={{ marginRight:'10px' }} />
                        This is why selecting the correct state and correct stamp value is critical.
                    </span>
                </div>
            </li>
        </ul>
        <div className="mtop15p"><h5><b>Payment to Stamp Duty:</b></h5></div>
        <ul>
            <li className="mtop5p">In most states, in general, <b>Tenant</b> is responsible to pay the stamp duty and 
            this can be customized by mutual consent.
            <Card padding={15} border={{ color:"green" }}>
                <div><b>Note:</b></div>
                <div className="mtop5p">If Stamp Duty Is Paid Incorrectly -</div>
                <ul>
                    <li className="mtop5p">Agreement may be treated as <b>invalid</b></li>
                    <li className="mtop5p">Penalty and deficit stamp duty may be imposed</li>
                    <li className="mtop5p">Agreement may not be enforceable in court</li>
                </ul>
                <div><Icon type="FontAwesome" name="fa-check-circle" size={14} color="green" /> Always pay correct stamp duty 
                as per state rules.</div>
            </Card>
            </li>
        </ul>
    </div>
  </div>);  
};

const RegistrationProcess = () =>{
 return (<div className="mtop15p">
    <Title>4. Registration Process</Title>
    <div className="padLeft15p">
        <div>Registration is the process of recording the agreement with the <b>Sub-Registrar of Assurances.</b></div>
        <div className="mtop5p"><h5><b>Registration is mandatory when:</b></h5></div>
        <ul>
            <li className="mtop5p">Lease period is <b>12 months or more</b></li>
            <li className="mtop5p">The agreement involves <b>long-term tenancy</b></li>
            <li className="mtop5p">Required by <b>state-specific rules</b></li>
        </ul>
        <div className="mtop5p"><h5><b>Registration is generally NOT required when:</b></h5></div>
        <ul>
            <li className="mtop5p">Lease period is <b>11 months or less</b> (most states)</li>
        </ul>
        <div className="list-group">
        <div className="list-group-item" style={{ borderColor:'green' }}>
            <div className="mtop5p"><h5><b>Why Most Online Agreements Are for 11 Months?</b></h5></div>
            <div>Most online rental agreements in India are created for 11 months because:</div>
            <ul>
                <li className="mtop5p">Registration is usually not required</li>
                <li className="mtop5p">Only stamp duty is payable</li>
                <li className="mtop5p">Faster and fully online process</li>
                <li className="mtop5p">Lower cost for owners and tenants</li>
            </ul>
            <div>This is a common and legally accepted practice across most states.</div>
        </div>
        <div className="list-group-item" style={{ borderColor:'green' }}>
            <div>If registration is mandatory and not done:</div>
            <ul>
                <li className="mtop5p">The agreement <b>cannot be used as legal evidence</b></li>
                <li className="mtop5p">Penalties may apply</li>
            </ul>
        </div>
        </div>
    </div>
 </div>);
};

const OnlineSignatures = () =>{
 return (<div className="mtop15p">
    <Title>5. Online Signatures</Title>
    <div className="padLeft15p">
        <div className="mtop5p">Rental agreements can be signed online using <b>Aadhaar-based eSign.</b></div>
        <div className="mtop15p"><h5><b>Valid eSign Methods:</b></h5></div>
        <ul>
            <li className="mtop5p">Aadhaar OTP based eSign</li>
            <li className="mtop5p">Aadhaar biometric eSign</li>
        </ul>
        <div className="mtop5p">These are legally recognized under:</div>
        <ul>
            <li className="mtop5p"><b>IT Act, 2000</b></li>
            <li className="mtop5p"><b>UIDAI Guidelines</b></li>
        </ul>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times-circle" size={18} color="red" style={{ marginRight:'5px' }} />
            Scanned signatures or image uploads alone are <b>not legally reliable.</b>
        </div>
    </div>
 </div>);
};

const CommercialResidentialRentalAgreements = () =>{
 return (<div className="mtop15p">
    <Title>6. Commercial vs Residential Rental Agreements</Title>
    <div className="padLeft15p">
        <div>Stamp duty and registration rules may differ <b>based on usage type.</b></div>
        <div className="table-responsive mtop15p">
            <table className="table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Stamp Duty</th>
                        <th>Registration Rules</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Residential</td>
                        <td>Lower</td>
                        <td>Standard</td>
                    </tr>
                    <tr>
                        <td>Commercial</td>
                        <td>Higher</td>
                        <td>Often stricter</td>
                    </tr>
                </tbody>
            </table>
            <div className="mtop15p">Commercial rental agreements usually attract:</div>
            <ul>
                <li className="mtop5p">Higher stamp duty</li>
                <li className="mtop5p">Greater scrutiny</li>
                <li className="mtop5p">Clearer clauses on usage and termination</li>
            </ul>
        </div>
    </div>
 </div>);
};

export default BasicRules;