import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Navbar1 = () => {
  let navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container className="d-flex justify-content-beetwen">
        <Navbar.Brand><Link to="/"><h1>BREWDOG</h1></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav defaultActiveKey="/" as="ul" className="ms-auto">
            <Nav.Item as="li">
              <Nav.Link> <Link to=""> Search your beer </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" onClick={() => { navigate(`/beers/random`) }}> Random beer </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2"> <Link to="favourites">Favourites</Link> </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navbar1;