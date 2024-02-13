/* eslint-disable react/prop-types */
import React from 'react';

const Input = ({
  label,
  placeholder,
  details,
  description,
  error,
  completed,
  disabled,
  className,
  ...props
}) => {
  const inputClasses = `border px-3 py-2 rounded-md shadow-sm placeholder-gray-400 
    ${error ? 'border-red-500' : 'border-gray-300'} 
    ${completed ? 'bg-green-50' : 'bg-white'}
    ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
    ${className}`;
  return (
    <div className="flex flex-col mb-4">
      <div className="flex justify-between">
        {label && <label className="mb-2 text-gray-700">{label}</label>}
        {details && <label className="mb-2 text-gray-700">{details}</label>}
      </div>

      <input className={inputClasses} placeholder={placeholder} {...props} />
      {description && !error && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
