import React from 'react';
import { SimpleHeader, Tab, CardScroll } from 'e-ui-react';
import DBSchema from './components/schema/index.js';
import ApiDesign from './components/api/index.js';
import UIDesign from './components/ui/index.js';

const AuthenticationPage = ()=>{
 const hgtPage = 'calc('+window.innerHeight+'px - ('+window.innerHeight/4+'px))';
  console.log('innerHeight: '+window.innerHeight);
 return (<>
  <SimpleHeader title="User Modules - Authentication" />
  <div style={{ padding:'15px' }}>
  <div>
  <Tab menulinks={[{ id:"dbSchema", 
                            label:"Database Schema", 
                            component:(<CardScroll padding={15} borderRadius={0} offset={170}>
                                <DBSchema />
                             </CardScroll>) },
                        { id:"apiDesign", 
                          label:"API Design", 
                          component:(<CardScroll padding={15} borderRadius={0} offset={170}>
                          <ApiDesign />
                       </CardScroll>) },
                        { id:"uiDesign", 
                          label:"User Interface Design", 
                          component:(<CardScroll padding={15} borderRadius={0} offset={170}>
                            <UIDesign />
                          </CardScroll>) 
                        }]} />
    </div>
  </div>
 </>);
};

export default AuthenticationPage;