import React, { useState } from "react";
import { ContainerFluid, Row, Col, Switch, Choice, Dropdown, TextBox } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const BrowseMatrimony = ()=>{
    const [ dropdownValue, setDropdownValue ] = useState("");
    const menuOptions = [{ options:[{ label:"Telugu", value:"Telugu" }] },
              { options:[{ label:"Hindi", value:"Hindi" }] },
              { options:[{ label:"Tamil", value:"Tamil" }] },
              { options:[{ label:"Kannada", value:"Kannada" }] },
              { options:[{ label:"Malayalam", value:"Malayalam" }] }
]; 
 return (<>
 <Header menulinks={HeaderMenu} activeId="BrowseMatrimony" />
 <ContainerFluid>
<Row>
    <Col xl={4} xxl={3}>
        <div><Choice type="radio" id="numbers" name="numbers" label="I'm looking for a..." 
                    value={[{ id:1, label:"Bride", value:"1"},
                            { id:2, label:"Bridegroom", value:"2" }]} 
                    disabled={false} /></div>
    <div><Switch type="checkbox" id="age" name="age" label="Age Preference" 
                    value={[{ id:1, label:"21 -25", value:"1"},
                            { id:2, label:"25-30", value:"2" },
                            { id:3, label:"30-35", value:"3" },
                            { id:4, label:"35-40", value:"4" },
                            { id:5, label:"40 + ", value:"5" }]} 
                    disabled={false} /></div>
                    <div>
                    <Choice type="radio" id="maritalStatus" name="maritalStatus" label="Marital Status" 
                    value={[{ id:1, label:"Unmarried", value:"1"},
                            { id:2, label:"Divorced", value:"2" },
                            { id:3, label:"Widow", value:"3" },
                            { id:4, label:"Widower", value:"4" }]} 
                    disabled={false} /></div>
                    <div>
                      <Dropdown placeholder="Mother-Toungue Preference" label="Mother-Tongue" 
                        menu={menuOptions} value={setDropdownValue}
                        container={{
                          searchLabel: "Search a Language"
                        }} />
                      </div>
                   <div>
                    <Choice type="radio" id="profession" name="profession" label="Profession" 
                    value={[{ id:1, label:"Private Sector", value:"1"},
                            { id:2, label:"Government officer", value:"2" },
                            { id:3, label:"Software Engineer", value:"3" },
                            { id:4, label:"Defence Services", value:"4" },
                            { id:5, label:"Businessman", value:"5" },
                            { id:6, label:"Doctor", value:"6" },]} 
                    disabled={false} /></div>
    </Col>
</Row>
</ContainerFluid>
 </>);
};

export default BrowseMatrimony;