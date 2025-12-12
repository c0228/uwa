import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors  } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";


const AutocompleteNotes = () => {

  const Note1 = () => {
    return (<div className="padTop15p">
      <div className="lh28p">
      <div><h4><b>Mode-1: Local Array Filtering</b></h4></div>
      <div>
        <div className="mtop15p"><h5><b>Description:</b></h5></div>
      <div>
        <ul>
          <li>Used when you have a <b>static array of strings or JSX elements.</b></li>
          <li>Autocomplete suggestions are filtered <b>from this array</b> based on the typed input.</li>
          <li>Highlighting works for typed text, excluding elements with <code><b>data-no-highlight</b></code>.</li>
        </ul>
      </div>
      <div><h5><b>Props Required:</b></h5></div>
      <div>
        <ul>
          <li><code><b>autoCompleteData:</b></code> an array of strings or JSX</li>
          <li><code><b>onChange:</b></code> optional, triggered when user types</li>
        </ul>
      </div>
      </div>
      <div><h5><b>Example:</b></h5></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6T18']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['21']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
      </Card>
      <div className="lh28p">
      <div className="mtop15p"><h5><b>Behavior:</b></h5></div>
      <div>
        <ul>
          <li>Typing <code><b>"N"</b></code> shows <code><b>"Nellutla"</b></code> and <code><b>"Nethula"</b></code> (with <code><b>N</b></code> highlighted in the second JSX item).</li>
          <li>Elements with <code><b>data-no-highlight</b></code> remain unhighlighted.</li>
        </ul>
      </div>
      </div>
      </div>
    </div>);
  };

  const Note2 = () => {
    return (<div className="padTop15p lh28p">
      <div><h4><b>Mode-2: Preloaded API Data</b></h4></div>
      <div className="mtop15p"><h5><b>Description:</b></h5></div>
      
      <div className="mtop10p mbot10p"><b>Autocomplete (From API):</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['26']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['28T38']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['42']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote2 /></Card>
      </Card>
    </div>);
  };

  const Note3 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Autocomplete with Form:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1', '2']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['48']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['50T64']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote3 /></Card>
      </Card>
    </>);
  };

  return (<>
    <div><hr/><Note1 /></div>
    <div><hr/><Note2 /></div>
    <div><hr/><Note3 /></div>
  </>);
};

export const AutocompletePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="Autocomplete" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col>
          <div className="mtop15p lh28p">
          <div><h3><b>Overview</b></h3></div>
          <div>The <code><b>Autocomplete</b></code> component provides a flexible input field with live suggestions. It supports:</div>
          <div>
            <ul>
              <li><b>Static/local data</b></li>
              <li><b>Preloaded API data</b></li>
              <li><b>Live API search</b></li>
              <li><b>JSX & string items</b> with selective highlighting (<code><b>data-no-highlight</b></code>)</li>
            </ul>
          </div>
          <div>It has <b>3 main modes</b> with sub-modes to handle different data sources and behaviors.</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mtop15p"><AutocompleteNotes /></div>
        </Col>
      </Row>
    </ContainerFluid>
  </>);
};

