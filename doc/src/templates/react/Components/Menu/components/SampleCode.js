import React from "react";
import { Menu } from 'e-ui-react';

export const SampleNote1 = () =>{
  return (<>
   <Menu minValues={4} type="tab" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) },
            { id:"menu3", label:"Menu 3", component:(<div>Menu #3 Content</div>) },
            { id:"menu4", label:"Menu 4", component:(<div>Menu #4 Content</div>) },
            { id:"menu5", label:"Menu 5", component:(<div>Menu #5 Content</div>) },
            { id:"menu6", label:"Menu 6", component:(<div>Menu #6 Content</div>) },
      ]} />
   </>);
};

export const SampleNote2 = () =>{
  return (<>
   <Menu justify={true} type="tab" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
   </>);
};

export const SampleNote3 = () =>{
  return (<>
     <Menu type="tab" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
             { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
             { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
   </>);
};

export const SampleNote4 = () =>{
  return (<>
    <Menu type="pill" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
  </>);
};

export const SampleNote5 = () =>{
  return (<>
  <Menu justify={true} type="pill" list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
  </>);
};

export const SampleNote6 = () =>{
  return (<>
  <Menu type="pill" layout="vertical" 
    layoutStyle={{ 
                  menu:{ sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
                  content:{ sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' } 
                }}
    list={[{ id:"home", label:"Home", component:(<div>Home Content</div>) },
            { id:"menu1", label:"Menu 1", component:(<div>Menu #1 Content</div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
  </>);
};

export const SampleNote7 = () =>{
  return (<>
   <Menu type="nav" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]}/>
  </>);
};

export const SampleNote8 = () =>{
  return (<>
   <Menu type="nav" align="center"  list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]}/>
  </>);
};

export const SampleNote9 = () =>{
  return (<>
   <Menu type="nav" align="end"  list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />
  </>);
};

export const SampleNote10 = () =>{
  return (<>
   <Menu type="nav" layout="vertical" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />
  </>);
};

export const SampleNote11 = () =>{
  return (<>
   <Menu type="nav" layout="vertical" align="center" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />
  </>);
};

export const SampleNote12 = () =>{
  return (<>
   <Menu type="nav" layout="vertical" align="end" list={[{ link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Link" },
            { link:"#", label:"Disabled", disabled: true }]} />
  </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;