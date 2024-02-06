import React from "react";
import { ContainerFluid, Row, Col, Menu } from "e-ui-react";
import RecentQA from './RecentQA/index.js';
import AskQuestion from './AskQuestion/index.js';

const Component2 = ()=>{
 return (<>
    <ContainerFluid>
        <Row>
            <Col xl={8} xxl={8}>
            <Menu type="tab" list={[{ id:"RecentQuestions", label:"Recent Questions", component:<RecentQA /> },
             { id:"menu1", label:"Most Answered", component:(<div>Menu #1 Content</div>) },
             { id:"menu2", label:"No Answers", component:(<div>Menu #2 Content</div>) },
             { id:"menu3", label:"Most Visited", component:(<div>Menu #3 Content</div>) },]} />
            </Col>
            <Col xl={4} xxl={4}>
                <h4 className="bs-header" align= "center">Ask a Question</h4>
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default Component2;