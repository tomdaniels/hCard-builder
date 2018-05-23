import React from 'react';
import Input from './input';

const PersonalDetailsForm = ({ onInputChange }) => (
    <div>
        <h6 className="hCard-builder__section-subheading">PERSONAL DETAILS</h6>
        <div className="hCard-builder__form-fields">
            <Input
                label="GIVEN NAME"
                onInputChange={onInputChange}
            />
            <Input
                label="SURNAME"
                onInputChange={onInputChange}
            />
            <Input
                label="EMAIL"
                onInputChange={onInputChange}
            />
            <Input
                label="PHONE"
                onInputChange={onInputChange}
            />
        </div>
    </div>
);

export default PersonalDetailsForm;