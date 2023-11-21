import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import { Event } from '../Shared/Tracking';

import aboutImg from '../../images/about.png';

import './styles.scss';

const About = () => {
  return (
    <Container className="about" fluid>
      <ReactTooltip place="bottom" />
      <Col>
        <Row>
          <h2>About Me</h2>
        </Row>
        <Col>
          <Row>
            <Col sm={2}>
              <img src={aboutImg} alt="profile" />
            </Col>
          </Row>
          <Row>
            <Col sm={7}>
              <Row>
                <Row>
                  <p>Hey! I&apos;m Sean, a Software Engineer at Square.</p>
                </Row>
                <Row>
                  <p>
                    In my spare time, you can find me{' '}
                    <a
                      href="https://bit.ly/instagram-seanprashad"
                      target="instagram"
                      onClick={() =>
                        Event(
                          'About Me',
                          'Clicked Instagram link',
                          'Instagram link',
                        )
                      }
                    >
                      <strong>training</strong>
                    </a>
                    , swimming, cooking, or doing handy work around the house.
                  </p>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </Container>
  );
};

export default About;
