import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
    label: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
};

export default Input;
