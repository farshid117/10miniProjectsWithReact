import { Container, Nav, Navbar, NavDropdown, Offcanvas, Form, Button } from 'react-bootstrap';

import "./Navbar.css"

const NavbarShop = () => {
  let expand = "lg"
  return (
    <>
      <Navbar  expand={expand} fixed='top' className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"><span className='fw-bold fs-3'>Ali<span className='text-primary'>Coder</span><span className='fs-5'>.ir</span></span></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <span className='fw-bold fs-3'>Ali<span className='text-primary'>Coder</span><span className='fs-5'>.ir</span></span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/">خانه</Nav.Link>
                <NavDropdown
                  title="محصولات"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">محصول1</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    محصول2
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    محصول 3
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#action2">درباه‌ما</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarShop;
























