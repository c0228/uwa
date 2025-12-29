import React from "react";
import { ContainerFluid, Row, Col, Pill, Colors, UrlParams, Card } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const HomeComponent = ()=>{
 return (<>
  <div><h4><b>1. Property Details</b></h4><hr/></div>
  <div className="list-group">
    <div className="list-group-item mtop15p">
        <div><h5><b>1. Property Information</b></h5></div>
    </div>
  </div>
  <div>
    
        <div></div>
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


const RAForm = () =>{
 const url = UrlParams().baseUrl;
 return (<div>
    <Header menulinks={HeaderMenu} />
    <ContainerFluid>
        <Row>
            <Col md={12}><div><h4><b>Rental Agreement Form</b></h4><hr/></div></Col>
        </Row>
        <Row className="mtop15p">
            <Col md={12}>
                <Pill mode="vertical" 
                        layout={{
                            menu:{ xs:'3', sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
                            content:{  xs:'9', sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' }
                        }}
                        menulinks={[
                            { id:'PropertyDetails', url:url+'rental-agreement-form#PropertyDetails', label:'1. Property Details', content:(<HomeComponent />) },
                            { id:'LandlordDetails', url:url+'rental-agreement-form#LandlordDetails', label:'2. Landlord Details', content:(<Menu1Component />) },
                            { id:'TenantDetails', url:url+'rental-agreement-form#TenantDetails', label:'3. Tenant Details', content:(<Menu2Component />) },
                            { id:'RentAndAgreementTerms', url:url+'rental-agreement-form#RentAndAgreementTerms', label:'4. Rent and Agreement Terms', content:(<Menu2Component />) },
                            { id:'UtilityAndMaintenanceDetails', url:url+'rental-agreement-form#UtilityAndMaintenanceDetails', label:'5. Utility and Maintenance Details', content:(<Menu2Component />) },
                            { id:'AdditionalClauses', url:url+'rental-agreement-form#AdditionalClauses', label:'6. Additional Clauses (Optional)', content:(<Menu2Component />) },
                            { id:'ReviewAndGenerateAgreement', url:url+'rental-agreement-form#ReviewAndGenerateAgreement', label:'7. Review and Generate Agreement', content:(<Menu2Component />) }]} 
                        activeId="PropertyDetails" 
                        colorConfig={{
                            active: { color: Colors.light, backgroundColor: Colors.danger },
                            default: { color: Colors.secondary, backgroundColor: '' }
                        }} />

            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default RAForm;