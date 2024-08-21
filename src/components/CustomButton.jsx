import React from "react";

const CustomButton = ({ onClick, label, child, className, isDisabled, hideText }) => {
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={`hover:cursor-pointer ${className}`}
        title={label}
      >
        {child && child}
        <span className={`text-sm ${hideText ? 'hidden' : 'inline'}`}>
        {label}</span>
      </button>
    );
  };
export default CustomButton