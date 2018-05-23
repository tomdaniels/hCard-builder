import React from 'react';
import PropTypes from 'prop-types';

const CardPreview = ({
    givenName,
    surname,
    photo,
    email,
    phone,
    houseNumber,
    street,
    suburb,
    state,
    postcode,
    country
}) => (
  <div className="hCard-preview__container">
    <div className="hCard-preview__inner-wrap">
        <h4 className="hCard-preview__section-title">HCARD PREVIEW</h4>
        <div className="hCard-preview__header">
            <div className="hCard-preview__user-name">
                {givenName} {surname}
            </div>
            <div>
                <img
                    className="hCard-preview__image"
                    src={photo}
                    alt="hCard-staff"
                />
            </div>
        </div>
        <div className="hCard-preview__results">
            <div className="hCard-preview__field">
                EMAIL <span className="hCard-preview__value">{email}</span>
            </div>
            <div className="hCard-preview__field">
                PHONE <span className="hCard-preview__value">{phone}</span>
            </div>
            <div className="hCard-preview__field">
                ADDRESS <span className="hCard-preview__value">{houseNumber} {street} {suburb} {state}</span>
            </div>
            <div className="hCard-preview__field inline">
                POSTCODE <span className="hCard-preview__value">{postcode}</span>
            </div>
            <div className="hCard-preview__field inline">
                Country <span className="hCard-preview__value">{country}</span>
            </div>
        </div>
    </div>
  </div>
);

CardPreview.propTypes = {
    givenName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    houseNumber: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suburb: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};


export default CardPreview;
