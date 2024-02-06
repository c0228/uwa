import React, { useEffect } from 'react';
import { SimpleHeader, Highlight } from 'e-ui-react';
import SpeechViewer from './components/SpeechViewer.js';
import { default as SpeechViewerJs } from '!!raw-loader!./components/SpeechViewer.js';
import { default as SpeechViewerStyles } from '!!raw-loader!./components/SpeechViewer.css';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const SpeechListenerPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="Speech Listener" componentAttributesTable={ComponentAttributesTable} />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 pad15p">
          <Highlight lang="javascript" content={SpeechViewerJs.toString()}  />
          <div align="center" className="mbot15p"><b>SpeechViewer.js</b></div>
          <Highlight lang="css" content={SpeechViewerStyles}  />
          <div align="center" className="mbot15p"><b>SpeechViewer.css</b></div>
        </div>
        <div className="col-md-4 pad15p">
          <SpeechViewer />
        </div>
      </div>
    </div>
  </>);

};