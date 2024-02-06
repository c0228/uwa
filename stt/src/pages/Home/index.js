import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Home = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 Home Page</>);
};

export default Home;