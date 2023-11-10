import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar text-center" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            Siti Nuraeni
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#Hero">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
