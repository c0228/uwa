import React, { useState } from "react";
import { ModalAlert, Button } from 'e-ui-react';

export const SampleNote1 = () =>{ // With Header
  const ModalAlertWithHeader = () =>{
    const [alertData, setAlertData] = useState({
      title: 'ModalAlert with Header', 
      type: 'warning', 
      show: false, 
      msg: (<>A Test Message with Warning</>)
    });
    const ModalShowHandler = () =>{
      setAlertData({...alertData, show: true });
    };
    return (<>
      <Button type="primary" size={11} onClick={ModalShowHandler}><b>Warning With Header</b></Button>
      <ModalAlert data={alertData} setData={setAlertData} />
    </>);
  };
  return (<ModalAlertWithHeader />);
};

export const SampleNote2 = () =>{ // Without Header
 const ModalAlertWithoutHeader = () =>{
  const [alertData, setAlertData] = useState({
      type: 'success', 
      show: false, 
      msg: (<>A Test Message with Success</>)
  });
  const ModalShowHandler = () =>{
    setAlertData({...alertData, show: true });
  };
  return (<>
    <Button type="primary" size={11} onClick={ModalShowHandler}><b>Warning Without Header</b></Button>
    <ModalAlert data={alertData} setData={setAlertData} />
  </>);
 };
 return (<ModalAlertWithoutHeader />);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;