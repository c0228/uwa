import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors  } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import Section01 from "./components/Section01/index.js";
import Section02 from "./components/Section02/index.js";

const TextBoxNotes = () => {

  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>TextBox:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
      </Card>
    </>);
  };

  const Note2 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>TextBox with Form:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1', '2']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['12T27']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote2 /></Card>
      </Card>
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const TextBoxPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="TextBox" componentAttributesTable={ComponentAttributesTable} />
    <div className="mtop15p">
      <ContainerFluid>
        <Section01 />
        <Row>
          <Col md={6}>
            <div><h4><b>2. Basic Component Usage</b></h4></div>
            <div className="mtop15p"><h5><b>2.1 Import TextBox</b></h5></div>
            <div>
              <Highlight content={`import TextBox from "e-ui-react";`} lang="javascript" />
            </div>
          </Col>
          <Col md={6}>
              {/**  */}
              <div className="mtop15p"><h4><b>3. Available Component Properties</b></h4></div>
              <div class="table-responsive">
                <table class="table">
                    <thead><tr><th>Property</th><th>Description</th></tr></thead>
                    <tbody>
                      <tr>
                        <td><code><b>id</b></code></td>
                        <td>HTML input identifier</td>
                      </tr>
                      <tr>
                        <td><code><b>name</b></code></td>
                        <td>Input name; also used for form registration</td>
                      </tr>
                      <tr>
                        <td><code><b>label</b></code></td>
                        <td>Input label</td>
                      </tr>
                      <tr>
                        <td><code><b>width</b></code></td>
                        <td>Input width</td>
                      </tr>
                      <tr>
                        <td><code><b>placeholder</b></code></td>
                        <td>Placeholder text</td>
                      </tr>
                      <tr>
                        <td><code><b>value</b></code></td>
                        <td>Initial or externally controlled value</td>
                      </tr>
                      <tr>
                        <td><code><b>validation</b></code></td>
                        <td>Validation configuration</td>
                      </tr>
                      <tr>
                        <td><code><b>disabled</b></code></td>
                        <td>Enables or disables the input</td>
                      </tr>
                      <tr>
                        <td><code><b>onValidate</b></code></td>
                        <td>Custom validation callback</td>
                      </tr>
                      <tr>
                        <td><code><b>onChange</b></code></td>
                        <td>Receives the final validation result</td>
                      </tr>
                    </tbody>
                </table>
              </div>
              <div><b>Example:</b></div>
              <div className="mtop5p">
                <Highlight content={`<TextBox
    id="username"
    name="username"
    label="Username"
    width="100%"
    placeholder="Enter Username"
    value=""
    disabled={false}
    validation={{}}
    onValidate={(result) => {
        // Custom validation
    }}
    onChange={(result) => {
        // Receive final validation result
    }}
/>`} lang="javascript" />
              </div>
          </Col>
        </Row>
      </ContainerFluid>
    </div>
    <ContainerFluid>
      <Row>
        <Col><TextBoxNotes /></Col>
      </Row>
    </ContainerFluid>
  </>);
};

