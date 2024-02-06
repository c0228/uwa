import React from 'react';
import { ExcludeFromJSON } from 'e-ui-react';
import './css/font-awesome.min.css';

const FontAwesomeIcon = ( props ) =>{
 const styles =  Object.assign({ fontSize: props.size+'px', color: props.color }, props.style);
 const newProps = ExcludeFromJSON(props, ["className","style"]);
 const classes = (props?.className!==undefined)?' '+props?.className:'';
 return (<i className ={"fa "+props.name+classes} style={styles} {...newProps}></i>);
};

export const Icon = (props)=>{
 if(props?.type==='FontAwesome'){
    return <FontAwesomeIcon {...props} />
 } else {
    return (<></>);
 }
};