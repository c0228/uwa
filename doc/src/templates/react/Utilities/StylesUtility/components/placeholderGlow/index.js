import React from "react";
import { Card, Row, Col, Highlight } from "e-ui-react";

const PlaceholderGlow = ()=>{
 return (<>
 <Card>
    <div style={{ padding:'15px' }}>
        <div>
            <h4 className="bs-header" style={{ borderBottom:'1px solid #ccc', paddingBottom:'6px', marginBottom:'5px' }}>
                <b>Placeholder Glow</b>
            </h4>
        </div>
        <Row>
            <Col xl={12} xxl={12}>
<Highlight lang="html" content={`<p className="card-text placeholder-glow">
 <span className="placeholder col-7"></span>
 <span className="placeholder col-4"></span>
 <span className="placeholder col-6"></span>
 <span className="placeholder col-8"></span>
</p>`}/>
                <div className="mbot15p"><b>Output:</b></div>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                </p>  
            </Col>
        </Row>
    </div>
 </Card>
 
 </>);
};

export default PlaceholderGlow;