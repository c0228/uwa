import React from 'react';
import PropTypes from 'prop-types';
import { getResponsiveStyle } from 'e-ui-react';
import './index.css';

export const Button = ({
  type = 'default',
  size = 12,
  className = '',
  style = {},
  children,
  ...restProps
}) => {

  const classes = `btn btn-${type} ${className}`.trim();

  // Merge computed styles with user-provided style from restProps (if any)
  const styles = {
    fontSize: size + 'px',
    ...style,                // user-passed style prop
    ...restProps.style       // style inside restProps (if any)
  };

  // Remove style from restProps so it doesn't override
  const { style: _restStyle, ...otherProps } = restProps;

  return (
    <button type="button" className={classes} style={styles} {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};
