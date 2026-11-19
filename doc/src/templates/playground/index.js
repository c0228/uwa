import React, { useState } from 'react';
import { ContainerFluid, Row, Col, Playground, Select } from 'e-ui-react';

const CodePlayground = () =>{
 const [lang, setLang] = useState('HTML');
 const LangSelector = ()=>{
    return (<>
        <Select
         value="Javascript"
         placeholder="Select Language"
         options={[{ id: 'html', label: 'HTML', value: 'HTML' },
         { id: 'javascript', label: 'Javascript', value: 'Javascript' }]}
         width="130"
         fontSize="12"
         onChange={(event) => {
            setLang(event.target.value);
         }}
      />
    </>);
 };
 return (<>
   <Playground title={<LangSelector />} lang={lang} mode="split" height={window.innerHeight*0.924} editorWidth="60%" previewWidth="40%" 
    renderPreview={(code) => {
        if(lang==='Javascript') {
           try {
            const logs = [];
            const customConsole = {
                log: (...args) => {
                    logs.push(args.map(String).join(' '));
                }
            };
            const execute = new Function(
                'console',
                code
            );
            execute(customConsole);
            return (
                <div style={{ padding: 15 }}>
                    {logs.map((log, index) => (
                        <div key={index}>{log}</div>
                    ))}
                </div>
            );
        } catch (error) {
            return <div>{error.message}</div>;
        } 
        }
    }}
   />
 </>);
};

export default CodePlayground;