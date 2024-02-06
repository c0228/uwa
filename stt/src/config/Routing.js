import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import Home from "@Pages/Home/index.js";
import Menu from "@Pages/Menu/index.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Welcome/>} />
         <Route exact path="/home" element={<Home/>} />
         <Route exact path="/menu" element={<Menu />} />
       </Routes>
    </BrowserRouter>);
   };