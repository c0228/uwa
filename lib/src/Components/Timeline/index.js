import React from 'react';
import Template01 from './template01/index.js';
import Template02 from './template02/index.js';

export const Timeline = ({ template, data, withCard }) => {
 return (
  <>
   {template === 1 && <Template01 data={data} withCard={withCard} />}
   {template === 2 && <Template02 data={data} />}
  </>
 );
};
