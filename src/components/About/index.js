import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ReactTooltip from 'react-tooltip';

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
            <Col sm={6}>
              <Row>
                <Row>
                  <p>Hey! I&apos;m Sean, a Software Engineer at Square.</p>
                </Row>
                <Row>
                  <p>
                    In my spare time, you can find me training, swimming,
                    cooking, or doing handy work around the house.
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
