import React from 'react';
import PropTypes from 'prop-types';

const sizeClasses = {
  small: 'text-sm p-1 uppercase font-semibold text-center',
  medium: 'text-base p-4 font-medium',
  large: 'text-lg p-6 font-medium',
};

const Button = ({
  children,
  size,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  ...props
}) => {
  const buttonClasses = `rounded-sm shadow-sm ${sizeClasses[size]}`;
  const style = {
    backgroundColor,
    color: textColor,
    ...(hoverBackgroundColor
      ? { ':hover': { backgroundColor: hoverBackgroundColor } }
      : {}),
  };
  return (
    <button className={buttonClasses} style={style} {...props}>
      {children}
    </button>
  );
};

// Define propTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
};

// Define defaultProps
Button.defaultProps = {
  size: 'medium',
  backgroundColor: 'bg-blue-500',
  textColor: 'text-white',
};

export default Button;
