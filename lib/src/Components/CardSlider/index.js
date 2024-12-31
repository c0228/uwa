import React from 'react';
import Template01 from './templates/template-01/index.js';

export const CardSlider = ({ template, content }) => {
 return <>{template === 1 && <Template01 content={content} />}</>;
};
