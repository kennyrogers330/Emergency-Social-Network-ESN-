import React from 'react';
import PropTypes from 'prop-types';

const sizeClasses = {
  small: 'text-sm p-1 uppercase font-semibold text-center',
  medium: 'text-base p-4 font-medium',
  large: 'text-lg p-6 font-medium',
};

const variationClasses = {
  primary: 'bg-blue-500',
  secondary: 'bg-yellow-100',
  danger: 'text-red-100 bg-red-700 hover:bg-red-800',
};

const Button = ({ children, size, variation, ...props }) => {
  const buttonClasses = `rounded-sm shadow-sm ${sizeClasses[size]} ${variationClasses[variation]}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

// Define propTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variation: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

// Define defaultProps
Button.defaultProps = {
  size: 'medium',
  variation: 'primary',
};

export default Button;
