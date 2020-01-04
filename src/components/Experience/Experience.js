import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import pagerdutyImg from '../../images/thumbnails/companies/pagerduty.png';
import wattpadImg from '../../images/thumbnails/companies/wattpad.png';
import capitalOneImg from '../../images/thumbnails/companies/capital-one.png';
import senecaImg from '../../images/thumbnails/companies/seneca.png';
import bmoImg from '../../images/thumbnails/companies/bmo.png';
import vincentAssociatesImg from '../../images/thumbnails/companies/vincent-associates.png';

import './Experience.scss';

const Experience = () => {
  return (
    <Container className="experience" fluid>
      <Col>
        <Row>
          <h2>Experience</h2>
        </Row>
        <Col>
          <Row>
            <Col sm={3}>
              <Row>
                <a href="https://bit.ly/pagerduty_home" target="pagerduty">
                  <img src={pagerdutyImg} alt="pagerduty" />
                </a>
              </Row>
              <Row>
                <h3>Software Engineer Intern</h3>
              </Row>
              <Row>
                <p>PagerDuty, Toronto ON</p>
              </Row>
              <Row>
                <p>September 2019 - December 2019</p>
              </Row>
            </Col>
            <Col sm={3}>
              <Row>
                <a href="https://bit.ly/wattpad_home" target="wattpad">
                  <img src={wattpadImg} alt="wattpad" />
                </a>
              </Row>
              <Row>
                <h3>Software Engineer Intern</h3>
              </Row>
              <Row>
                <p>Wattpad, Toronto ON</p>
              </Row>
              <Row>
                <p>January 2019 - April 2019</p>
              </Row>
            </Col>
            <Col sm={3}>
              <Row>
                <a href="https://bit.ly/capitalone_home" target="capital-one">
                  <img src={capitalOneImg} alt="capital-one" />
                </a>
              </Row>
              <Row>
                <h3>Software Engineer Intern</h3>
              </Row>
              <Row>
                <p>Capital One, Toronto ON</p>
              </Row>
              <Row>
                <p>May 2018 - August 2018</p>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={3}>
              <Row>
                <a href="https://bit.ly/seneca_home" target="seneca">
                  <img src={senecaImg} alt="seneca" />
                </a>
              </Row>
              <Row>
                <h3>Tutor</h3>
              </Row>
              <Row>
                <p>Seneca, Toronto ON</p>
              </Row>
              <Row>
                <p>September 2017 - April 2018</p>
              </Row>
            </Col>
            <Col sm={3}>
              <Row>
                <a href="https://bit.ly/bmo_home" target="bmo">
                  <img src={bmoImg} alt="bmo" />
                </a>
              </Row>
              <Row>
                <h3>Software Engineer Intern</h3>
              </Row>
              <Row>
                <p>Bank of Montreal, Toronto ON</p>
              </Row>
              <Row>
                <p>May 2017 - September 2017</p>
              </Row>
            </Col>
            <Col sm={3}>
              <Row>
                <a
                  href="https://bit.ly/vincentinc_home"
                  target="vincent-associates"
                >
                  <img src={vincentAssociatesImg} alt="vincent-associates" />
                </a>
              </Row>
              <Row>
                <h3>Software Engineer</h3>
              </Row>
              <Row>
                <p>Vincent Associates, Toronto ON</p>
              </Row>
              <Row>
                <p>May 2015 - August 2016</p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </Container>
  );
};

export default Experience;
