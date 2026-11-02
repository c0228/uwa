import React from "react";
import { Row, Col, Card } from "e-ui-react";

const Introduction = () =>{
 return ( <Row>
           <Col md={6}>
             <div><h4><b>1. Introduction</b></h4></div>
             <div>
               <div>The TextBox component is a reusable React input component with built-in validation capabilities. It supports:</div>
               <Row>
                 <Col md={6}>
                     <ul>
                       {[(<div>Standard text input.</div>),
                         (<div>Client-side validation.</div>),
                         (<div>Custom validation using <code><b>onValidate</b></code>.</div>),
                         (<div>API-based asynchronous validation.</div>),
                         (<div>Success and error messages.</div>),
                         (<div>Dynamic validation results.</div>)]?.map((l,i)=><li key={i} className="mtop5p">{l}</li>)}
                     </ul>
                 </Col>
                 <Col md={6}>
                   <ul>
                       {[(<div>Form Context integration.</div>),
                         (<div>Automatic form registration.</div>),
                         (<div>Form submission and reset handling.</div>),
                         (<div>External value synchronization.</div>),
                         (<div>Debounced API validation.</div>),
                         (<div>Prevention of outdated API responses.</div>)]?.map((l,i)=><li key={i} className="mtop5p">{l}</li>)}
                   </ul>
                 </Col>
               </Row>
             </div>
           </Col>
           <Col md={6}>
             <Card padding={15} backgroundColor="#f5f5f5">
               <div className="mtop5p"><h4><b>Features-</b></h4></div>
               <div>The component is designed to handle common input scenarios such as:</div>
               <ul>
                 {["Username availability.", "Email validation.", "Mobile number validation.", 
                   "Password validation.", "Required fields.", "Minimum and maximum character limits.",
                   "Custom business rules.", "Server-side validation."]?.map((l,i)=><li key={i} className="mtop5p">{l}</li>)}
               </ul>
             </Card>
           </Col>
         </Row>);
};

export default Introduction;