import React from "react";
import { Carousel } from 'e-ui-react';
import './SampleCode.css';

export const SampleNote1 = () =>{
 
 return (<>
 <Carousel 
    id="listing" 
    items={[{ 
              image:'https://www.w3schools.com/bootstrap5/la.jpg', 
              alt:'Los Angeles', 
              caption:{ 
                  title:'Los Angeles', 
                  desc:'We had such a great time in LA!' 
              } 
            },
            { 
              image:'https://www.w3schools.com/bootstrap5/chicago.jpg', 
              alt:'Chicago', 
              caption:{ 
                title:'Chicago', 
                desc:'Thank you, Chicago!' 
              } 
            },
            { 
              image:'https://www.w3schools.com/bootstrap5/ny.jpg', 
              alt:'New York', 
              caption:{ 
                title:'New York', 
                desc:'We love the Big Apple!' 
              } 
            }]} />
 </>);

};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;
