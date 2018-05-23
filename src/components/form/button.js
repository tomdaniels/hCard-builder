import React from 'react';

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

export default Button;