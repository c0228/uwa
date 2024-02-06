import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "e-ui-react";
import './index.css';

const Quotations = [
  {
   "title":"Design is not just what it looks like and<br/> feels like. Design is how it works",
   "by":"Steve Jobs"
  },
  {
    "title":"Simplicity is the ultimate sophistication",
    "by":"Leonardo da Vinci"
  },
  {
    "title":"Design is intelligence made visible",
    "by":"Alina Wheeler"
  },
  {
    "title":"Good design is making something intelligible and memorable. Great design is making something memorable and meaningful",
    "by":"Dieter Rams"
  },
  {
    "title":"Design adds value faster than it adds costs",
    "by":"Joel Spolsky"
  },
  {
    "title":"The details are not the details. They make the design",
    "by":"Charles Eames"
  },
  {
    "title":"Design is the intermediary between information and understanding",
    "by":"Hans Hofmann"
  },
  {
    "title":"Design is where science and art break even",
    "by":"Robin Mathew"
  },
  {
    "title":"The best design is the one you don't notice",
    "by":"Dana Chisnell"
  },
  {
    "title":"Design creates culture. Culture shapes values. Values determine the future",
    "by":"Robert L. Peters"
  }
];

const quotationIndex = Math.floor(Math.random() * (Quotations.length-1)) + 1;

const Welcome = ()=>{
 const navigate = useNavigate();
 const [showQuotation, setQuotation] = useState(false);
 const [progress, setProgress] = useState(0);
 useEffect(() => {
  const interval = setInterval(() => {
    if(progress < 100) { 
      setProgress((prevProgress) => prevProgress + 1); 
      if(progress === 20 || progress===80){
        setQuotation(!showQuotation);
      }
    } else { clearInterval(interval); 
       setTimeout(()=>{
          navigate('/Component/AccordianList');
       }, 120); 
    }
   }, 60); // Change the interval time as needed
  
   return () => clearInterval(interval);
  }, [progress]);

  return (<>
   <div class="splash-container">
    <div class="splash-content">
        <div style={{ color:'#0d6efd' }}>
          <div style={{ fontSize:'22px' }}><b>THE APP DESIGN HANDBOOK</b></div>
          <div style={{ fontSize:'18px' }}>
            <b></b>
          </div>
        </div>
        <div className="mtop15p">
          <ProgressBar type="primary" progress={progress} height="3" value="" /> 
          <div className="mtop15p"><b>Loading... {progress}%</b></div>
        </div>
        <div align="left" className={(showQuotation)?"fade-2s show":"fade-2s"} 
            style={{ marginTop:'25px', color:'#777', fontSize:'16px' }}>
          <blockquote>
            <i>"  {Quotations[quotationIndex]?.title} "</i><br/>
            <div align="right" style={{ marginTop:'8px', fontWeight:'400', color:'#555' }}>- A Quotation from {Quotations[quotationIndex]?.by}</div>
          </blockquote>
        </div>
    </div>
   </div>  
  </>);
};

export default Welcome;