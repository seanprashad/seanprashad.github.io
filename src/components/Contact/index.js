import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import Emoji from '../Shared/Emoji';
import { Event } from '../Tracking';

import './Contact.scss';

const Contact = () => {
  const currYear = new Date().getFullYear();

  return (
    <Container className="contact" fluid>
      <Col>
        <Row>
          <Col>
            <h2>Let&apos;s get in contact!</h2>
          </Col>
        </Row>
        <Col>
          <Row className="social">
            <Col sm={1}>
              <NavLink
                target="_blank"
                href="https://bit.ly/seanprashad_github"
                onClick={() =>
                  Event('Contact', 'Clicked GitHub link', 'GitHub link')
                }
              >
                <FaGithub />
              </NavLink>
            </Col>
            <Col sm={1}>
              <NavLink
                target="_blank"
                href="https://bit.ly/seanprashad_linkedin"
                onClick={() =>
                  Event('Contact', 'Clicked LinkedIn link', 'LinkedIn link')
                }
              >
                <FaLinkedin />
              </NavLink>
            </Col>
            <Col sm={1}>
              <NavLink
                target="_blank"
                href="https://bit.ly/seanprashad_medium"
                onClick={() =>
                  Event('Contact', 'Clicked Medium link', 'Medium link')
                }
              >
                <FaMedium />
              </NavLink>
            </Col>
            <Col sm={1}>
              <NavLink
                target="_blank"
                href="mailto:S[dot]Prashad[at]outlook.com"
                onClick={() =>
                  Event('Contact', 'Clicked Email link', 'Email link')
                }
              >
                <FaEnvelope />
              </NavLink>
            </Col>
          </Row>
        </Col>

        <footer>
          <Row>
            <p>
              Made with <Emoji label="heart" symbol="💙" /> in Toronto
            </p>
          </Row>
          <Row>&copy; {currYear} Sean Prashad</Row>
        </footer>
      </Col>
    </Container>
  );
};

export default Contact;
