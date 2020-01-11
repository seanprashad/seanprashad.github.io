import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { IconContext } from 'react-icons';
import { Link } from 'react-scroll';
import { FaAws, FaDocker, FaGithub, FaJava, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiMysql } from 'react-icons/di';
import { Event } from '../Shared/Tracking';

import aboutImg from '../../images/about.jpg';

import './styles.scss';

const About = () => {
  return (
    <Container className="about" fluid>
      <Col>
        <Row>
          <h2>About Me</h2>
        </Row>
        <Col>
          <Row>
            <Col sm={2}>
              <img src={aboutImg} alt="profile" />
            </Col>
            <Col sm={4}>
              <Row>
                <Row>
                  <p>
                    Hey! I&apos;m <strong>Sean</strong>, a{' '}
                    <strong>Software Development</strong> and{' '}
                    <strong>Computer Engineering</strong> graduate from Seneca.
                  </p>
                </Row>
                <Row>
                  <p>
                    In my spare time, you can usually find me{' '}
                    <a
                      href="http://bit.ly/secret_sean"
                      target="instagram"
                      onClick={() =>
                        Event(
                          'About Me',
                          'Clicked Instagram link',
                          'Instagram link',
                        )
                      }
                    >
                      <strong>training</strong>
                    </a>
                    , helping in the{' '}
                    <a
                      href="http://bit.ly/github_prs"
                      target="github"
                      onClick={() =>
                        Event(
                          'About Me',
                          "Clicked GitHub PR's link",
                          "GitHub PR's link",
                        )
                      }
                    >
                      <strong>OSS community</strong>
                    </a>
                    , and letting my imagination run wild at{' '}
                    <Link
                      to="hackathon"
                      activeClass="active"
                      spy
                      smooth
                      duration={1000}
                      onClick={() =>
                        Event(
                          'About Me',
                          'Clicked Hackathons link',
                          'Hackathons link',
                        )
                      }
                    >
                      <strong>hackathons</strong>
                    </Link>
                    .
                  </p>
                </Row>
                <Row>
                  <p>
                    I&apos;m always tinkering with new technologies but here are
                    some of the past ones that I&apos;ve worked with:
                  </p>
                </Row>
              </Row>
              <Row>
                <IconContext.Provider value={{ size: '5em' }}>
                  <FaJava title="Java" />
                  <IoLogoJavascript title="JavaScript" />
                  <FaReact title="React" />
                  <FaGithub title="GitHub" />
                  <FaAws title="Amazon Web Services" />
                  <FaDocker title="Docker" />
                  <DiMysql title="MySql" />
                </IconContext.Provider>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </Container>
  );
};

export default About;
