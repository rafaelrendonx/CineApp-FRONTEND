import React from 'react';
import { shallow, configure } from 'enzyme';
import Home from './Home';
import Adapter from 'enzyme-adapter-react-16.3';

configure({adapter: new Adapter()})
describe('<Home/>', () => {
    it('renders a div', () => {
        const home = shallow(<Home/>);
        expect(home.find('div'.length).toEqual(1));
    })

    it('renders the expected output,', () => {
        const home = shallow(<Home/>);
        const expectedOutput = 
            '<div>' +
                '<h1>Hola soy el Home</h1>' +
            '<div>';
        const realOutPut = home.find('div').html()
        expect(realOutPut.indexOf(expectedOutput) > -1).toEqual(true); 
    })
})