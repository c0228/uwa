import React from "react";
import { Form, Email, Password, FormToReqBodyFormatter, UrlAsyncFetch, Colors  } from 'e-ui-react';

const Login = ({ setShowForgotPwd })=>{

 const Title = ()=>{
  return (<div>
        <div><h4 className="bs-header"><b>Login to your Account</b></h4></div>
        <div className="mtop15p mbot15p" style={{ color:'#777', fontWeight: 'bold' }}>
            Welcome back! Please login to your Account
        </div>
    </div>);
 };

 const LoginEmail = ()=>{
  console.log("process.env.NEXUS_URL", process.env.NEXUS_URL);
  return (<Email name="email" validation={{
    email:{
        formatCheck: true,
        isEmailExist:{ 
            // If Email Already Exists, Returns 'EXIST'
            // If Email not exists, Returns 'NOT_EXIST'
            url: process.env.NEXUS_URL + "user/validate/email",
            method:"POST",
            value:"EXIST", // When Value not matches - throws Error Message
            errorMessage:"This Email is not registered. Please create your Account."
        }
    }
  }} />);
 };

 const LoginPwd = ()=>{
  return (<div className="mtop15p">
    <Password type="password" label="Account Password" name="accPwd" 
        placeholder="Enter Account Password" 
        validation={{
        required:{
            value: true,
            errorMessage:"This is a Mandatory Field"
        },
        minLength:{
            value: 8,
            errorMessage:"Password should be greator than 8"
        },
        maxLength:{
            value: 16,
            errorMessage:"Message should be lessthan 16"
        },
        passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
        }} />
  </div>);
 };

 const ForgotPwd = ()=>{
  return (<div align="right" className="mtop15p userAuth-linkButton" style={{ color: Colors.primary }}>
   <span className="userAuth-linkButton-span" onClick={()=>setShowForgotPwd(true)}>Forgot Password?</span> 
  </div>);
 };

 return (<>
    <Title />  
    <Form name="loginForm" btnSubmit={{
        align: 'right',
        btnType:'primary',
        label:'Login to your Account',
        size: 11
    }} 
    onSubmit={(form)=>{
        // Error Validation check
        UrlAsyncFetch( process.env.NEXUS_URL + 'user/login', 
            'POST', FormToReqBodyFormatter(form.loginForm) );
    }}>
        <LoginEmail />     
        <LoginPwd />
        <ForgotPwd />
    </Form>
 </>);
};

export default Login;