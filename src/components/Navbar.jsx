import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  CloseButton,
} from 'reactstrap';

export const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        color="faded"
        className="d-flex justify-content-end navbar-expand-md navbar-light bg-light"
      >
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        {!collapsed ? (
          <CloseButton onClick={toggleNavbar} className="me-2" />
        ) : (
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
        )}

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">Homepage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
