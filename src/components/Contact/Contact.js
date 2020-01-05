import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import Emoji from '../Shared/Emoji/Emoji';

import './Contact.scss';

const Contact = () => {
  const currYear = new Date().getFullYear();

  return (
    <Container className="contact" fluid>
      <Col>
        <Row>
          <Col>
            <h2>Interested in more? Check these out!</h2>
          </Col>
        </Row>
        <Col>
          <Row className="social">
            <Col sm={1}>
              <NavLink target="_blank" href="https://bit.ly/seanprashad_github">
                <FaGithub />
              </NavLink>
            </Col>
            <Col sm={1}>
              <NavLink
                target="_blank"
                href="https://bit.ly/seanprashad_linkedin"
              >
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
