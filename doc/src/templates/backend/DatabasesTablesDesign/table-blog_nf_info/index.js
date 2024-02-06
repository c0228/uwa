import React from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Table, Highlight, FilledHeader, Menu } from "e-ui-react";
import { default as TableSchema  } from '!!raw-loader!./components/blog_nf_info.sql';
import { UIDashboard } from "./components/UIDashboard/index.js";

export const TableBlogNfInfo = ()=>{
    const tableData = [
        {  "blogId": "", "title": "", "desc":"", "fileLocation":"", "isActive":"", "createdOn":"", "lastUpdatedOn":"" },
        {  "blogId": "", "title": "", "desc":"", "fileLocation":"", "isActive":"", "createdOn":"", "lastUpdatedOn":""  },
        {  "blogId": "", "title": "", "desc":"", "fileLocation":"", "isActive":"", "createdOn":"", "lastUpdatedOn":""  }];

    const columnDesc = [{ "columnName":"blogId", "id":"blogId", "width":"10%" },
        { "columnName":"title", "id":"title", "width":"15%" },
        { "columnName":"desc", "id":"desc", "width":"15%" },
        { "columnName":"fileLocation", "id":"fileLocation", "width":"15%" },
        { "columnName":"isActive", "id":"isActive", "width":"13%" },
        { "columnName":"createdOn", "id":"createdOn", "width":"15%" },
        { "columnName":"lastUpdatedOn", "id":"lastUpdatedOn", "width":"17%" },
    ];
    return (<>
        <SimpleHeader title="Table - blog_nf_info" />
        <ContainerFluid className="mtop15p">
            <Row>
                <Col xxl={5} xl={5}>
                    <Table columnDesc={columnDesc} data={tableData} dataSettings={{ dataSequence: false }} />
                    <div align="center" className="mtop15p mbot15p"><b>Table: blog_nf_info</b></div>
                    <div>
                        <Highlight style={{ height:'220px' }} content={TableSchema.toString()} lang="sql" />
                        <div align="center" className="mtop15p mbot15p"><b>Table SQL Schema</b></div>
                    </div>
                </Col>
                <Col xxl={7} xl={7}>
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
                                { id:"uiDashboard", label:"UI Dashboard", component:(<UIDashboard />) }]} />
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
    </>);
};