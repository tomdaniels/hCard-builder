import chai from 'chai';
import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardBuilder from '../src/components/card-builder';

enzyme.configure({
    adapter: new Adapter()
});

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CardBuilder />);
});

describe('<CardBuilder/>', function () {
    it('should render the page', () => {
        chai.expect(wrapper.find('.hCard-builder__content-container')).to.have.length(1);
    });

    it('should render the form that creates the hCard', () => {
        chai.expect(wrapper.find('CardForm')).to.have.length(1);
    });

    it('should render a preview as the user updates the form', () => {
        chai.expect(wrapper.find('CardPreview')).to.have.length(1);
    });
});
