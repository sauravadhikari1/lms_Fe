import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { IoLogIn, IoLogOut, IoHome } from "react-icons/io5";


const  Header = ()=> {

  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">LMS</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/"><IoHome /> Home</Link>
            <Link className="nav-link" to="/signup"><IoLogOut /> Sign Up</Link>
            <Link className="nav-link" to="/login"><IoLogIn /> Log In</Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;