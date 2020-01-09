import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Event } from '../Shared/Tracking';

import backgroundImg from '../../images/backgrounds/experience.jpg';

import pagerdutyImg from '../../images/thumbnails/companies/pagerduty.png';
import wattpadImg from '../../images/thumbnails/companies/wattpad.png';
import capitalOneImg from '../../images/thumbnails/companies/capital-one.png';
import senecaImg from '../../images/thumbnails/companies/seneca.png';
import bmoImg from '../../images/thumbnails/companies/bmo.png';
import vincentAssociatesImg from '../../images/thumbnails/companies/vincent-associates.png';

import './styles.scss';

const Experience = () => {
  return (
    <ParallaxBanner
      className="experience-parallax"
      layers={[
        {
          image: JSON.stringify(backgroundImg),
          amount: 0.25,
        },
      ]}
    >
      <Container className="experience" fluid>
        <Col>
          <Row>
            <h2>Experience</h2>
          </Row>
          <Col>
            <Row>
              <Col sm={3}>
                <Row>
                  <a
                    href="https://bit.ly/pagerduty_home"
                    target="pagerduty"
                    onClick={() =>
                      Event(
                        'Experience',
                        'Clicked PagerDuty company link',
                        'PagerDuty company link',
                      )
                    }
                  >
                    <img src={pagerdutyImg} alt="pagerduty" />
                  </a>
                </Row>
                <Row>
                  <h3>Software Engineer Intern</h3>
                </Row>
                <Row>
                  <h4>PagerDuty, Toronto ON</h4>
                </Row>
                <Row>
                  <p>September 2019 - December 2019</p>
                </Row>
              </Col>
              <Col sm={3}>
                <Row>
                  <a
                    href="https://bit.ly/wattpad_home"
                    target="wattpad"
                    onClick={() =>
                      Event(
                        'Experience',
                        'Clicked Wattpad company link',
                        'Wattpad company link',
                      )
                    }
                  >
                    <img src={wattpadImg} alt="wattpad" />
                  </a>
                </Row>
                <Row>
                  <h3>Software Engineer Intern</h3>
                </Row>
                <Row>
                  <h4>Wattpad, Toronto ON</h4>
                </Row>
                <Row>
                  <p>January 2019 - April 2019</p>
                </Row>
              </Col>
              <Col sm={3}>
                <Row>
                  <a
                    href="https://bit.ly/capitalone_home"
                    target="capital-one"
                    onClick={() =>
                      Event(
                        'Experience',
                        'Clicked Capital One company link',
                        'Capital One company link',
                      )
                    }
                  >
                    <img src={capitalOneImg} alt="capital-one" />
                  </a>
                </Row>
                <Row>
                  <h3>Software Engineer Intern</h3>
                </Row>
                <Row>
                  <h4>Capital One, Toronto ON</h4>
                </Row>
                <Row>
                  <p>May 2018 - August 2018</p>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col sm={3}>
                <Row>
                  <a
                    href="https://bit.ly/seneca_home"
                    target="seneca"
                    onClick={() =>
                      Event(
                        'Experience',
                        'Clicked Seneca company link',
                        'Seneca company link',
                      )
                    }
                  >
                    <img src={senecaImg} alt="seneca" />
                  </a>
                </Row>
                <Row>
                  <h3>Tutor</h3>
                </Row>
                <Row>
                  <h4>Seneca, Toronto ON</h4>
                </Row>
                <Row>
                  <p>September 2017 - April 2018</p>
                </Row>
              </Col>
              <Col sm={3}>
                <Row>
                  <a
                    href="https://bit.ly/bmo_home"
                    target="bmo"
                    onClick={() =>
                      Event(
                        'Experience',
                        'Clicked BMO company link',
                        'BMO company link',
                      )
                    }
                  >
                    <img src={bmoImg} alt="bmo" />
                  </a>
                </Row>
                <Row>
                  <h3>Software Engineer Intern</h3>
                </Row>
                <Row>
                  <h4>Bank of Montreal, Toronto ON</h4>
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
                    onClick={() =>
                      Event(
                        'Experience',
                        'Clicked Vincent Associates company link',
                        'Vincent Associates company link',
                      )
                    }
                  >
                    <img src={vincentAssociatesImg} alt="vincent-associates" />
                  </a>
                </Row>
                <Row>
                  <h3>Software Engineer</h3>
                </Row>
                <Row>
                  <h4>Vincent Associates, Toronto ON</h4>
                </Row>
                <Row>
                  <p>May 2015 - August 2016</p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Col>
      </Container>
    </ParallaxBanner>
  );
};

export default Experience;
