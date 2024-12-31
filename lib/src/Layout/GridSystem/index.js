import React from 'react';

export const Container = (props) => {
 const className = props.className !== undefined ? props.className : '';
 return (
  <div {...props} className={'container' + className}>
   {props.children}
  </div>
 );
};

export const ContainerFluid = (props) => {
 const styles = props.style ? props.style : {};
 const className = props.className !== undefined ? props.className : '';
 return (
  <div
   className={'container-fluid ' + className}
   style={{ ...styles }}
   {...props}
  >
   {props.children}
  </div>
 );
};

export const Row = (props) => {
 return (
  <div
   {...props}
   className={'row ' + (props.className !== undefined ? props.className : '')}
  >
   {props.children}
  </div>
 );
};

export const Col = (props) => {
 const all = props.all ? 'col-' + props.all + ' ' : '';
 const sm = props.sm ? 'col-sm-' + props.sm + ' ' : '';
 const md = props.md ? 'col-md-' + props.md + ' ' : '';
 const lg = props.lg ? 'col-lg-' + props.lg + ' ' : '';
 const xl = props.xl ? 'col-xl-' + props.xl + ' ' : '';
 const xxl = props.xxl ? 'col-xxl-' + props.xxl + ' ' : '';
 return (
  <div
   {...props}
   className={(
    all +
    sm +
    md +
    lg +
    xl +
    xxl +
    (props.className !== undefined ? props.className : '')
   ).trim()}
  >
   {props.children}
  </div>
 );
};
