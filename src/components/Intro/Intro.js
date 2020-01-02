import React from 'react';
import { Container, Row, NavLink } from 'reactstrap';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
  FaEnvelope,
} from 'react-icons/fa';

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

      <Row>
        <NavLink target="_blank" href="https://bit.ly/seanprashad_github">
          <FaGithub />
        </NavLink>
        <NavLink target="_blank" href="https://bit.ly/seanprashad_linkedin">
          <FaLinkedinIn />
        </NavLink>
        <NavLink target="_blank" href="https://bit.ly/seanprashad_medium">
          <FaMediumM />
        </NavLink>
        <NavLink target="_blank" href="https://bit.ly/seanprashad_twitter">
          <FaTwitter />
        </NavLink>
        <NavLink target="_blank" href="mailto:S.Prashad@outlook.com">
          <FaEnvelope />
        </NavLink>
      </Row>
    </Container>
  );
};

export default Intro;
