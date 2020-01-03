import React from 'react';
import { Container, Row, NavLink } from 'reactstrap';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import Emoji from '../Emoji/Emoji';

import './Intro.scss';

const Intro = () => {
  return (
    <Container fluid className="intro">
      <Row>
        <h1>
          WELCOME TO <span className="brand">MY</span> CORNER OF THE NET
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
        <NavLink target="_blank" href="https://bit.ly/seanprashad_github">
          <FaGithub />
        </NavLink>
        <NavLink target="_blank" href="https://bit.ly/seanprashad_linkedin">
          <FaLinkedinIn />
        </NavLink>
        <NavLink target="_blank" href="https://bit.ly/seanprashad_medium">
          <FaMediumM />
        </NavLink>
        <NavLink target="_blank" href="mailto:S.Prashad@outlook.com">
          <FaEnvelope />
        </NavLink>
      </Row>
    </Container>
  );
};

export default Intro;
