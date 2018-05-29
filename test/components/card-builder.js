import CardBuilder from '../../src/components/card-builder';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CardBuilder />);
});

describe('<CardBuilder/>', function () {
    it('should render the page', () => {
        chai.expect(wrapper.find('.hCard-builder__content-container')).to.be.present();
    });

    it('should render the form that creates the hCard', () => {
        chai.expect(wrapper.find('CardForm')).to.be.present();
    });

    it('should render a preview as the user updates the form', () => {
        chai.expect(wrapper.find('CardPreview')).to.be.present();
    });
});
