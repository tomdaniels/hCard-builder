import React from 'react';

const CardPreview = ({ givenName, surname, photo, email, phone, houseNumber, street, suburb, postcode, country }) => (
  <div className="hCard-preview__preview-wrap">
      <div className="hCard-preview__header">
          <div className="hCard-preview__user-name">
              {givenName} {surname}
          </div>
          <div>
              <img src="/public/images/staff-photo.png" />
          </div>
      </div>
    <div>
        <div>
            EMAIL <span>{email}</span>
        </div>
        <div>
            PHONE <span>{phone}</span>
        </div>
        <div>
            ADDRESS <span>{houseNumber} {street} {suburb}</span>
        </div>
        <div>
            POSTCODE <span>{postcode}</span>
        </div>
        <div>
            COUNTRY <span>{country}</span>
        </div>
    </div>
  </div>
);


export default CardPreview;
