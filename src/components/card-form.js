import React from 'react';
import PersonalDetailsForm from './form/personal-details-form';
import AddressForm from './form/address-form';

const CardForm = ({ onInputChange }) => (
    <div className="hCard-builder__form-wrap">
        <PersonalDetailsForm
            onInputChange={onInputChange}
        />
        <AddressForm
            onInputChange={onInputChange}
        />
    </div>
);

export default CardForm;