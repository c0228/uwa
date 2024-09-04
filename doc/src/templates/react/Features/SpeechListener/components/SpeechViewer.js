import React, { useState } from 'react';
import { Button, Icon, SpeechListener } from 'e-ui-react';
import './SpeechViewer.css';

const SpeechViewer = () =>{
    const [ speechState, setSpeechState ] = useState();
    const [ speechText, setSpeechText ] = useState();
   
    return (<>
           <div>
               <Button type="primary" 
                   onClick={()=>{ 
                       SpeechListener('init', (variable)=>{ setSpeechText(variable);}) 
                       setSpeechState(<><Icon type="FontAwesome" name="fa fa-play"/> Recording Initiated</>);
                   }}>
                <span className="speechLabel">Start</span>
                <Icon type="FontAwesome" name="fa fa-play"/>
               </Button> 
               <Button type="warning" onClick={()=>SpeechListener('pause')}>
                <span className="speechLabel">Pause</span>
                <Icon type="FontAwesome" name="fa fa-pause"/>
               </Button>
               <Button type="success" onClick={()=>SpeechListener('resume')}>
                <span className="speechLabel">Resume</span>
                <Icon type="FontAwesome" name="fa fa-play"/>
               </Button>
               <Button type="danger" onClick={()=>SpeechListener('stop')}>
                <span className="speechLabel">Stop</span>
                <Icon type="FontAwesome" name="fa fa-stop"/>
               </Button>
               <div align="right" className="speechLabel"><b>{speechState}</b></div>
           </div>
           <div className="speechViewer"><b>{speechText}</b></div>
           </>);
};

export default SpeechViewer;