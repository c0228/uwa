import React from "react";
import { ContainerFluid, Row, Col, TreeView, Highlight } from "e-ui-react";

const AND_PROJECT_STRUCTURE = [{
    id:'aar-project-name',
    name: 'aar-project-name',
    type: 'folder',
    open: true,
}];

const CMD_BUILDS_GENERATE = `1. Application
2. Library
3. Gradle Plugin
4. Basic (build structure only)`;

const CMD_IMPL_LANG = `1. Java
2. Kotlin
3. Groovy
4. Scala
5. C++
6. Swift`;

const CMD_BUILD_DSL = `1. Kotlin
2. Groovy`;

const CMD_TEST_FW = `1. Kotlin.test
2. Junit Jupiter`;

const CreateStandaloneAndroidProject = () =>{
 return (<div>
    <ContainerFluid>
        <Row>
            <Col md={6}>
                <ol>
                    <li>
                        <div className="mtop5p">Create a Standalone Android Library (.aar) using following command-</div>
                        <div className="mtop5p"><Highlight content={`gradle init`} lang="java" /></div>
                    </li>
                    <li>
                        <div className="mtop5p">Types of builds to generate: </div>
                        <div className="mtop5p"><Highlight content={CMD_BUILDS_GENERATE} lang="java" /></div>
                        <div>Choose <code><b>Library</b></code> for building Standaline Android Library.</div>
                    </li>
                    <li>
                        <div className="mtop5p">Select implementation language:</div>
                        <div className="mtop5p"><Highlight content={CMD_IMPL_LANG} lang="java" /></div>
                        <div className="mtop5p">Choose <code><b>kotlin</b></code> as a Implementation Language.</div>
                    </li>
                    <li className="mtop5p">
                        <div>Make Sure, we are using <code><b>Java Version = 17</b></code></div>
                    </li>
                    <li className="mtop5p">
                        <div>Provide <code><b>Project name</b></code></div>
                    </li>
                    <li>
                        <div className="mtop5p">Select build script DSL:</div>
                        <div className="mtop5p"><Highlight content={CMD_BUILD_DSL} lang="java" /></div>
                        <div className="mtop5p">Choose <code><b>Kotlin</b></code> as a build script DSL.</div>
                    </li>
                    <li className="mtop5p">
                        <div className="mtop5p">Select test framework:</div>
                        <div className="mtop5p"><Highlight content={CMD_TEST_FW} lang="java" /></div>
                        <div className="mtop5p">Choose <code><b>Kotlin.test</b></code> as Test Framework.</div>
                    </li>
                    <li className="mtop5p">
                       <div>Generate build using new APIs & behaviour (some features may change in the next minor release).</div>
                    </li>
                </ol>
                <div className="mtop5p">This will generate Ready-made Startup Code for making <code><b>.aar</b></code> project.</div>
            </Col>
            <Col md={6}>
                <div className="mtop5p">Ready-made Startup Code for making <code><b>.aar</b></code> project setup following Structure:</div>
                <div className="mtop5p"><TreeView data={AND_PROJECT_STRUCTURE} /></div>
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default CreateStandaloneAndroidProject;