import React from 'react';
import CardPreview from './card-preview';
// import staffPhoto from './../../assets/images/staff-photo';

class CardBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      houseNameOrNumber: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: '',
      photo: undefined,
    };
    this.formatAddress = this.formatAddress.bind(this);
  }

  formatAddress = () => `${this.state.houseNameOrNumber} ${this.state.street}, ${this.state.suburb}`;

  render() {
    return (
        <div className="hCard-builder__content-container">
            <h1>hCard Builder</h1>
            <h6 className="hCard-builder__subheading">PERSONAL DETAILS</h6>
            <div className="hCard-builder__form-wrap">
                <CardPreview
                  email={this.state.email}
                  phone={this.state.phone}
                  address={this.formatAddress}
                  postcode={this.state.postcode}
                  country={this.state.country}
                />
            </div>
        </div>
    )
  }
}

export default CardBuilder;
