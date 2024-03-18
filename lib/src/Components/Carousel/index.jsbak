import React, { useState, useEffect } from "react";
// import { HtmlStringToReactJSXConverter } from "@LibCodeEditorsViewers/Highlight/index.js";
// import './index.css';

export const Carousel = ({ data })=>{
 const [slideIndex, setSlideIndex ] = useState(0);

 const increment = ()=>{
  if(slideIndex>=(data.length-1)){ setSlideIndex(0); } 
  else { setSlideIndex(slideIndex+1); }
 };

 const decrement = ()=>{
  if(slideIndex<0){ setSlideIndex(data.length-1); } 
  else { setSlideIndex(slideIndex-1); }
 }

 const [btnContent, setBtnContent] = useState([]);
 const [carouselContent, setCarouselContent] = useState([]);

 useEffect(()=>{
    let bContent = [];
    let cContent = [];
    // carousel-item-start
    data?.map((d,i)=>{
        bContent.push(<button type="button" 
        data-bs-target="#carouselExampleIndicators" 
        data-bs-slide-to={i} className={(i===slideIndex)?"active":""} 
        aria-current={i===slideIndex?"true":""} 
        aria-label={"Slide "+i}></button>);
        cContent.push(<div id={"carouselExampleIndicators-"+i} key={i} className={(i===slideIndex)?
        'carousel-item active':'carousel-item carousel-item-next'}>
            {d}
        </div>);
    });
    setBtnContent(bContent);
    setCarouselContent(cContent);
 },[slideIndex]);


 return (<>
 <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{ backgroundColor:'black' }}>
  <div className="carousel-indicators">
   {btnContent}
  </div>
  <div className="carousel-inner">
    {carouselContent}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" 
   onClick={()=>decrement()}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" 
  onClick={()=>increment()}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 </>);
};