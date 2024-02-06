import React from 'react';
import annyang from 'annyang';

export const SpeechListener = (mode, func, processingTimeout = 1000) =>{
    let timeoutId = null;
    if(mode==='init'){  
    annyang.addCommands({
        '*variable': function(variable) {
            clearTimeout(timeoutId); // Clear any previous timeout
            timeoutId = setTimeout(() => {
                func(variable);
            }, processingTimeout);
        }
    });
   // annyang.setLanguage('en-US');
    annyang.start({ autoRestart: true, continuous: false });
     return 'Speech Initialized';
    }
    if(mode==='pause'){  
        clearTimeout(timeoutId); 
        annyang.pause(); 
        return 'Speech Paused';
    }
    if(mode==='resume'){ 
         annyang.resume(); 
        return 'Speech Resumed';
    }
    if(mode==='stop'){  
        clearTimeout(timeoutId); 
        annyang.abort(); 
        return 'Speech Stopped';
    }

};


 