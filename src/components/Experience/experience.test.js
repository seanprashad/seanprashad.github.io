import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Experience from '.';

it('matches the snapshot', () => {
  const tree = renderer.create(<Experience />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the Experience component without crashing', () => {
  shallow(<Experience />);
});

it('renders the main header', () => {
  const wrapper = shallow(<Experience />);

  expect(wrapper.find('h2').html()).toEqual('<h2>Experience</h2>');
});

it('renders details for TunnelBear', () => {
  const wrapper = shallow(<Experience />);

  expect(
    wrapper
      .find('Col>Row>Col')
      .at(0)
      .html(),
  ).toEqual(
    '<div class="col-sm-3"><div class="row"><a href="https://bit.ly/tunnelbear_home" target="tunnelbear"><img src="tunnelbear.png" alt="tunnelbear"/></a></div><div class="row"><h3>Site Reliability Engineer</h3></div><div class="row"><h4>TunnelBear, Toronto ON</h4></div></div>',
  );
});

it('renders details for PagerDuty', () => {
  const wrapper = shallow(<Experience />);

  expect(
    wrapper
      .find('Col>Row>Col')
      .at(1)
      .html(),
  ).toEqual(
    '<div class="col-sm-3"><div class="row"><a href="https://bit.ly/pagerduty_home" target="pagerduty"><img src="pagerduty.png" alt="pagerduty"/></a></div><div class="row"><h3>Software Engineer Intern</h3></div><div class="row"><h4>PagerDuty, Toronto ON</h4></div></div>',
  );
});

it('renders details for Wattpad', () => {
  const wrapper = shallow(<Experience />);

  expect(
    wrapper
      .find('Col>Row>Col')
      .at(2)
      .html(),
  ).toEqual(
    '<div class="col-sm-3"><div class="row"><a href="https://bit.ly/wattpad_home" target="wattpad"><img src="wattpad.png" alt="wattpad"/></a></div><div class="row"><h3>Software Engineer Intern</h3></div><div class="row"><h4>Wattpad, Toronto ON</h4></div></div>',
  );
});

it('renders details for Capital One', () => {
  const wrapper = shallow(<Experience />);

  expect(
    wrapper
      .find('Col>Row>Col')
      .at(3)
      .html(),
  ).toEqual(
    '<div class="col-sm-3"><div class="row"><a href="https://bit.ly/capitalone_home" target="capital-one"><img src="capital-one.png" alt="capital-one"/></a></div><div class="row"><h3>Software Engineer Intern</h3></div><div class="row"><h4>Capital One, Toronto ON</h4></div></div>',
  );
});

it('renders details for BMO', () => {
  const wrapper = shallow(<Experience />);

  expect(
    wrapper
      .find('Col>Row>Col')
      .at(4)
      .html(),
  ).toEqual(
    '<div class="col-sm-3"><div class="row"><a href="https://bit.ly/bmo_home" target="bmo"><img src="bmo.png" alt="bmo"/></a></div><div class="row"><h3>Software Engineer Intern</h3></div><div class="row"><h4>Bank of Montreal, Toronto ON</h4></div></div>',
  );
});

it('renders details for Vincent Associates', () => {
  const wrapper = shallow(<Experience />);

  expect(
    wrapper
      .find('Col>Row>Col')
      .at(5)
      .html(),
  ).toEqual(
    '<div class="col-sm-3"><div class="row"><a href="https://bit.ly/vincentinc_home" target="vincent-associates"><img src="vincent-associates.png" alt="vincent-associates"/></a></div><div class="row"><h3>Software Engineer</h3></div><div class="row"><h4>Vincent Associates, Toronto ON</h4></div></div>',
  );
});
