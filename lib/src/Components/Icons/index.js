import React from 'react';
import { ExcludeFromJSON } from 'e-ui-react';
import PropTypes from 'prop-types';
import './css/font-awesome.min.css';

const FontAwesomeIcon = (props) => {
 const mediaQuery = window.matchMedia('(max-width: 1200px)');
 const size = mediaQuery?.matches
  ? props.size + 'px'
  : (props.size / 1200) * 100 + 'vw';
 const styles = Object.assign(
  { fontSize: size, color: props.color },
  props.style
 );
 const newProps = ExcludeFromJSON(props, ['className', 'style']);
 const classes = props?.className !== undefined ? ' ' + props?.className : '';
 return (
  <i className={'fa ' + props.name + classes} style={styles} {...newProps}></i>
 );
};

export const Icon = (props) => {
 if (props?.type === 'FontAwesome') {
  return <FontAwesomeIcon {...props} />;
 } else {
  return <></>;
 }
};

Icon.propTypes = {
    type: PropTypes.string.isRequired, // Must be a string (e.g., "FontAwesome")
    name: PropTypes.string.isRequired, // Must be a string (e.g., "fa-map-marker")
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Can be string or number
  };
  
Icon.defaultProps = {
 size: "16", // Default size if not provided
};
