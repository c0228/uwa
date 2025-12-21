import React from "react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Welcome from './components/Welcome/index.js';
import HowItWorks from "./components/HowItWorks/index.js";

const Home = () =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
  <Welcome />
  <HowItWorks />
  <Footer />
 </div>);
};

export default Home;