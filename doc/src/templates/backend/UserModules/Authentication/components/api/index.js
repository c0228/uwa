import React from "react";
import { Accordian, ContainerFluid, Row, Col, Badge, Card, Highlight, FilledHeader } from "e-ui-react";
import { default as Htaccess  } from '!!raw-loader!@Nexus/.htaccess';
import { default as Controller  } from '!!raw-loader!@Nexus/src/controllers/module.user.account.info.php';
import { default as Repo  } from '!!raw-loader!@Nexus/src/repo/data.user.account.info.php';
import { ApiTemplate }  from "@DocUtils/ApiTemplate.js"; 

const ApiDesign = ()=>{

const RegisterApi = ()=>{
return (<div className="mbot15p">
<ApiTemplate data={{ id:"userRegister", url:"user/register", method:"POST", title:"Create a New User Account", details:(<>
<Row>
<Col xl={6} xxl={6}>
<div><b>Request Body:</b></div>
<Highlight lang="json" style={{ height:'300px' }} content={`{
 "surName":"",
 "name":"",
 "dob":"",
 "gender":"",
 "email":"",
 "emailVal":"",
 "accPwd":"",
 "mcountrycode":"",
 "mobile":"",
 "mobileVal":"",
 "dp":"",
 "userTz":"",
 "accactive":"",
 "userRole":""
}`} />
</Col>
<Col xl={6} xxl={6}>
<div><b>API Response:</b></div>
<Highlight lang="json" style={{ height:'300px' }} content={`{
 "status":"User account Created Successfully"
}`} />
</Col>
</Row>
</>)}} />  
</div>);
};

const LoginApi = ()=>{
    return (<div className="mbot15p">
    <ApiTemplate data={{ id:"userLogin", url:"user/login", method:"POST", title:"Login User Account",
    details:(<>
        <Row>
        <Col xl={6} xxl={6}>
        <div><b>Request Body:</b></div>
        <Highlight lang="json" style={{ height:'300px' }} content={`{
         "email":"",
         "accPwd":""
        }`} />
        </Col>
        <Col xl={6} xxl={6}>
        <div><b>API Response:</b></div>
        <Highlight lang="json" style={{ height:'300px' }} content={`{
         "status":""
        }`} />
        </Col>
        </Row>
        </>)
}} />  
    </div>);
};

const ValidateEmailApi = ()=>{
    return (<div className="mbot15p">
    <ApiTemplate data={{ id:"validateEmail", url:"user/validate/email", method:"GET", title:"Validate User Email Address",
    details:(<>
        <Row>
        <Col xl={6} xxl={6}>
        <div><b>Request Body:</b></div>
        <Highlight lang="json" style={{ height:'300px' }} content={`{
         "email":""
        }`} />
        </Col>
        <Col xl={6} xxl={6}>
        <div><b>API Response:</b></div>
        <Highlight lang="json" style={{ height:'300px' }} content={`{
         "status":""
        }`} />
        </Col>
        </Row>
        </>)
}} />  
    </div>);
};

const UpdateUserDetailsApi = ()=>{
    return (<div className="mbot15p">
    <ApiTemplate data={{ id:"validateEmail", url:"user/details/update", method:"POST", title:"Update User Details",
    details:(<>
        <Row>
        <Col xl={6} xxl={6}>
        <div><b>Request Body:</b></div>
        <Highlight lang="json" style={{ height:'300px' }} content={`{
 "userId":"",
 "surName":"",
 "name":"",
 "dob":"",
 "gender":"",
 "email":"",
 "emailVal":"",
 "accPwd":"",
 "mcountrycode":"",
 "mobile":"",
 "mobileVal":"",
 "dp":"",
 "userTz":"",
 "accactive":"",
 "userRole":""
}`} />
        </Col>
        <Col xl={6} xxl={6}>
        <div><b>API Response:</b></div>
        <Highlight lang="json" style={{ height:'300px' }} content={`{
         "status":""
        }`} />
        </Col>
        </Row>
        </>)
}} />  
    </div>);
};

const ResetPwdLink = ()=>{
    return (<div className="mbot15p">
    <ApiTemplate data={{ id:"resetPwdLink", url:"user/reset/password/link", method:"POST", title:"Reset Password Link",
    details:(<>
        <Row>
        <Col xl={6} xxl={6}>
        <div><b>Request Body:</b></div>
        <Highlight lang="json" style={{ height:'300px' }} content={`{
 "to":""
}`} />
        </Col>
        <Col xl={6} xxl={6}>
        <div><b>API Response:</b></div>
        <Highlight lang="json" style={{ height:'300px' }} content={`{
         "status":""
        }`} />
        </Col>
        </Row>
        </>)
}} />  
    </div>);
};

 const PHPCode = ()=>{
    return (<>
    <Row className="mtop15p">
         <Col xxl={12}>
             <FilledHeader backgroundColor="#0d6efd" color="#fff" title={"Rest API Design"} />
         </Col>
     </Row>
     <Row className="mtop15p">
         <Col xxl={12} xl={12}>
             <div className="mbot15p">
                <b>Configuration File</b> <Badge type="warning" label=".htaccess" size="12" />
             </div>
             <Highlight lang="apache" content={Htaccess} lines={['0','3T7']} />
         </Col>
     </Row>
     <Row className="mtop15p">
         <Col xxl={12} xl={12}>
             <div className="mbot15p">
                <b>Controller Layer</b> <Badge type="warning" label="src/controllers/module.user.account.php" size="12" />
             </div>
             <Highlight lang="php" content={Controller} />     
         </Col>
         </Row>
     <Row className="mtop15p">
         <Col xxl={12} xl={12}>
            <div className="mbot15p">
                <b>Data layer</b> <Badge type="warning" label="src/repo/data.module.user.account.php" size="12" />
            </div>
            <Highlight lang="php" content={Repo} /> 
         </Col>
     </Row>
    </>);
   };

 return (<ContainerFluid>
    <Row>
        <Col xxl={12} xl={12}>
          <RegisterApi />
          <LoginApi />
          <ValidateEmailApi />
          <UpdateUserDetailsApi />
          <ResetPwdLink />
          <PHPCode />
        </Col>
    </Row>
 </ContainerFluid>);
};

export default ApiDesign;