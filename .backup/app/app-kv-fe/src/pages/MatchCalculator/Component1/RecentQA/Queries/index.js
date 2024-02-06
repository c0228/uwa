import React from "react";
import { ContainerFluid, Row, Col, Avatar, Badge } from "e-ui-react";

const Queries = ()=>{
return(<>
    <ContainerFluid>
        <Row>
            <Col xl={1} xxl={1}>
            <Avatar size={50} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
            </Col>
            <Col xl={11} xxl={11}>
                <h4 className="bs-header"><b>How do I make the most out of a MS in Business Analytics?</b></h4>
                <div style={{ paddingBottom: '8px'}} >
                    <Badge type="danger" label="Question" size="12" style={{ paddingRight:'5px' }} />
                    <Badge type="dark" label="Report" size="12" />
                </div>
            <div style={{ color:'#555'}}>I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to 
                a person in this situation so that he can make the most out of his time out from work and get the 
                maximum benefit from such a program?</div>
            </Col>
        </Row>
    </ContainerFluid>

</>)
};
export default Queries;
