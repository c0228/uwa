import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { ContainerFluid, Row, Col, Icon } from "e-ui-react";

export const LoginGoogleExample = () => {
  const [userDetails, setuserDetails] = useState({});
  const handleSuccess = (credentialResponse) => {
    console.log('Login Success');
    console.log(credentialResponse);
    const user = jwtDecode(
      credentialResponse.credential
    );
  
    console.log(user);
    setuserDetails({
      surName: user?.family_name,
      name: user?.given_name,
      profilePic: user?.picture,
      email: user?.email,
      emailVerified: user?.email_verified
    });
  };

  const handleError = () => {
    console.log('Login Failed');
  };
  return (<div>
    <ContainerFluid>
        <Row>
            <Col md={4}>
                {/* Google Login Button Code ::: START */}
                <GoogleOAuthProvider clientId="8953340790-lfj8gmvi5g2c3p0pmsatogu6e5c0mojj.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={handleError}
                    />
                </GoogleOAuthProvider>
                {/* Google Login Button Code ::: END */}
            </Col>
            <Col md={4}>
                {/* Details from Google received to App ::: START */}
                {Object.keys(userDetails)?.length>0 && (<div>
                    <div><img src={userDetails?.profilePic} style={{ width:'100px', height:'100px', borderRadius:'50%' }} /></div>
                    <div className="mtop5p"><b>Surname:</b> {userDetails?.surName}</div>
                    <div className="mtop5p"><b>Name:</b> {userDetails?.name}</div> 
                    <div className="mtop5p"><b>Email Address:</b> {userDetails?.email} 
                        <Icon type="FontAwesome" name={(userDetails?.emailVerified)?"fa-check-circle":"fa-times-circle"} 
                            size={14} style={{ marginLeft:'5px' }} color={(userDetails?.emailVerified)?"green":"red"} />
                    </div> 
                    </div>)}
                {/* Details from Google received to App ::: END */}
            </Col>
        </Row>
    </ContainerFluid>
    </div>);
}
