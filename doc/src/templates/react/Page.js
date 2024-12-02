import React from 'react';
import { SideWrapperNavbar, SideWrapperPage, SideWrapperMenu, SideWrapperHeader, SideWrapperBody, 
    AccordianListItems, Colors, UrlParams } from 'e-ui-react';
import { SideWrapperData } from '@DocConfig/react/SideWrapperData.js';
import { NavMenuHeader }  from '@DocConfig/Header.js';

const Page = ({ children, activeId }) =>{

// const baseUrl = window.location.protocol+'//'+window.location.host+'/';
// const basePath = window.location.href.replaceAll(baseUrl,'').replaceAll('#','');

return (<>
    <SideWrapperNavbar barTheme="outline-primary">
        <SideWrapperMenu>
            <AccordianListItems 
                highlightColor={Colors.primary} 
                data={SideWrapperData} 
                selectKey="url" 
                selectValue={UrlParams().basePath} />  
        </SideWrapperMenu>
        <SideWrapperPage>
            <SideWrapperHeader>
                {NavMenuHeader(activeId)} 
            </SideWrapperHeader>
            <SideWrapperBody>
                {children}
            </SideWrapperBody>
        </SideWrapperPage>
    </SideWrapperNavbar>
</>);
/*
 return (<>
 <SideWrapperNavbar 
            barTheme="outline-primary" 
            // title="Documentation" 
            sideWrapperContent={<>
            
            </>}
            headerContent={} 
            bodyContent={} 
            />
 </>); */
};

export default Page;
