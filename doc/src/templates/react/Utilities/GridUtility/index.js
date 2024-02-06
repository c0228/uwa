import React, { useEffect } from 'react';
import { ContainerFluid, Row, Col, Highlight } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";

export const GridUtilityPage = ()=>{
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
  <DocumentHeader title="Grid Utility" />
  <div className="mtop15p">
  <ContainerFluid>
    <Row>
        <Col xl={5} xxl={5}>
<Highlight content={`@media(min-width:________px) and (max-width:________px){
  ___________________
  ___________________
  ___________________
}`}  lang="javascript" />
        </Col>
    </Row>
    <Row>
        <Col xl={4} xxl={4}>
            <div className="mtop15p">
                <div class="table-responsive">
                    <table class="table table-bordered">
                      <tbody>
                        <tr className="table-warning">
                          <td><b>X-Small (xs)</b></td>
                          <td><b>Mobile Devices</b></td>
                          <td><b>[ 0 px - 575 px ]</b></td>
                        </tr>
                        <tr>
                          <td><b>Small (sm)</b></td>
                          <td><b>Tablets</b></td>
                          <td><b>[ 576 px - 768 px ]</b></td>
                        </tr>
                        <tr className="table-warning">
                          <td><b>Medium (md)</b></td>
                          <td><b>Laptops</b></td>
                          <td><b>[ 769 px - 992 px ]</b></td>
                        </tr>
                        <tr>
                          <td><b>Large (lg)</b></td>
                          <td><b>Desktops</b></td>
                          <td><b>[ 993 px - 1200 px ]</b></td>
                        </tr>
                        <tr className="table-warning">
                          <td><b>Extra Large (xl)</b></td>
                          <td><b>Large Desktops</b></td>
                          <td><b>[ 1201 px - 1400 px ]</b></td>
                        </tr>
                        <tr>
                          <td><b>Extra Extra Large (xxl)</b></td>
                          <td><b>Smart TVs</b></td>
                          <td><b>[ 1401 px -  ... ]</b></td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </Col>
    </Row>
  </ContainerFluid>
  </div>
 </>);
};