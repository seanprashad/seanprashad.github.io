import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Event } from '../Shared/Tracking';

import backgroundImg from '../../images/backgrounds/education.jpg';

import senecaImg from '../../images/thumbnails/companies/seneca.png';

import './styles.scss';

const Education = () => {
  return (
    <ParallaxBanner
      className="education-parallax"
      layers={[
        {
          image: JSON.stringify(backgroundImg),
          amount: 0.25,
        },
      ]}
    >
      <Container className="education" fluid>
        <Col>
          <Row>
            <h2>Education</h2>
          </Row>
          <Col>
            <Row>
              <Col sm={4}>
                <Row>
                  <a
                    href="https://bit.ly/seneca_bsd"
                    target="seneca-bsd"
                    onClick={() =>
                      Event(
                        'Education',
                        'Clicked Seneca BSD link',
                        'Seneca BSD link',
                      )
                    }
                  >
                    <img src={senecaImg} alt="seneca" />
                  </a>
                </Row>
                <Row>
                  <h3>Software Development</h3>
                </Row>
                <Row>
                  <p>Seneca College, Toronto ON</p>
                </Row>
              </Col>
              <Col sm={4}>
                <Row>
                  <a
                    href="https://bit.ly/seneca_ect"
                    target="seneca-ect"
                    onClick={() =>
                      Event(
                        'Education',
                        'Clicked Seneca ECT link',
                        'Seneca ECT link',
                      )
                    }
                  >
                    <img src={senecaImg} alt="seneca" />
                  </a>
                </Row>
                <Row>
                  <h3>Computer Engineering</h3>
                </Row>
                <Row>
                  <p>Seneca College, Toronto ON</p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Col>
      </Container>
    </ParallaxBanner>
  );
};

export default Education;
