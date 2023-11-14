import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import About from '.';

it('matches the snapshot', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the About component without crashing', () => {
  shallow(<About />);
});

it('renders the main header', () => {
  const wrapper = shallow(<About />);

  expect(wrapper.find('h2').html()).toEqual('<h2>About Me</h2>');
});

it('renders the headshot image', () => {
  const wrapper = shallow(<About />);

  expect(wrapper.find('img').html()).toEqual(
    '<img src="about.png" alt="profile"/>',
  );
});

it('renders the subheader', () => {
  const wrapper = shallow(<About />);

  expect(wrapper.find('p')).toHaveLength(2);

  expect(
    wrapper
      .find('p')
      .at(0)
      .html(),
  ).toEqual('<p>Hey! I&#x27;m Sean, a Software Engineer at Square!</p>');

  expect(
    wrapper
      .find('p')
      .at(1)
      .html(),
  ).toEqual(
    '<p>In my spare time, you can usually find me <a href="https://bit.ly/instagram-seanprashad" target="instagram"><strong>training</strong></a> and helping in the <a href="http://bit.ly/github_prs" target="github"><strong>open source</strong></a> community.</p>',
  );
});
