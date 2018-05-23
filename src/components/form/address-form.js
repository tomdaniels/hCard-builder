import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';

const AddressForm = ({ onInputChange }) => (
  <div>
    <h6 className="hCard-builder__section-subheading">ADDRESS</h6>
    <div className="hCard-builder__form-fields">
      <Input
        label="HOUSE NUMBER"
        onInputChange={onInputChange}
      />
      <Input
        label="STREET"
        onInputChange={onInputChange}
      />
      <Input
        label="SUBURB"
        onInputChange={onInputChange}
      />
      <Input
        label="STATE"
        onInputChange={onInputChange}
      />
      <Input
        label="POSTCODE"
        onInputChange={onInputChange}
      />
      <Input
        label="COUNTRY"
        onInputChange={onInputChange}
      />
    </div>
  </div>
);

AddressForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default AddressForm;
