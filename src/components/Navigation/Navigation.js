import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

import { Link } from 'react-scroll';

import './Navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" fixed="top">
      <Container>
        <Link
          to="intro"
          className="navbar-brand"
          activeClass="active"
          spy
          smooth
          duration={1000}
        >
          Sean Prashad
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="about" activeClass="active" spy smooth duration={1000}>
                About Me
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="education"
                activeClass="active"
                spy
                smooth
                duration={1000}
              >
                Education
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="experience"
                activeClass="active"
                spy
                smooth
                duration={1000}
              >
                Experience
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="open-source"
                activeClass="active"
                spy
                smooth
                duration={1000}
              >
                Open Source
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="hackathon"
                activeClass="active"
                spy
                smooth
                duration={1000}
              >
                Hackathons
              </Link>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://bit.ly/seanprashad_medium">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <Link
                to="contact"
                activeClass="active"
                spy
                smooth
                duration={1000}
              >
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
