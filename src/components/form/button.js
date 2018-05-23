import React from 'react';

const Button = ({ text, onButtonClick, isPrimary }) => {

    const primary = isPrimary ? 'primary' : null;

    return (
        <button
            className={`hCard-builder__button ${primary}`}
            onClick={onButtonClick}
        >
            {text}
        </button>
    );
};

export default Button;