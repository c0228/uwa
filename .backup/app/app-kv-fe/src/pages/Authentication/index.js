import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Authentication = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Authentication" />
 Menu Page
 </>);
};

export default Authentication;