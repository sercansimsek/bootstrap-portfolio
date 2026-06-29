import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  CloseButton,
  NavbarToggler,
  Button,
} from 'reactstrap';
import logo from '../assets/S-Logo.png';

const navbarButton = {
  color: '#34E0A1',
  borderColor: '#34E0A1',
  backgroundColor: '#34E0A1',
  height: '40px',
  width: '40px',
  padding: 0,
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavBar = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar
        className="navbar-expand-md p-3"
        style={{ backgroundColor: '#000' }}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <NavbarBrand href="#" className="me-3">
            <img
              src={logo}
              alt="logo"
              style={{ height: '50px', width: 'auto' }}
            />
          </NavbarBrand>

          <div className="d-flex align-items-center d-md-none">
            {!isOpen ? (
              <CloseButton
                onClick={toggleNavBar}
                className="me-2 d-flex align-items-center justify-content-center"
                style={navbarButton}
              />
            ) : (
              <NavbarToggler
                onClick={toggleNavBar}
                className="me-2 d-flex align-items-center justify-content-center"
                style={navbarButton}
              />
            )}
          </div>
        </div>

        <Collapse isOpen={!isOpen} navbar className="w-100">
          <Nav navbar className="ms-auto align-items-md-center">
            <NavItem>
              <NavLink href="#" style={{ color: '#34E0A1' }}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{ color: '#34E0A1' }}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{ color: '#34E0A1' }}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <Button className="btn btn-secondary btn-sm p-0">
                <NavLink href="#" style={{ color: '#34E0A1' }}>
                  Contact
                </NavLink>
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
