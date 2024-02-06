import React, { useEffect } from 'react';
import { SimpleHeader, Highlight, AccordianListItems, Colors } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const data1 = [{
    id:"FirstLevel",
    url:"#", 
    title:"First level (Main)",
    children:[{
            id:"Item01",
            url:"Component/AccordianListItems", 
            title:"Item01"
        },{
            id:"Item02",
            url:"Component/AccordianListItems", 
            title:"Item02"
        },{
            id:"Item03",
            url:"Component/AccordianListItems", 
            title:"Item03"
        }] 
    },
    {
        id:"SecondLevel",
        url:"#", 
        title:"Second level (Main)",
        children:[{
                id:"Item04",
                url:"Component/AccordianListItems", 
                title:"Item04"
            },{
                id:"Item05",
                url:"Component/AccordianListItems", 
                title:"Item05"
            },{
                id:"Item06",
                url:"Component/AccordianListItems", 
                title:"Item06"
            }] 
    },
    {
            id:"ThirdLevel",
            url:"#", 
            title:"Third level (Main)",
            children:[{
                    id:"Item07",
                    url:"Component/AccordianListItems", 
                    title:"Item07"
                },{
                    id:"Item08",
                    url:"Component/AccordianListItems", 
                    title:"Item08"
                },{
                    id:"Item09",
                    url:"Component/AccordianListItems", 
                    title:"Item09"
                }] 
            }];

const data2 = [{
    id:"FirstLevel",
    url:"#", 
    title:"First level (Main)",
    children:[{
        id:"SubLevelOne",
        url:"#", 
        title:"Sublevel (One)",
        children:[{
            id:"Item01",
            url:"Component/AccordianListItems", 
            title:"Item01"
        },{
            id:"Item02",
            url:"Component/AccordianListItems", 
            title:"Item02"
        },{
            id:"Item03",
            url:"Component/AccordianListItems", 
            title:"Item03"
        }] 
    },
    {
        id:"SubLevelTwo",
        url:"#", 
        title:"Sublevel (Two)",
        children:[{
            id:"Item04",
            url:"Component/AccordianListItems", 
            title:"Item04"
        },{
            id:"Item05",
            url:"Component/AccordianListItems", 
            title:"Item05"
        },{
            id:"Item06",
            url:"Component/AccordianListItems", 
            title:"Item06"
        }] 
    },
    {
        id:"SubLevelThree",
        url:"#", 
        title:"Sublevel (Three)",
        children:[{
            id:"Item07",
            url:"Component/AccordianListItems", 
            title:"Item07"
        },{
            id:"Item08",
            url:"Component/AccordianListItems", 
            title:"Item08"
        },{
            id:"Item09",
            url:"Component/AccordianListItems", 
            title:"Item09"
        }] 
    }] 
},
{
    id:"SecondLevel",
    url:"#", 
    title:"Second level (Main)",
    children:[{
        id:"SubLevelFour",
        url:"#", 
        title:"Sublevel (Four)",
        children:[{
            id:"Item10",
            url:"Component/AccordianListItems", 
            title:"Item10"
        },{
            id:"Item11",
            url:"Component/AccordianListItems", 
            title:"Item11"
        },{
            id:"Item12",
            url:"Component/AccordianListItems", 
            title:"Item12"
        }] 
    },
    {
        id:"SubLevelFive",
        url:"#", 
        title:"Sublevel (Five)",
        children:[{
            id:"Item13",
            url:"Component/AccordianListItems", 
            title:"Item13"
        },{
            id:"Item14",
            url:"Component/AccordianListItems", 
            title:"Item14"
        },{
            id:"Item15",
            url:"Component/AccordianListItems", 
            title:"Item15"
        }] 
    },
    {
        id:"SubLevelSix",
        url:"#", 
        title:"Sublevel (Six)",
        children:[{
            id:"Item16",
            url:"Component/AccordianListItems", 
            title:"Item16"
        },{
            id:"Item17",
            url:"Component/AccordianListItems", 
            title:"Item17"
        },{
            id:"Item18",
            url:"Component/AccordianListItems", 
            title:"Item18"
        }] 
    }] 
}];

export const AccordianListItemsPage = () =>{
 
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const SingleLevelDisplay = () =>{
  return (<div className="row" style={{ marginTop:'15px' }}>
  <div className="col-md-3">
      <Highlight lang="javascript" style={{ maxHeight:'300px' }}   
        content={'const data = '+JSON.stringify(data1, null, 2).replaceAll('Component/AccordianListItems','#')} />
    </div>
    <div className="col-md-6">
        <Highlight lang="javascript"   
        content={'import React from \'react\';\nimport { AccordianListItems } from \'e-ui-react\';\n\n<AccordianListItems data={data} highlightColor={Colors.primary} defaultColor={Colors.dark} selectKey="title" selectValue="Item01" />'} />
    </div>
    <div className="col-md-3">
        <div style={{ backgroundColor: Colors.primary, color: Colors.light, padding:'10px'}}><b>Output:</b></div>
        <AccordianListItems data={data1} highlightColor={Colors.primary} defaultColor={Colors.dark} selectKey="title" selectValue="Item05" />
        </div>
      </div>);
       };

 const MultiLevelDisplay = () =>{
  return (<div className="row" style={{ marginTop:'15px' }}>
  <div className="col-md-3">
      <Highlight lang="javascript" style={{ maxHeight:'300px' }}   
      content={'const data = '+JSON.stringify(data2, null, 2).replaceAll('Component/AccordianListItems','#')} />
  </div>
  <div className="col-md-6">
  <Highlight lang="javascript"   
  content={'import React from \'react\';\nimport { AccordianListItems } from \'e-ui-react\';\n\n<AccordianListItems data={data} highlightColor={Colors.primary} defaultColor={Colors.dark} selectKey="title" selectValue="Item01" />'} />
  </div>
  <div className="col-md-3">
      <div style={{ backgroundColor: Colors.primary, color: Colors.light, padding:'10px'}}><b>Output:</b></div>
  <AccordianListItems data={data2} highlightColor={Colors.primary} defaultColor={Colors.dark} selectKey="title" selectValue="Item05" />
  </div>
</div>);
 };

 return (<>
 <DocumentHeader title="AccordianListItems" componentAttributesTable={ComponentAttributesTable} />
 <div className="container-fluid">
    <div className="row">
     <div className="col-md-12">
        <ol>
            <li>
                <b>Single level Accordian List Items:</b><br/>
                <SingleLevelDisplay />
            </li>
            <li>
                <b>Multi level Accordian List Items:</b><br/>
                <MultiLevelDisplay />
            </li>
        </ol>
     </div>
    </div>
 </div>
 </>);
};