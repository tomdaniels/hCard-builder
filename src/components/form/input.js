import React from 'react';

const Input = ({ label, onInputChange }) => (
  <div className="hCard-builder__input-wrap">
    <div>{label}</div>
    <input
      className="hCard-builder__input-field"
      type="text"
      id={label}
      onChange={onInputChange}
    />
  </div>
);

export default Input;
