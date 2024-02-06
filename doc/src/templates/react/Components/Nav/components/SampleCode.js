import React from "react";
import { Nav, Colors, UrlParams } from 'e-ui-react';
import { Card } from "e-ui-react";

const url = UrlParams().baseUrl;

const HomeComponent = ()=>{
 return (<>
  <div>
    <Card padding={15}>
        Home Component
    </Card>
  </div>
 </>);
};

const Menu1Component = ()=>{
 return (<>
  <div>
    <Card padding={15}>
     Menu#1 Component
    </Card>
  </div>
 </>);
};

const Menu2Component = ()=>{
 return (<>
  <div>
    <Card padding={15}>
     Menu#2 Component
    </Card>
  </div>
 </>);
};

const Menu3Component = ()=>{
 return (<>
  <div>
    <Card padding={15}>
      Menu#3 Component
    </Card>
  </div>
 </>);
};

export const SampleNote1 = () =>{
 return (<>
<Nav mode="horizontal" 
 align="right" 
 menulinks={[
     { id:'home', url:url+'Component/Nav#home', label:'Home' },
     { id:'menu1', url:url+'Component/Nav#menu1', label:'Menu 1' },
     { id:'menu2', url:url+'Component/Nav#menu2', label:'Menu 2' },
     { id:'menu3', url:url+'Component/Nav#menu3', label:'Menu 3' }]} 
 activeId="menu2" 
 colorConfig={{
     active: { color: Colors.primary, backgroundColor:'' },
     default: { color: Colors.secondary, backgroundColor:'' }
 }} />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
<Nav mode="horizontal" 
 align="center" 
 menulinks={[
     { id:'home', url:url+'Component/Nav#home', label:'Home' },
     { id:'menu1', url:url+'Component/Nav#menu1', label:'Menu 1' },
     { id:'menu2', url:url+'Component/Nav#menu2', label:'Menu 2' },
     { id:'menu3', url:url+'Component/Nav#menu3', label:'Menu 3' }]} 
 activeId="menu2" 
 colorConfig={{
     active: { color: Colors.primary, backgroundColor:'' },
     default: { color: Colors.secondary, backgroundColor:'' }
 }} />
 </>);
};

export const SampleNote3 = () =>{
 return (<>
<Nav mode="horizontal" 
 menulinks={[
     { id:'home', url:url+'Component/Nav#home', label:'Home' },
     { id:'menu1', url:url+'Component/Nav#menu1', label:'Menu 1' },
     { id:'menu2', url:url+'Component/Nav#menu2', label:'Menu 2' },
     { id:'menu3', url:url+'Component/Nav#menu3', label:'Menu 3' }]} 
 activeId="menu2" 
 colorConfig={{
     active: { color: Colors.primary, backgroundColor:'' },
     default: { color: Colors.secondary, backgroundColor:'' }
 }} />
 </>);
};

export const SampleNote4 = () =>{
 return (<>
<Nav mode="horizontal" 
 menulinks={[
     { id:'home', url:url+'Component/Nav#home', label:'Home', content:(<HomeComponent />) },
     { id:'menu1', url:url+'Component/Nav#menu1', label:'Menu 1', content:(<Menu1Component />) },
     { id:'menu2', url:url+'Component/Nav#menu2', label:'Menu 2', content:(<Menu2Component />) },
     { id:'menu3', url:url+'Component/Nav#menu3', label:'Menu 3', content:(<Menu3Component />) }]} 
 activeId="menu2" 
 colorConfig={{
     active: { color: Colors.primary, backgroundColor:'' },
     default: { color: Colors.secondary, backgroundColor:'' }
 }} />
 </>);
};

export const SampleNote5 = () =>{
 return (<>
<Nav mode="vertical" 
 align="right"
 sequence={["content", "menu"]}
 layout={{
    menu:{  xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
    content:{ xs:'10', sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' }
 }}
 menulinks={[
     { id:'v1home', onClick:()=>{alert('Test'); }, url:url+'Component/Nav#home', label:'Home', content:(<HomeComponent />) },
     { id:'v1menu1', url:url+'Component/Nav#menu1', label:'Menu 1', content:(<Menu1Component />) },
     { id:'v1menu2', url:url+'Component/Nav#menu2', label:'Menu 2', content:(<Menu2Component />) },
     { id:'v1menu3', url:url+'Component/Nav#menu3', label:'Menu 3', content:(<Menu3Component />) }]} 
 activeId="v1menu2" 
 colorConfig={{
     active: { color: Colors.primary, backgroundColor:'' },
     default: { color: Colors.secondary, backgroundColor:'' }
 }} />
 </>);
};

export const SampleNote6 = () =>{
 return (<>
<Nav mode="vertical" 
 layout={{
    menu:{ xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
    content:{  xs:'10', sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' }
 }}
 menulinks={[
     { id:'v3home', url:url+'Component/Nav#home', label:'Home', content:(<HomeComponent />) },
     { id:'v3menu1', url:url+'Component/Nav#menu1', label:'Menu 1', content:(<Menu1Component />) },
     { id:'v3menu2', url:url+'Component/Nav#menu2', label:'Menu 2', content:(<Menu2Component />) },
     { id:'v3menu3', url:url+'Component/Nav#menu3', label:'Menu 3', content:(<Menu3Component />) }]} 
 activeId="v3menu2" 
 colorConfig={{
     active: { color: Colors.danger, backgroundColor:'' },
     default: { color: Colors.secondary, backgroundColor:'' }
 }} />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;