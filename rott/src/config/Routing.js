import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import AboutPlatform from "@Pages/AboutPlatform/index.js";
import CaseStudies from "@Pages/CaseStudies/index.js";
import CookiePolicy from "@Pages/Rules/CookiePolicy/index.js";
import LegalCompliance from "@Pages/Rules/LegalCompliance/index.js";
import PrivacyPolicy from "@Pages/Rules/PrivacyPolicy/index.js";
import TermsOfUse from "@Pages/Rules/TermsOfUse/index.js";
import ContactUs from "@Pages/ContactUs/index.js";

import RAForm from "@Pages/Forms/RAForm/index.js";

import Itenary from "@Pages/Itenary/index.js";
import Menu from "@Pages/Menu/index.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/home" element={<Home/>} />
         <Route exact path="/about-platform" element={<AboutPlatform/>} />
         <Route exact path="/case-studies" element={<CaseStudies/>} />
         <Route exact path="/cookie-policy" element={<CookiePolicy/>} />
         <Route exact path="/legal-and-compliance" element={<LegalCompliance/>} />
         <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />
         <Route exact path="/terms-of-use" element={<TermsOfUse/>} />
         <Route exact path="/contact-us" element={<ContactUs/>} />

         <Route exact path="/rental-agreement-form" element={<RAForm/>} />


         <Route exact path="/itenary" element={<Itenary/>} />
         <Route exact path="/menu" element={<Menu />} />
       </Routes>
    </BrowserRouter>);
   };