import React from "react";
import { TreeView } from "e-ui-react";

const AND_PROJECT_STRUCTURE = [{
    id:'aar-project-name',
    name: 'aar-project-name',
    type: 'folder',
    open: true,
}];

const CreateStandaloneAndroidProject = () =>{
 return (<div>
    <TreeView data={AND_PROJECT_STRUCTURE} />
 </div>);
};

export default CreateStandaloneAndroidProject;