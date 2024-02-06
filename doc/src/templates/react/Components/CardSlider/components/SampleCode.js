import React from "react";
import { CardSlider } from 'e-ui-react';

export const SampleNote1 = () =>{
  const content = [
    {
      backgroundImage: 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
      content: (<div style={{ color:'#000' }}>Hello World #1, This is the Test Content</div>),
      staticDisplay: (<div align="center">Hi#1</div>)
    },
    {
      backgroundImage: 'https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg',
      content: (<div style={{ color:'#000' }}>Hello World #2, This is the Test Content</div>),
      staticDisplay: (<div align="center">Hi#2</div>)
    },
    {
      backgroundImage: 'https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg',
      content: (<div style={{ color:'#000' }}>Hello World #3, This is the Test Content</div>),
      staticDisplay: (<div align="center">Hi#3</div>)
    },
    {
      backgroundImage: 'https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg',
      content: (<div style={{ color:'#000' }}>Hello World #4, This is the Test Content</div>),
      staticDisplay: (<div align="center">Hi#4</div>)
    },
    {
      backgroundImage: 'https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg',
      content: (<div style={{ color:'#000' }}>Hello World #5, This is the Test Content</div>),
      staticDisplay: (<div align="center">Hi#5</div>)
    },
  ];

 return (<>
  <CardSlider template={1} content={content} />
  </>);
};

export const SampleNote2 = () =>{
  const content = [
    {
      backgroundColor:'red',
      staticDisplay: (<div align="center">Test#1</div>),
      content: (<div>Hello World</div>)
    },
    {
      backgroundColor:'green',
      staticDisplay: (<div align="center">Test#2</div>),
      content: (<div>Hello World</div>)
    },
    {
      backgroundColor:'yellow',
      staticDisplay: (<div align="center">Test#3</div>),
      content: (<div>Hello World</div>)
    },
    {
      backgroundColor:'orange',
      staticDisplay: (<div align="center">Test#4</div>),
      content: (<div>Hello World</div>)
    },
    {
      backgroundColor:'purple',
      staticDisplay: (<div align="center">Test#5</div>),
      content: (<div>Hello World</div>)
    },
  ];
  return (<>
   <CardSlider template={1} content={content} />
   </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;