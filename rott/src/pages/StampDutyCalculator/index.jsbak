import React, { useState } from "react";
import { Form, ContainerFluid, Row, Col, Select, Switch, TextBox } from "e-ui-react";

/* Fixed Constants */
const AADHAAR_SIGNATURE = 25;
const NON_AADHAAR_SIGNATURE = 15;
const DIGITAL_STAMP_PAPER = 45;
const STAMP_ORDER_FEE = 500;
// const MINIMUM_ESIGN_PURCHASE = 100;
// const MINIMUM_ESTAMP_PURCHASE_IN_SIZE = 30;

const StampDutyCalculator = () => {
  const [usersSigningCount, setUsersSigningCount] = useState(0);
  const words = ["First", "Second", "Third", "Fourth", "Fifth"];
  const [stampDutyFormData, setStampDutyFormData ] = useState({});

  const AadhaarNonAadhaarSignCount = (formData, NoOfUsers) =>{
    let aadhaarCount = 0;
    let nonAadhaarCount = 0;
    for (let i = 1; i <= NoOfUsers; i++) {
        const isAadhaar = formData?.[`${i}_aadhaarESigning`]?.value?.length > 0;
        if (isAadhaar) { aadhaarCount++; } 
        else { nonAadhaarCount++; }
    }
    return { aadhaarSign : aadhaarCount, nonAadhaarSign: nonAadhaarCount };
  };

  const Calculations = (data) =>{
    /* eSign Cost */
    const aadhaar_eSign_Cost = data?.aadhaarSign * AADHAAR_SIGNATURE;
        data["aadhaarSignCostInEach"] = AADHAAR_SIGNATURE;
        data["aadhaarSignCostInTotal"] = aadhaar_eSign_Cost;
    const nonAadhaar_eSign_Cost = data?.nonAadhaarSign * NON_AADHAAR_SIGNATURE;
        data["nonAadhaarSignCostInEach"] = NON_AADHAAR_SIGNATURE;
        data["nonAadhaarSignCostInTotal"] = nonAadhaar_eSign_Cost;
    const total_eSign_Cost = aadhaar_eSign_Cost + nonAadhaar_eSign_Cost;
    const final_eSign_Cost = Math.max(total_eSign_Cost, 100); // Minimum ₹100 will be charged even if calculated amount is lower.
        data["eSignCostInTotal"] = final_eSign_Cost;
    /* Digital Stamp Cost */
    const stamp_Paper_Cost = data?.stampPapersRequired * DIGITAL_STAMP_PAPER;
        data["stampPaperCostInEach"] = DIGITAL_STAMP_PAPER;
        data["stampPaperCostInTotal"] = stamp_Paper_Cost;
        data["stampOrderFee"] = STAMP_ORDER_FEE;
        
    const totalPayable = final_eSign_Cost + stamp_Paper_Cost + STAMP_ORDER_FEE + data["stampDutyGovernmentFee"];
        data["totalPayable"] = totalPayable;
    setStampDutyFormData( data );
  };


  return (
    <div>
      <ContainerFluid>
        <Row>
            <Col md={6}>
                <div className="mtop15p">
                    <h2><b>Rental Agreement Calculator</b></h2><hr />
                </div>
                <Form name="StampDutyForm"  
                btnSubmit={{
                    align: 'center',
                    btnType:'dark',
                    label:'Calculate',
                    size: 11
                }}
                onSubmit={async(form, isValidForm, setFormMode)=>{
                    if(isValidForm){ 
                        const formData = form?.["StampDutyForm"];
                        const NoOfUsers = formData?.["UsersSigning"]?.value;

                        const StampDutyGovernmentFee = formData?.["StampDutyGovernmentFee"]?.value;

                        let data = AadhaarNonAadhaarSignCount(formData, NoOfUsers);
                            data["stampPapersRequired"] = 1;
                            data["stampDutyGovernmentFee"] = Number(StampDutyGovernmentFee);

                        Calculations( data );
                       // setStampDutyFormData( data );
                     }
                    }}>
                <Row>
                    <Col md={6}>
                        <div className="mtop15p">
                            <Select
                                id="State" name="State"
                                label="Your State / Union Territory"
                                placeholder="Choose your Location"
                                options={
                                    ["Karnataka","Maharashtra", "Tamil Nadu", "Telangana", 
                                     "Delhi", "Haryana", "Punjab"]?.map((state)=>{
                                        return { id: state, label: state, value: state };
                                    })}
                                className="navbar-layout"
                                fontSize="12"
                                onChange={(event) => {
                                setUsersSigningCount(Number(event.target.value));
                                }}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mtop15p">
                            <Select
                                id="UsersSigning" name="UsersSigning"
                                label="No. of Users Signing on Document"
                                placeholder="Select No. of Users"
                                options={[
                                { id: "1", label: "1 User", value: "1" },
                                { id: "2", label: "2 Users", value: "2" },
                                { id: "3", label: "3 Users", value: "3" },
                                { id: "4", label: "4 Users", value: "4" },
                                { id: "5", label: "5 Users", value: "5" }
                                ]}
                                className="navbar-layout"
                                fontSize="12"
                                onChange={(event) => {
                                setUsersSigningCount(Number(event.target.value));
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                            <div>
                                {usersSigningCount > 0 &&
                                    (<div className="mtop15p">
                                        {words.slice(0, usersSigningCount).map((word, index) => {
                                    return (<Row key={index}>
                                        <Col md={4}>
                                            <b>{word} User</b>
                                        </Col>
                                        <Col md={8}>
                                            <Switch type="checkbox" id={(index+1)+'_aadhaarESigning'} name={(index+1)+'_aadhaarESigning'}   
                                                value={[{ id:"Y", label:"Aadhaar eSigning", value:"Y"}]} 
                                                disabled={false} />
                                        </Col>
                                    </Row>);
                                    })}
                                    </div>)}
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="mtop15p">
                            <TextBox name="MonthlyRent" label="Monthly Rent (in ₹.)" placeholder="Enter your Monthly Rent (in ₹.)" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mtop15p">
                            <TextBox name="Deposit" label="Deposit (in ₹.)" placeholder="Enter your Deposit Amount (in ₹.)" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="mtop15p">
                            <Select
                                id="AgreementDuration" name="AgreementDuration"
                                label="Agreement Duration (in months)"
                                placeholder="Select Agreement Duration"
                                options={[{ id: "Lessthan11Months", label: "< 11 Months", value: "Lessthan11Months" },
                                    { id: "GreatorthanEqualTo11Months", label: ">= 11 Months", value: "GreatorthanEqualTo11Months" }]}
                                className="navbar-layout"
                                fontSize="12"
                                onChange={(event) => {
                                setUsersSigningCount(Number(event.target.value));
                                }}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mtop15p">
                            <Select
                                id="PropertyType" name="PropertyType"
                                label="Property Type"
                                placeholder="Select Property Type"
                                options={[{ id: "Urban", label: "Urban", value: "Urban" },
                                    { id: "Rural", label: "Rural", value: "Rural" }]}
                                className="navbar-layout"
                                fontSize="12"
                                onChange={(event) => {
                                setUsersSigningCount(Number(event.target.value));
                                }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                            <div className="mtop15p">
                                <TextBox name="StampDutyGovernmentFee" label="Stamp Duty (Government Fee)" 
                                    placeholder="Enter Stamp Duty (Government Fee) in Rupees" />
                                <div align="right" className="mtop10p" style={{ color:'#888' }}>
                                    <i>(This varies by state and rental value and is paid to the government)</i>
                                </div>
                            </div>
                            
                    </Col>
                </Row>
                </Form>
                {stampDutyFormData?.totalPayable && (<div>
                    <div className="mtop15p"><hr/></div>
                <Row>
                    <Col md={12}>
                        <div align="center" className="mtop15p"><h3><b>Cost Breakdown Analysis</b></h3></div>
                        <div align="center" style={{ padding:'15px'}}>
                            <table>
                            <tbody>
                                <tr>
                                    <td>Total Aadhaar eSigning Fee</td>
                                    <td align="center" style={{ width:'50px' }}><b>:</b></td>
                                    <td style={{ paddingRight:'15px' }}>₹. {stampDutyFormData.aadhaarSignCostInTotal}</td>
                                </tr>
                                <tr>
                                    <td>Total Non-Aadhaar eSigning Fee</td>
                                    <td align="center" style={{ width:'50px' }}><b>:</b></td>
                                    <td style={{ paddingRight:'15px' }}>₹. {stampDutyFormData.nonAadhaarSignCostInTotal}</td>
                                </tr>
                                <tr style={{ borderTop:'1px dashed #777', borderBottom:'1px dashed #777' }}>
                                    <td><div style={{ paddingTop:'5px', paddingBottom:'5px' }}><b>Total eSigning Fee</b></div></td>
                                    <td align="center" style={{ width:'50px' }}>
                                        <div style={{ paddingTop:'5px', paddingBottom:'5px' }}><b>:</b></div>
                                    </td>
                                    <td style={{ paddingRight:'15px' }}>
                                        <div style={{ paddingTop:'5px', paddingBottom:'5px' }}>₹. {stampDutyFormData.eSignCostInTotal}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stamp Papers Fee</td>
                                    <td align="center" style={{ width:'50px' }}><b>:</b></td>
                                    <td style={{ paddingRight:'15px' }}>₹. {stampDutyFormData.stampPaperCostInTotal}</td>
                                </tr>
                                <tr>
                                    <td>Stamp Order Fee</td>
                                    <td align="center" style={{ width:'50px' }}><b>:</b></td>
                                    <td style={{ paddingRight:'15px' }}>₹. {stampDutyFormData.stampOrderFee}</td>
                                </tr>
                                <tr>
                                    <td>Stamp Duty Fee</td>
                                    <td align="center" style={{ width:'50px' }}><b>:</b></td>
                                    <td style={{ paddingRight:'15px' }}>₹. {stampDutyFormData.stampDutyGovernmentFee}</td>
                                </tr>
                                <tr style={{ borderTop:'1px dashed #000', borderBottom:'1px dashed #000' }}>
                                    <td><div style={{ paddingTop:'5px', paddingBottom:'5px' }}><b>Total Payable Cost</b></div></td>
                                    <td align="center" style={{ width:'50px' }}>
                                        <div style={{ paddingTop:'5px', paddingBottom:'5px' }}><b>:</b></div>
                                    </td>
                                    <td style={{ paddingRight:'15px' }}>
                                        <div style={{ paddingTop:'5px', paddingBottom:'5px' }}>₹. {stampDutyFormData.totalPayable}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div align="center" style={{ color:'#747070' }}>
                            <table>
                                <tbody>
                                    <tr><td>* Minimum eSigning charge is ₹. 100</td></tr>
                                    <tr><td>* Stamp Duty Fee varies from state to state</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
                <div className="mtop15p"><hr/></div>
                </div>)}
            </Col>
            <Col md={6}></Col>
        </Row>
      </ContainerFluid>
    </div>
  );
};

export default StampDutyCalculator;
