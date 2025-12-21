import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const UserAuthentication = () =>{
 return (<div>
    <Header menulinks={HeaderMenu} activeId="Home" />
 </div>);
};

export default UserAuthentication;