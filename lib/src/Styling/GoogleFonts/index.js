import React, { useEffect } from 'react';

export const FW_THIN = 100;
export const FW_EXTRALIGHT = 200;
export const FW_LIGHT = 300;
export const FW_NORMAL = 400;
export const FW_MEDIUM = 500;
export const FW_SEMIBOLD = 600;
export const FW_BOLD = 700;
export const FW_EXTRABOLD = 800;
export const FW_BLACK = 900;

export const GoogleFonts = ({ values, children }) => {
 const parser = (val) => {
  let stringBuilder = 'https://fonts.googleapis.com/css2?';
  val.map((v, i) => {
   const fontFamily = v['font-family'];
   const weights = v['weight'];
   stringBuilder += 'family=' + fontFamily + ':wght@';
   weights.map((vw, index) => {
    stringBuilder += vw + (index < weights.length - 1 ? ';' : '');
   });
   stringBuilder += i < val.length - 1 ? '&' : '';
  });
  console.log(stringBuilder);
  // Create a link element
  const link = document.createElement('link');
  link.href = stringBuilder + '&display=swap';
  link.rel = 'stylesheet';

  // Append it to the <head>
  document.head.appendChild(link);

  // Cleanup to remove the link on component unmount
  return () => {
   document.head.removeChild(link);
  };
 };

 useEffect(() => {
  parser(values);
 }, [values]);
 return <div>{children}</div>;
};
