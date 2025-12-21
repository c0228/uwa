import React from "react";
import { Nav, Button, Colors } from "e-ui-react";

const Header = ({ activeId, menulinks })=>{
 return ( <nav className="navbar navbar-expand-sm">
 <div className="container-fluid">
    <span className="navbar-brand" style={{ color:'#dc3545', cursor:'pointer' }}><b>{process.env.APP_NAME}</b></span>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <div className="me-auto" style={{ paddingTop:'10px', paddingLeft:'15px' }}>
           <Nav menulinks={menulinks} activeId={activeId} 
             colorConfig={{
              active: { color: '#000', backgroundColor:'' },
              default: { color: Colors.secondary, backgroundColor:'' }
            }} 
           />
       </div>
       <div  className="d-flex">
          <Button type="outline-danger" style={{ fontSize:'13px', marginRight:'5px', padding:'5px 10px' }}><b>Login / Signup</b></Button>
       </div>
   </div>
 </div>
</nav>);
};

export default Header;