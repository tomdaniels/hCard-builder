import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onButtonClick, isPrimary }) => {

  const primary = isPrimary ? 'primary' : null;

  return (
    <div>
      <button
        className={`hCard-builder__button ${primary}`}
        onClick={onButtonClick}
      >
        {text}
      </button>
      <input id="upload-avatar" className="hCard-builder__image-select" type="file"/>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  isPrimary: PropTypes.bool,
};

Button.defaultProps = {
  isPrimary: false,
};

export default Button;
