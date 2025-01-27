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

 const styles = {
    fontSize: getResponsiveStyle(size),
    letterSpacing: getResponsiveStyle(1),
    ...style,
  };

 return (<button type="button" className={classes} style={styles} {...restProps}>{children}</button>);
};

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
  };
