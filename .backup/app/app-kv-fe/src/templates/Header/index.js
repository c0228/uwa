import React from "react";
import { Nav } from "e-ui-react";

const Header = ({ activeId, menulinks })=>{
 return ( <nav className="navbar navbar-expand-sm" style={{ height:'55px' }}>
 <div className="container-fluid">
   <a className="navbar-brand" href="#">
    <div style={{ fontFamily: 'kvfont001', fontSize:'22px', marginTop:'8px' }}>
		 <span style={{ color:'#630062' }}>KalyanaVeena.com</span>
		</div>
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{ marginTop:'-15px'}}>
       <div className="ms-auto">{/* "ms-auto" can move to right */}
           <Nav menulinks={menulinks} activeId={activeId} 
           colorConfig={{ active: { color:'#630062' },
              default: { color:'#000' }
            }} />
       </div>
   </div>
 </div>
</nav>);
};

export default Header;