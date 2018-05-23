import React from 'react';
import CardPreview from './card-preview';
import CardForm from './card-form';

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
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (event) => {
    const input = event.target.value;
    const field = event.target.id;

    switch(field) {
      case 'GIVEN NAME':
      this.setState(() => ({
        givenName: input,
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
    console.log(field);
  };

  render() {
    return (
        <div className="hCard-builder__content-container">
            <h1>hCard Builder</h1>
            <div className="hCard-builder__form-and-display">
                <CardForm
                    onInputChange={this.onInputChange}
                />
                <CardPreview
                    givenName={this.state.givenName}
                    surname={this.state.surname}
                    email={this.state.email}
                    phone={this.state.phone}
                    houseNumber={this.state.houseNameOrNumber}
                    street={this.state.street}
                    suburb={this.state.suburb}
                    postcode={this.state.postcode}
                    country={this.state.country}
                />
            </div>
        </div>
    )
  }
}

export default CardBuilder;
