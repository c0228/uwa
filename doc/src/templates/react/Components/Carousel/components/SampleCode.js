import React from "react";
import { Carousel } from 'e-ui-react';
import './SampleCode.css';

export const SampleNote1 = () =>{
 
 return (<>
 <Carousel 
    id="listing" 
    data={[{
          img: { src:'https://preview.colorlib.com/theme/bootstrap/carousel-01/images/slider-1.jpg', alt:'Los Angeles' },
          content:(<div style={{ color:'#fff' }}>
                      <h2>Slide 1</h2>
                      <p>This is the One slide.</p>
                  </div>)
     },{
         img:{ src:'https://www.josephfiler.com/images/xl/Arizona-Desert-Mountains-2518-Edit.jpg', alt:'Chicago' },
         content:(<div style={{ color:'#fff' }}>
                    <h2>Slide 2</h2>
                    <p>This is the Two slide.</p>
                  </div>)
     },{
         img:{ src:'https://wallpapers.com/images/hd/beautiful-ocean-pictures-1920-x-1200-6r2ljotdu3o25cio.jpg', alt:'New York' },
         content:(<div style={{ color:'#fff' }}>
                    <h2>Slide 3</h2>
                    <p>This is the Third slide.</p>
                  </div>)
     }]} />
 </>);

};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;
