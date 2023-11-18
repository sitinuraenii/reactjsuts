import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar text-center" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Siti Nuraeni
          </Navbar.Brand>
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/work" className="nav-link">
              Work
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
