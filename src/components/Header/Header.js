import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (

   <div style={{background:"black", color:"white"}}>
      <Navbar bg="dark" expand="lg" variant="dark">
         <Container>
            <Navbar.Brand className="logo" href="#">BookMyShow</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
               >
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                     <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="/register">
                        User Registration
                     </NavDropdown.Item>
                  </NavDropdown>
                  
               </Nav>
               <Form className="d-flex">
                  {/* <FormControl
                     type="search"
                     placeholder="Search"
                     className="me-2"
                     aria-label="Search"
                  /> */}
                  <Button href="/register" variant="outline-success">Sign up</Button>
               </Form>
            </Navbar.Collapse>
         </Container>
      </Navbar>
      <Container className="d-flex">
         <p><u>Movies</u></p>&nbsp;&nbsp;&nbsp;
         <p><u>Streams</u></p>&nbsp;&nbsp;&nbsp;
         <p><u>Songs</u></p>&nbsp;&nbsp;&nbsp;
         <p><u>Sports</u></p>
      </Container>
   </div>
  );
}

export default Header;
