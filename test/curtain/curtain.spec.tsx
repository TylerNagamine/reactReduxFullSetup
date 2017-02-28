import {} from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Curtain from '../../ClientApp/components/curtain/Curtain';
import * as Renderer from 'react-test-renderer';

describe('Curtain component', () => {
    it('should match snapshot', () => {
        let shown = true;

        const component = Renderer.create(
            <Curtain 
                curtainText={"Test text"}
                shown={shown}
            />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render children', () => {
        const curtain = shallow(
            <Curtain shown={false}>
                <div className='unique'/>
            </Curtain>
        );

        expect(curtain.contains(<div className='unique'/>)).toBe(true);
    });
});