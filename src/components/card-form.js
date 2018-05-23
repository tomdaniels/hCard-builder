import React from 'react';
import PropTypes from 'prop-types';
import PersonalDetailsForm from './form/personal-details-form';
import AddressForm from './form/address-form';
import Button from './form/button';

const CardForm = ({ onInputChange }) => {

    const onAvatarUploadClick = () => {
      alert('upload avatar');
    };

    const onCreateCardClick = () => {
        alert('create card');
    };

    return (
        <div className="hCard-builder__form-wrap">
            <h1>hCard Builder</h1>
            <PersonalDetailsForm
                onInputChange={onInputChange}
            />
            <AddressForm
                onInputChange={onInputChange}
            />
            <div className="hCard-builder__button-wrap">
                <Button
                    text={"Upload Avatar"}
                    onButtonClick={onAvatarUploadClick}
                />
                <Button
                    text={"Create hCard"}
                    onButtonClick={onCreateCardClick}
                    isPrimary
                />
            </div>
        </div>
    );
};

CardForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default CardForm;