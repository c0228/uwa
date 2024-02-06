import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, getSubRoute } from "e-ui-react";
import { DisplayCode } from "./viewCode/index.js";
import Login from "./login/index.js";
import Register from "./register/index.js";
import ForgotPwd from "./forgotPwd/index.js";
import ChangePwd from "./changePwd/index.js";
import UserProfile from "./userProfile/index.js";
import './index.css';

const AuthTemplate1 = ()=>{
 // const params = useLoaderData ();
 const show = getSubRoute(6);
 const userInfo = getSubRoute(7);
 const [showForgotPwd, setShowForgotPwd ] = useState(false);
 return (<>
   {show === 'Auth' && (<>
      <ContainerFluid style={{ marginTop:'8px' }}>
      <Row>
       <Col xxl={6} xl={6} style={{ backgroundColor:'#fff', paddingTop:'4%', paddingLeft:'12%', paddingRight:'12%' }}>
          <Register />
       </Col>
       <Col xxl={6} xl={6} style={{ backgroundColor:'#fff', paddingTop:'8%', paddingLeft:'12%', paddingRight:'12%' }}>
         {showForgotPwd?<ForgotPwd setShowForgotPwd={setShowForgotPwd} />:<Login setShowForgotPwd={setShowForgotPwd} />}  
       </Col> 
      </Row>
      </ContainerFluid>
      <DisplayCode />
      </>
   )}
   {show === 'ChangePwd' && (<>
      <ContainerFluid style={{ marginTop:'8px' }}>
      <Row>
       <Col xxl={12} xl={12} style={{ backgroundColor:'#fff' }}>
          <ChangePwd userInfo={userInfo} />
       </Col> 
      </Row>
      </ContainerFluid>
      <DisplayCode />
      </>
   )}
   {show === 'UserProfile' && (<>
      <ContainerFluid style={{ marginTop:'8px' }}>
      <Row>
       <Col xxl={12} xl={12} style={{ backgroundColor:'#fff', paddingTop:'4%', paddingLeft:'12%', paddingRight:'12%' }}>
          <UserProfile />
       </Col> 
      </Row>
      </ContainerFluid>
      <DisplayCode />
      </>
   )}
 </>);
};

export default AuthTemplate1;