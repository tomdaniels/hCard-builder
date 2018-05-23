import React from 'react';
import Input from './form/input';

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
      fullAddress: '',
    };

    this.formatAddress = this.formatAddress.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (event) => {
    const input = event.target.value;
    const field = event.target.id;

    switch(field) {
      case 'GIVEN NAME':
      this.setState(() => ({
        giveName: input,
      }));
      break;
      case 'SURNAME':
      this.setState(() => ({
        surname: input,
      }));
      break;
      case 'EMAIL':
      this.setState(() => ({
        email: input,
      }));
      break;
      case 'PHONE':
      this.setState(() => ({
        phone: input,
      }));
      break;
      case 'HOUSE NUMBER':
      this.setState(() => ({
        houseNameOrNumber: input,
      }));
      break;
      case 'STREET':
      this.setState(() => ({
        street: input,
      }));
      break;
      case 'SUBURB':
      this.setState(() => ({
        suburb: input,
      }));
      break;
      case 'STATE':
      this.setState(() => ({
        state: input,
      }));
      break;
      case 'POSTCODE':
      this.setState(() => ({
        postcode: input,
      }));
      break;
      case 'COUNTRY':
      this.setState(() => ({
        country: input,
      }));
      break;
      default:
      return null;
    }
  };

  formatAddress = () => {
      this.setState(() => ({
          fullAddress: `${this.state.houseNameOrNumber} ${this.state.street}, ${this.state.suburb}`,
      }));
  };

  render() {
    return (
        <div className="hCard-builder__content-container">
            <h1>hCard Builder</h1>
            <div className="hCard-builder__form-wrap">
                <h6 className="hCard-builder__section-subheading">PERSONAL DETAILS</h6>
                <div className="hCard-builder__form-fields">
                  <Input
                    label="GIVEN NAME"
                    onInputChange={this.onInputChange}
                  />
                  <Input
                    label="SURNAME"
                    onInputChange={this.onInputChange}
                  />
                  <Input
                    label="EMAIL"
                    onInputChange={this.onInputChange}
                  />
                  <Input
                    label="PHONE"
                    onInputChange={this.onInputChange}
                  />
                </div>
                <h6 className="hCard-builder__section-subheading">ADDRESS</h6>
                <div className="hCard-builder__form-fields">
                  <Input
                    label="HOUSE NUMBER"
                    onInputChange={this.onInputChange}
                  />
                  <Input
                    label="STREET"
                    onInputChange={this.onInputChange}
                  />
                  <Input
                    label="SUBURB"
                    onInputChange={this.onInputChange}
                  />
                  <Input
                    label="STATE"
                    onInputChange={this.onInputChange}
                  />
                  <Input
                    label="POSTCODE"
                    onInputChange={this.onInputChange}
                  />
                  <Input
                    label="COUNTRY"
                    onInputChange={this.onInputChange}
                  />
                </div>
            </div>
      </div>
    )
  }
}

export default CardBuilder;
