import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pokédex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/normal">Normal</Nav.Link>
            <Nav.Link href="">Fire</Nav.Link>
            <Nav.Link href="">Electric</Nav.Link>
            <Nav.Link href="">Grass</Nav.Link>
            <Nav.Link href="">Ice</Nav.Link>
            <Nav.Link href="">Fighting</Nav.Link>
            <Nav.Link href="">Poison</Nav.Link>
            <Nav.Link href="">Ground</Nav.Link>
            <Nav.Link href="">Flying</Nav.Link>
            <Nav.Link href="">Physhic</Nav.Link>
            <Nav.Link href="">Bug</Nav.Link>
            <Nav.Link href="">Rock</Nav.Link>
            <Nav.Link href="">Ghost</Nav.Link>
            <Nav.Link href="">Dragon</Nav.Link>
          </Nav>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
