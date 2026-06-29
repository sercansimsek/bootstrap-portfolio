import { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  CloseButton,
  NavbarToggler,
} from 'reactstrap';

export const ResponsiveLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavBar = () => setIsOpen(!isOpen);
  return (
    <>
      <Container>
        <Navbar
          color="faded"
          className="navbar-expand-md navbar-light bg-light"
        >
          <NavbarBrand href="#" className="me-auto">
            My Website
          </NavbarBrand>
          {!isOpen ? (
            <CloseButton onClick={toggleNavBar} className="me-2" />
          ) : (
            <NavbarToggler onClick={toggleNavBar} className="me-2" />
          )}
          <Collapse isOpen={!isOpen} navbar>
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
      </Container>
    </>
  );
};
