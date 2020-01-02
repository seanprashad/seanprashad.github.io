import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>Sean Prashad</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
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
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://bit.ly/seanprashad_medium">Blog</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
