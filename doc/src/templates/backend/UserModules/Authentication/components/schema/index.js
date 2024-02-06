import React from "react";
import { Row, Col, Highlight, Table, Alert, Badge, ContainerFluid  } from "e-ui-react";
import { default as TableSchema  } from '!!raw-loader!./../user_accounts_info.sql';

const DBSchema = ()=>{

  const tableData = [
        {  "userId": "", "surName": "", "name":"", "dob":"", "gender":"", "email":"", "emailVal":"", 
            "mcountrycode": "", "mobile": "", "mobileVal":"", "dp":"", "userTz":"", "accactive":"", "userRole":"",
            "createdOn": "", "lastUpdatedOn": "" },
        {  "userId": "", "surName": "", "name":"", "dob":"", "gender":"", "email":"", "emailVal":"",  
            "mcountrycode": "", "mobile": "", "mobileVal":"", "dp":"", "userTz":"", "accactive":"", "userRole":"",
            "createdOn": "", "lastUpdatedOn": "" },
        {  "userId": "", "surName": "", "name":"", "dob":"", "gender":"", "email":"", "emailVal":"",  
            "mcountrycode": "", "mobile": "", "mobileVal":"", "dp":"", "userTz":"", "accactive":"", "userRole":"",
            "createdOn": "", "lastUpdatedOn": "" }];

  const columnDesc = [{ "columnName":"userId", "id":"userId", "width":"250px" },
        { "columnName":"surName", "id":"surName", "width":"250px" },
        { "columnName":"name", "id":"name", "width":"250px" },
        { "columnName":"dob", "id":"dob", "width":"250px" },
        { "columnName":"gender", "id":"gender", "width":"250px" },
        { "columnName":"email", "id":"email", "width":"250px" },
        { "columnName":"emailVal", "id":"emailVal", "width":"250px" },
        { "columnName":"mcountrycode", "id":"mcountrycode", "width":"250px" },
        { "columnName":"mobile", "id":"mobile", "width":"250px" },
        { "columnName":"mobileVal", "id":"mobileVal", "width":"250px" },
        { "columnName":"dp", "id":"dp", "width":"250px" },
        { "columnName":"userTz", "id":"userTz", "width":"250px" },
        { "columnName":"accactive", "id":"accactive", "width":"250px" },
        { "columnName":"userRole", "id":"userRole", "width":"250px" },
        { "columnName":"createdOn", "id":"createdOn", "width":"250px" },
        { "columnName":"lastUpdatedOn", "id":"lastUpdatedOn", "width":"250px" }
  ];

 return (<ContainerFluid>
 <Row>
    <Col xxl={12} xl={12}>
        <div style={{ marginBottom:'5px' }}>Table : <b>user_accounts_info</b></div>
        <div>
        <Alert type="warning" show={true} 
        body={<Row>
         <Col xxl={6} xl={6}>This table has a dependency with the Table <b>"user_accounts_roles"</b></Col>
         <Col xxl={6} xl={6}>
            <div align="right"><Badge  type="primary" label="Go to Page" size={12} /></div>
         </Col>
        </Row>} />
        </div>
    </Col>
 </Row>
 <Row>
    <Col xxl={12} xl={12}>
    <Highlight content={TableSchema.toString()} lines={['28T48', '56','57']} lang="sql" />
    </Col>
    <Col xxl={12} xl={12}>
     <Table columnDesc={columnDesc} data={tableData} dataSettings={{ dataSequence: false }} />
    </Col>
 </Row>
 </ContainerFluid>);
};

export default DBSchema;