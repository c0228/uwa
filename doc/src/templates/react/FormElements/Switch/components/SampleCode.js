import React, { useState, useEffect } from "react";
import { Switch } from 'e-ui-react';
import { ContainerFluid, Row, Col, Form } from 'e-ui-react';

export const SampleNote1 = () =>{
return (<>
<ContainerFluid>
 <Row>
  <Col xl={4}>
    <Switch name="hobbies" label="Hobbies" type="checkbox"
        options={[
            { id: 1, value: "reading", label: "Reading" },
            { id: 2, value: "coding", label: "Coding" },
            { id: 3, value: "sports", label: "Sports" }
        ]}
        validation={{
            required: {
                value: true,
                errorMessage: "Please select at least one hobby"
            }
        }} />
  </Col>
  <Col xl={4}>
    <Switch type="radio" id="numbers" name="numbers" label="Radio One" 
        value="1"
        options={[{ id:1, label:"One", value:"1"},
                { id:2, label:"Two", value:"2" },
                { id:3, label:"Three", value:"3" }]} 
        validation={{
            required: {
                value: true,
                errorMessage: "Please select at least one hobby"
            }
        }}
        disabled={false} />
  </Col>
 </Row>
</ContainerFluid>
 </>); 
};

export const SampleNote2 = () =>{
return (<>
<Form name="testForm">
 <ContainerFluid>
  <Row>
   <Col xl={4}>
    <Switch name="skills" label="Skills" type="checkbox" layout="horizontal"
        options={[
            { id: 1, value: "react", label: "React" },
            { id: 2, value: "java", label: "Java" },
            { id: 3, value: "python", label: "Python" },
            { id: 4, value: "node", label: "Node.js" }
        ]}
        validation={{
            required: {
                value: true,
                errorMessage: "Please select your skills"
            },
            minSelect: {
                value: 2,
                errorMessage: "Select at least 2 skills"
            },
            maxSelect: {
                value: 3,
                errorMessage: "Select maximum 3 skills"
            }
        }} />
   </Col>
   <Col xl={4}>
        <Switch name="gender" label="Gender" type="radio"
            options={[
                { id: 1, value: "male", label: "Male" },
                { id: 2, value: "female", label: "Female" },
                { id: 3, value: "other", label: "Other" }
            ]}
            validation={{
                required: {
                    value: true,
                    errorMessage: "Please select your gender"
                }
            }} />
   </Col>
  </Row>
 </ContainerFluid>
</Form>
 </>);

};

export const SampleNote3 = () =>{
 return (<></>);
};
   

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;