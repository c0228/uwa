import React, { useEffect } from 'react';
import { Accordian, Badge, Highlight, ContainerFluid, Row, Col } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import FontAwesomeIcons from './components/FontAwesomeIcons.js';
import './index.css';

export const IconPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="Icon" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid className="pad15p">
        <Row>
            <Col xxl={12} xl={12}>
                <Highlight content={'import { Icon } from "e-ui-react";'} lang="javascript"  />
                <Highlight content={'<Icon type="______________" name="__________" size={36} />'} lang="html"  />
            </Col>
            <Col xxl={12} xl={12}>
            <Accordian id="FontAwesomeIconList" 
                data={[{ id:"FontAwesomeIcons", 
                         headingClassName:"doc-icon-accordianHighlight", 
                         title: (<h4 className="bs-header"><b>
                            [ type=<code>"FontAwesome"</code>, 
                            <Badge type="primary" label="name" size="12" style={{ marginLeft:'5px', marginRight:'5px' }}/> 
                            is provided in bottom ]</b></h4>), 
                        component:(<FontAwesomeIcons />)
                    }]}
                defaultOpen="FontAwesomeIcons" 
            />
            </Col>
        </Row>
    </ContainerFluid>
    </>);
};