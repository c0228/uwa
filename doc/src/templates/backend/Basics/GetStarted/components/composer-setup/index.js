import React from "react";
import { Highlight, FilledHeader } from 'e-ui-react';

const ComposerSetup = () =>{
 return (<div>
    <FilledHeader backgroundColor="#0d6efd" color="#fff" title={<b>Composer Setup</b>} />
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">Download <code><b>composer.exe</b></code> & set it to PHP in <code><b>wamp/bin/php</b></code> 
            (Default using) & install it.</li>
            <li className="mtop5p">
                <div>Check composer install in the System or not using following command:</div>
                <div className="mtop5p"><Highlight content={"composer --version"} lang="javascript" /></div>
            </li>
            <li className="mtop5p">
                <div>Go to the Path where <code><b>composer.json</b></code> exists in your backend project and run:</div>
                <div className="mtop5p"><Highlight content={"composer install"} lang="javascript" /></div>
                <div className="mtop5p padLeft5p"><code><b>composer install</b></code> will install dependencies in <code>composer.json</code></div>
                <div className="mtop15p padLeft5p"><b>Note:</b> If <code><b>composer.json</b></code> is updated,</div>
                <div className="mtop5p"><Highlight content={"composer update"} lang="javascript" /></div>
            </li>
        </ul>
    </div>
 </div>);
};

export default ComposerSetup;