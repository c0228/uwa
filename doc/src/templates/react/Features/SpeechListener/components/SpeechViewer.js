import React, { useState } from 'react';
import { Button, Icon, SpeechListener } from 'e-ui-react';
import './SpeechViewer.css';

const SpeechViewer = () =>{
    const [ speechState, setSpeechState ] = useState();
    const [ speechText, setSpeechText ] = useState();
   
    return (<>
           <div>
               <Button type="primary" 
                   label={<><span className="speechLabel">Start</span><Icon type="FontAwesome" name="fa fa-play"/></>} 
                   onClick={()=>{ 
                       SpeechListener('init', (variable)=>{ setSpeechText(variable);}) 
                       setSpeechState(<><Icon type="FontAwesome" name="fa fa-play"/> Recording Initiated</>);
                   }} /> 
               <Button type="warning" 
                   label={<><span className="speechLabel">Pause</span><Icon type="FontAwesome" name="fa fa-pause"/></>}  
                   onClick={()=>SpeechListener('pause')} />
               <Button type="success" 
                   label={<><span className="speechLabel">Resume</span><Icon type="FontAwesome" name="fa fa-play"/></>} 
                   onClick={()=>SpeechListener('resume')} />
               <Button type="danger" 
                   label={<><span className="speechLabel">Stop</span><Icon type="FontAwesome" name="fa fa-stop"/></>} 
                   onClick={()=>SpeechListener('stop')} />
               <div align="right" className="speechLabel"><b>{speechState}</b></div>
           </div>
           <div className="speechViewer"><b>{speechText}</b></div>
           </>);
};

export default SpeechViewer;