import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import senecaImg from '../../images/thumbnails/companies/seneca.png';

import './Education.scss';

const Education = () => {
  return (
    <Container className="education" fluid>
      <Col>
        <Row>
          <h2>Education</h2>
        </Row>
        <Row className="education-content">
          <Col sm={4}>
            <Row>
              <a href="https://bit.ly/seneca_bsd" target="seneca-bsd">
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
              <a href="https://bit.ly/seneca_ect" target="seneca-ect">
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
    </Container>
  );
};

export default Education;
