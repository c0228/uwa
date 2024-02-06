import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import IntroWallpaper from "./components/IntroWallpaper/index.js";
import IntroPara1 from "./components/IntroPara1/index.js";
import IntroPara2 from "./components/IntroPara2/index.js";
import './index.css';

const Home = ()=>{
 const TitleBar = ()=>{
    return (<div align="center" className="home-titlebar">
    <b>Welcome to the World's No.1 : Highly Secured, most trusted and Successful Brahmin Matrimonial Search Engine Platform</b>
    </div>);
 };

 return (<>
 {/*<Header menulinks={HeaderMenu} activeId="Home" />*/}
 <TitleBar />
 <IntroWallpaper />
 <IntroPara1 />
 <IntroPara2 />
 </>);
};

export default Home;