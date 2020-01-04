import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import Emoji from '../Shared/Emoji/Emoji';

import './Intro.scss';

const Intro = () => {
  return (
    <Container className="intro" fluid>
      <Col>
        <Row>
          <h1>
            Welcome to <span className="brand">my</span> corner of the net
          </h1>
        </Row>

        <Row>
          <p>
            Programming <Emoji label="programming" symbol="👨🏽‍💻" />, Powerlifting{' '}
            <Emoji label="powerlifting" symbol="🏋🏽‍♂️" /> && Pizza{' '}
            <Emoji label="pizza" symbol="🍕" />
          </p>
        </Row>

        <Row className="social">
          <Col sm={1}>
            <NavLink target="_blank" href="https://bit.ly/seanprashad_github">
              <FaGithub />
            </NavLink>
          </Col>
          <Col sm={1}>
            <NavLink target="_blank" href="https://bit.ly/seanprashad_linkedin">
              <FaLinkedin />
            </NavLink>
          </Col>
          <Col sm={1}>
            <NavLink target="_blank" href="https://bit.ly/seanprashad_medium">
              <FaMedium />
            </NavLink>
          </Col>
          <Col sm={1}>
            <NavLink target="_blank" href="mailto:S.Prashad@outlook.com">
              <FaEnvelope />
            </NavLink>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Intro;
