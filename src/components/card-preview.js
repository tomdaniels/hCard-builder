import React from 'react';

const CardPreview = ({ name, surname, photo, email, phone, number, street, suburb, postcode, country }) => (
  <div>
      <div>
          {`${name} ${surname}`}
      </div>
      <img src="/public/images/staff-photo.png" />
    <div>
        <div>
            EMAIL <span>{email}</span>
        </div>
        <div>
            PHONE <span>{phone}</span>
        </div>
        <div>
            ADDRESS <span>{`${number} ${street} ${suburb}`}</span>
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
