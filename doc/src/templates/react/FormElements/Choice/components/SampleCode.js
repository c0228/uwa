import React, { useState, useEffect } from "react";
import { Choice } from 'e-ui-react';
import { ContainerFluid, Row, Col, Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
    <ContainerFluid>
        <Row>
            <Col xl={4}>
                <Choice type="checkbox" id="numbers" name="numbers" label="Switch One" 
                    value={[{ id:1, label:"One", value:"1"},
                            { id:2, label:"Two", value:"2" },
                            { id:3, label:"Three", value:"3" }]} 
                    disabled={false} />
            </Col>
            <Col xl={4}>
                <Choice type="radio" id="numbers" name="numbers" label="Radio One" 
                    value={[{ id:1, label:"One", value:"1"},
                            { id:2, label:"Two", value:"2" },
                            { id:3, label:"Three", value:"3" }]} 
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
                <Choice type="checkbox" id="numbers1" name="numbers1" label="Switch One" 
                    value={[{ id:1, label:"One", value:"1"},
                            { id:2, label:"Two", value:"2" },
                            { id:3, label:"Three", value:"3" }]} 
                    disabled={false} 
                    validation={{
                        required:{
                            value: true,
                            errorMessage : ""
                        },
                        minSelect:{
                            value: 2,
                            errorMessage: ""
                        },
                        maxSelect:{
                            value: 5,
                            errorMessage: ""
                        }
                    }} />
            </Col>
            <Col xl={4}>
                <Choice type="radio" id="numbers2" name="numbers2" label="Radio One" 
                    value={[{ id:1, label:"One", value:"1"},
                            { id:2, label:"Two", value:"2" },
                            { id:3, label:"Three", value:"3" }]} 
                    disabled={false} />
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