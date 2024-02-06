import React from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Table, Highlight, FilledHeader, Menu } from "e-ui-react";
import { default as TableSchema  } from '!!raw-loader!./components/config_static_info.sql';

export const TableConfigStaticInfo =()=>{
    const tableData = [{  "paramKey": " ", "paramValue": " " },
                  {  "paramKey": " ", "paramValue": " "  },
                  {  "paramKey": " ", "paramValue": " "  }];

const columnDesc = [{ "columnName":"paramKey", "id":"paramKey", "width":"50%" },
    { "columnName":"paramValue", "id":"paramValue", "width":"50%" }];
 return (<>
    <SimpleHeader title="Table - config_static_info" />
    <ContainerFluid className="mtop15p">
        <Row>
            <Col xxl={4} xl={4}>
                <Table columnDesc={columnDesc} data={tableData} dataSettings={{ dataSequence: false }} />
                <div align="center" className="mtop15p mbot15p"><b>Table: config_static_info</b></div>
                <div>
                    <Highlight style={{ height:'220px' }} content={TableSchema.toString()} lang="sql" />
                    <div align="center" className="mtop15p mbot15p"><b>Table SQL Schema</b></div>
                </div>
            </Col>
            <Col xxl={8} xl={8}>
                <FilledHeader backgroundColor="#0d6efd" color="#fff" title={"Rest API Design"} />
                <div className="mtop15p">
                <Menu type="pill" layout="vertical" 
                    layoutStyle={{ 
                                menu:{ sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
                                content:{ sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' } 
                                }}
                    list={[{ id:"architecture", label:"Architecture", component:(<div>Architecture</div>) },
                            { id:"controller", label:"Controller Layer", component:(<div>Controller Layer</div>) },
                            { id:"data", label:"Data Layer", component:(<div>Data Layer</div>) },
                            { id:"uiDashboard", label:"UI Dashboard", component:(<div>UI Dashboard Layer</div>) }]} />
                </div>
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};
