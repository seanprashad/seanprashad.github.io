import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

import './Navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" sticky="top">
      <Container>
        <NavbarBrand>Sean Prashad</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#about">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#education">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#open-source">Open Source</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#hackathons">Hackathons</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://bit.ly/seanprashad_medium">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
