import React from 'react';

export const Button = (props) => {
    let size = (props.size===undefined)?12:props.size;
    return (<button type="button"
    className={"btn btn-"+props.type+" "} 
    style={{ margin:'0.5px', fontSize:size+'px', letterSpacing: '0.6px' }} {...props}>{props.children}</button>);
};