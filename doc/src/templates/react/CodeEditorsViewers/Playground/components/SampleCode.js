import React from "react";
import { Playground } from 'e-ui-react';

const sampleCode = `
<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: Arial;padding: 20px; }
h2 { color: #673ab7; }
button { padding: 10px 20px;cursor: pointer; }
</style>
</head>
<body>
    <h2>Hello World!</h2>
    <p>Welcome to my documentation playground.</p>
    <button onclick="alert('Hello!')">Click Me</button>
</body>
</html>`;

const jsCode = `const a = 10;
const b = 20;

console.log(a + b);`;

export const SampleNote1 = () =>{
 return (<>
 <Playground title="HTML Playground" code={sampleCode} lang="html" mode="split" height={400} editorWidth="50%" previewWidth="50%" />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
 <Playground title="HTML Playground" code={sampleCode} lang="html" mode="tabs" defaultView="editor" height={400} />
 </>);
};

export const SampleNote3 = () =>{
 return (<>
 <Playground title="JavaScript Playground" code={jsCode} lang="javascript" mode="split" height={350}
    renderPreview={(code) => {
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
                    <h4>Console Output</h4>
                    {logs.map((log, index) => (
                        <div key={index}>{log}</div>
                    ))}
                </div>
            );
        } catch (error) {
            return <div>{error.message}</div>;
        }
    }} />
 </>);
};



const SampleCode = () =>{
 return (<div></div>);
};

export default SampleCode;