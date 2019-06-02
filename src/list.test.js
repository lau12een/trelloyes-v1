import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import list from './ist';

//smoketest
describe('List component', () => {
    it('renders as expected', () => {
        const div = document.createElement('div');
        ReactDOM.render(<list />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    // snapshot
    it('renders the UI as expected', () => {
        const tree = renderer.create(
            <list />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})