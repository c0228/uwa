import React from "react";
import { Badge } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
  <Badge type="primary" label="Primary Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="secondary" label="Secondary Badge" size="12"  style={{ marginRight:'5px' }} />
  <Badge type="success" label="Success Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="danger" label="Danger Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="warning" label="Warning Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="info" label="Info Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="light" label="Light Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="dark" label="Dark Badge" size="12" style={{ marginRight:'5px' }} />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
  <Badge type="primary" model="rounded-pill" label="Primary Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="secondary" model="rounded-pill" label="Secondary Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="success" model="rounded-pill" label="Success Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="danger" model="rounded-pill" label="Danger Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="warning" model="rounded-pill" label="Warning Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="info" model="rounded-pill" label="Info Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="light" model="rounded-pill" label="Light Badge" size="12" style={{ marginRight:'5px' }} />
  <Badge type="dark" model="rounded-pill" label="Dark Badge" size="12" style={{ marginRight:'5px' }} />
 </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;