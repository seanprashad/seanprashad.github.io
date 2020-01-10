import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Intro from '.';

it('matches the snapshot', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  shallow(<Intro />);
});

it('renders a header', () => {
  const wrapper = shallow(<Intro />);
  const header = (
    <h1>
      Welcome to <span className="brand">my</span> corner of the net
    </h1>
  );
  expect(wrapper.contains(header)).toEqual(true);
});
