import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Component1 from './Component1/index.js';
import Component2 from './Component2/index.js';

const MatchCalculator = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="MatchCalculator" />
 <Component1 />
 <Component2 />
 </>);
};

export default MatchCalculator;