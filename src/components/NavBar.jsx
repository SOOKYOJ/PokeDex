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
            <Nav.Link href="/fire">Fire</Nav.Link>
            <Nav.Link href="/electric">Electric</Nav.Link>
            <Nav.Link href="/grass">Grass</Nav.Link>
            <Nav.Link href="/ice">Ice</Nav.Link>
            <Nav.Link href="/fighting">Fighting</Nav.Link>
            <Nav.Link href="/poison">Poison</Nav.Link>
            <Nav.Link href="/ground">Ground</Nav.Link>
            <Nav.Link href="/flying">Flying</Nav.Link>
            <Nav.Link href="/phychic">Psychic</Nav.Link>
            <Nav.Link href="/bug">Bug</Nav.Link>
            <Nav.Link href="/rock">Rock</Nav.Link>
            <Nav.Link href="/ghost">Ghost</Nav.Link>
            <Nav.Link href="/dragon">Dragon</Nav.Link>
          </Nav>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
