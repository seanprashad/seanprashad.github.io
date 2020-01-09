import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { ParallaxBanner } from 'react-scroll-parallax';

import backgroundImg from '../../images/backgrounds/hackathon.jpg';

import tohacksImg from '../../images/hackathons/tohacks.png';
import hackingGoodImg from '../../images/hackathons/hacking-good.png';
import genesysImg from '../../images/hackathons/genesys.png';
import rbcNGIImg from '../../images/hackathons/rbc-ngi.png';
import openIDEOImg from '../../images/hackathons/open-ideo.png';
import gmHackAIImg from '../../images/hackathons/gm-hack-ai.png';
import osceDaysImg from '../../images/hackathons/osce-days.png';

import './styles.scss';

const Hackathon = () => {
  return (
    <ParallaxBanner
      className="hackathon-parallax"
      layers={[
        {
          image: JSON.stringify(backgroundImg),
          amount: 0.2,
        },
      ]}
    >
      <Container className="hackathon" fluid>
        <Col>
          <Row>
            <h2>Hackathons</h2>
          </Row>
          <Col>
            <Col>
              <Row>
                <Col sm={3}>
                  <h4>
                    <span className="winna">4th Place</span> - Genesys Hackathon
                  </h4>
                  <img src={genesysImg} alt="genesys" />
                </Col>
              </Row>

              <Row>
                <Col sm={3}>
                  <h4>
                    <span className="winna">2nd Place</span> - HackingGood 2017
                  </h4>
                  <img src={hackingGoodImg} alt="hackingGood" />
                </Col>
                <Col sm={3}>
                  <h4>Mentor & Judge - TOHacks 2018</h4>
                  <img src={tohacksImg} alt="toHacks" />
                </Col>
                <Col sm={3}>
                  <h4>RBC Next Great Innovator</h4>
                  <img src={rbcNGIImg} alt="rbcNGI" />
                </Col>
              </Row>

              <Row>
                <Col sm={3}>
                  <h4>OpenIDEO 2017</h4>
                  <img src={openIDEOImg} alt="openIDEO" />
                </Col>
                <Col sm={3}>
                  <h4>GM HackAI</h4>
                  <img src={gmHackAIImg} alt="gmHackAI" />
                </Col>
                <Col sm={3}>
                  <h4>
                    <span className="winna">3rd Place</span> - OSCE Days 2017
                  </h4>
                  <img src={osceDaysImg} alt="osceDays" />
                </Col>
              </Row>
            </Col>
          </Col>
        </Col>
      </Container>
    </ParallaxBanner>
  );
};

export default Hackathon;
