import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-scroll';
import DevIcon from 'devicon-react-svg';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Event } from '../Shared/Tracking';

import backgroundImg from '../../images/backgrounds/about.jpg';
import aboutImg from '../../images/about.jpg';

import './styles.scss';

const About = () => {
  return (
    <ParallaxBanner
      className="about-parallax"
      layers={[
        {
          image: JSON.stringify(backgroundImg),
          amount: 0.25,
        },
      ]}
    >
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
              <Col sm={3}>
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
                      <strong>Hackathons</strong>
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
              </Col>
              <Col sm={2}>
                <DevIcon viewBox="0 0 32 32" icon="java" />
                <DevIcon viewBox="0 0 32 32" icon="javascript" />
                <DevIcon viewBox="0 0 32 32" icon="go" />
                <DevIcon viewBox="0 0 32 32" icon="react" />
                <DevIcon viewBox="0 0 32 32" icon="github_badge" />
                <DevIcon viewBox="0 0 32 32" icon="docker" />
                <DevIcon viewBox="0 0 32 32" icon="mysql" />
              </Col>
            </Row>
          </Col>
        </Col>
      </Container>
    </ParallaxBanner>
  );
};

export default About;
