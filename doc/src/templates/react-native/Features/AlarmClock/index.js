import React from "react";
import { ContainerFluid, Row, Col, Card, Highlight } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";

export const RNAlarmClock = () =>{
 const List = ({ data }) =>{
   return (<ul>
      {data?.map((d,i)=>{
          return (<li key={i} className="mtop5p">{d}</li>);
      })}
   </ul>);
 };
 return (<div>
   <DocumentHeader title="Alarm Clock" componentAttributesTable={{}} />
   <ContainerFluid>
      <Row>
         <Col md={8}>
            <Highlight content={`npm install @notifee/react-native`} lang="html" />
            <Highlight content={`npm install react-native-mmkv`} lang="html" />
            <Highlight content={`npm install react-native-background-fetch`} lang="html" />
            <Highlight content={`npm install @react-native-community/datetimepicker`} lang="html" />
         </Col>
         <Col md={4}>
            <div className="mtop15p">
               <Card padding={15} backgroundColor="#f5f5f5">
                  <div><h5><b>Component Requirements:</b></h5></div>
                  <List data={["Exact Alarm Trigger", "Works in background", "Survives reboot", "Sleep/Wakeup scheduling",
                     "Full-screen alarm", "Battery optimization handling", "Dynamic daily scheduling", "Persistent storage",
                     "Scalable architecture"]} />
                  <div><h5><b>Dependencies:</b></h5></div>
                  <List data={["Notifee", "React Native MMKV", "React Native Background Fetch"]} />
               </Card>
            </div>
         </Col>
      </Row>
   </ContainerFluid>
 </div>);
};
