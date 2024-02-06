import React from "react";
import { ContainerFluid, Row, Col, TextSearch } from "e-ui-react";

const IntroPara = ()=>{
 return (<>
 <ContainerFluid style={{ fontFamily:'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif',
  backgroundColor:'#630062', color:'#fff', padding:'45px', paddingRight: '50px' }}>
    <Row>
        <Col xl={12} xxl={12}>
            <div align="center" style={{ fontSize:'22px' }}>
                <h4 style={{ lineHeight:'36px' }}><b>Your Profiles in KalyanaVeena.com are more Safer than any Other Matrimony Platform.<br/>
                We keep your Data safe and Secure. Find your Known by Profile Id :</b></h4>
				<div>
				<TextSearch name="profileId" 
        				placeholder="Enter Known Profile Id"
						width="280px"
						validation={{
							required:{
								value: true,
								errorMessage:"This is a Mandatory Field"
							},
							minLength:{
								value: 2,
								errorMessage:"Message should be greator than 2"
							}
						}} />
				</div>
            </div>
        </Col>
    </Row>
 </ContainerFluid>


 {/*<div class="row"  style="background-color:#ff9800;">
	<div class="col-sm-7">
	  <div class="col-sm-12 mtop15p mbot15p">
	    <div align="center"><h4 style="font-family:kvfont002;font-size:22px;"></h4></div>
		<div align="center"><h4 style="font-family:kvfont002;font-size:22px;"><b></b></h4></div>
	  </div>
	</div>
	<div class="col-sm-5">
	  <div class="col-sm-1"></div>
	  <div class="col-sm-10 mbot25p" style="margin-top:25px;">
	    <div align="center">
		  <h4 style="font-family:kvfont002;font-size:22px;"><b>Find your Known by Profile Id</b></h4>
		</div>
		<div class="mbot15p">
		<div class = "input-group">
         <input type="text" class="form-control" placeholder="Enter your Profile Id" style="border:2px solid #000;"/>
		 <span class="input-group-addon" style="background-color:#fff;border-top:2px solid #000;border-bottom:2px solid #000;border-right:2px solid #000;color:#000;"><b>Search Profile</b></span>
		</div>
		</div>
	  </div>
	  <div class="col-sm-1"></div>
	</div>
 </div> */}
 </>);
};

export default IntroPara;