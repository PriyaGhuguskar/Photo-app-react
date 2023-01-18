import { Navbar, Container, Nav } from 'react-bootstrap';
import brandlogo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Navbarcompo = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="logo"
            src={brandlogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>


          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarcompo