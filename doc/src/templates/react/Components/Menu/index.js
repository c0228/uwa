import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import {
        SampleNote1, SampleNote2, SampleNote3, SampleNote4, SampleNote5, SampleNote6, SampleNote7,
        SampleNote8, SampleNote9, SampleNote10, SampleNote11, SampleNote12
} from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const MenuNotes = () => {
        console.log(SampleCodeJS.toString());
        const Note1 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Simple TabMenu with its Content:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T12']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote1 />
                        </Card>
                </>);
        };

        const Note2 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>TabMenu with justify and its Content:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['18T20']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote2 />
                        </Card>
                </>);
        };

        const Note3 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Simple PillMenu with its Content:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['26T28']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote3 />
                        </Card>
                </>);
        };

        const Note4 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>PillMenu with justify and its Content:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['34T36']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote4 />
                        </Card>
                </>);
        };


        const Note5 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>PillMenu with Vertical and its Content:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['42T44']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote5 />
                        </Card>
                </>);
        };

        const Note6 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Horizontal NavMenu with left Alignment:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['50T57']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote6 />
                        </Card>
                </>);
        };

        const Note7 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Horizontal NavMenu with Center Alignment:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['63T66']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote7 />
                        </Card>
                </>);
        };

        const Note8 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Horizontal NavMenu with Right Alignment:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['72T75']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote8 />
                        </Card>
                </>);
        };

        const Note9 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Vertical NavMenu with Left Alignment:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['82T84']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote9 />
                        </Card>
                </>);
        };

        const Note10 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Vertical NavMenu with Center Alignment:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['90T93']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote10 />
                        </Card>
                </>);
        };

        const Note11 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Vertical NavMenu with Right Alignment:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['99T102']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote11 />
                        </Card>
                </>);
        };

        const Note12 = () => {
                return (<>
                        <div className="mtop10p mbot10p"><b>Vertical NavMenu with Right Alignment:</b></div>
                        <Card padding={15} backgroundColor={Colors.grey}>
                                <div className="mbot10p"><b>Sample Code:</b></div>
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['108T111']}  />
                                <div className="mtop10p mbot10p"><b>Output:</b></div>
                                <SampleNote12 />
                        </Card>
                </>);
        };

        return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />, <Note5 />, <Note6 />,
        <Note7 />, <Note8 />, <Note9 />, <Note10 />, <Note11 />, <Note12 />]} />);
};

export const MenuPage = () => {

        useEffect(() => {
                window.scrollTo(0, 0);
        }, []);

        return (<>
                <DocumentHeader title="Menu" componentAttributesTable={ComponentAttributesTable} />
                <ContainerFluid>
                 <Row>
                  <Col><MenuNotes /></Col>
                 </Row>
                </ContainerFluid>
        </>);
};