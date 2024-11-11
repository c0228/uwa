import React, { useState, useEffect } from "react";
import './index.css';

export const Carousel = ({ id, data, backgroundColor}) =>{
 const [slideIndex, setSlideIndex ] = useState(0);
 const [indicators, setIndicators] = useState();
 const [carouselData, setCarouselData] = useState();

 const increment = ()=>{
  if(slideIndex>=(data.length-1)){ setSlideIndex(0); } 
  else { setSlideIndex(slideIndex+1); }
 };
   
 const decrement = ()=>{
  if(slideIndex===0){ setSlideIndex(data.length-1); } 
  else { setSlideIndex(slideIndex-1); }
 }
  
 const buildCarousel = () =>{
    let buildIndicators = [];
    let buildCarouselData = [];
    {data?.map((d,i)=>{
        /* Carousel indicators */
        buildIndicators.push(<button key={i} type="button" data-bs-target={"#"+id} data-bs-slide-to={i} 
            className={i===slideIndex?"active":""}></button>);

        /* Carousel Data  */
        buildCarouselData.push(<div  key={i} className={i===slideIndex?"carousel-item active":"carousel-item  carousel-item-next"}>
            <img src={d?.img?.src} alt={d?.img?.alt} className="d-block w-100" style={d?.img?.style} />
            <div className="text-overlay">{d?.content}</div>
          </div>);
    })};
    setIndicators(buildIndicators);
    setCarouselData(buildCarouselData);
 };
 


 useEffect(()=>{
  buildCarousel();
 },[slideIndex]);

 return (<div id={id} className="carousel slide" data-bs-ride="carousel" 
    style={{ backgroundColor: backgroundColor || '#000' }}>
        <div className="carousel-indicators">{indicators}</div>
        <div className="carousel-inner">{carouselData}</div>
        <button className="carousel-control-prev" type="button" data-bs-target={"#"+id} data-bs-slide="prev" onClick={decrement}>
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={"#"+id} data-bs-slide="next" onClick={increment}>
        <span className="carousel-control-next-icon"></span>
        </button>
  </div>);
};

