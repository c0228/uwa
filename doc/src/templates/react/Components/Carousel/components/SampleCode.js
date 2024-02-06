import React from "react";
import { Carousel, Card, Colors } from 'e-ui-react';
import './SampleCode.css';

export const SampleNote1 = () =>{
 
 const Component1 = ()=>{
   return (<div className="section1Component">
    <h4 className="bs-header">Section #1</h4>
    <div>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
    molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
    viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </div>
   </div>);
 };

 const Component2 = ()=>{
  return (<div className="section2Component">
    <h4 className="bs-header">Section #2</h4>
    <div>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
    molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
    viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </div>
  </div>);
 };

 const Component3 = ()=>{
  return (<div className="section3Component">
    <h4 className="bs-header">Section #3</h4>
    <div>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
    molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
    viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
   </div>
  </div>);
 };

 let data = [<>
      <img src="https://www.w3schools.com/bootstrap/la.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="bs-header">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </>,
    <img src="https://www.w3schools.com/bootstrap/chicago.jpg" class="d-block w-100" alt="..." />,
    <img src="https://www.w3schools.com/bootstrap/ny.jpg" class="d-block w-100" alt="..." />];
 
 return (<>
 <Carousel data={data} />
 </>);

};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;
