import React from 'react';
import { Container, Row } from 'reactstrap';

import './Intro.css';

const Intro = () => {
  return (
    <Container className="Intro">
      <Row>
        <h1>WELCOME TO MY CORNER OF THE NET</h1>
      </Row>

      <Row>
        <p>Programming, Powerlifting && Pizza</p>
      </Row>
    </Container>
  );
};

export default Intro;
