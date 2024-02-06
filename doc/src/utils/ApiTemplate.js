import React from "react";
import { Accordian, Badge } from "e-ui-react";

export const ApiTemplate = ({ data })=>{

    const AccordianHeader = ()=>{
        return (<div style={{ fontFamily: 'monospace' }}>
        <Badge type="primary" label={data?.method} size="12" />
        <span style={{ paddingLeft:'5px', fontSize:'15px' }}><b>{data?.url}</b></span>
        <span style={{  fontFamily: 'sans-serif', paddingLeft:'15px', fontSize:'12px' }}>{data?.title}</span>
      </div>);
    };

    return (<>
        <Accordian id={data?.id} highlight="primary"
    data={[{ id:"Item#1", 
            title: <AccordianHeader />, 
            component: data?.details }]} 
  />
    </>);
};
