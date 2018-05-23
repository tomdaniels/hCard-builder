import React from 'react';

const CardPreview = ({ email, phone, address, postcode, country }) => (
  <div>
    <div>
      EMAIL <span>{email}</span>
    </div>
    <div>
      PHONE <span>{phone}</span>
    </div>
    <div>
      ADDRESS <span>{address}</span>
    </div>
    <div>
      POSTCODE <span>{postcode}</span>
    </div>
    <div>
      COUNTRY <span>{country}</span>
    </div>
  </div>
);


export default CardPreview;
