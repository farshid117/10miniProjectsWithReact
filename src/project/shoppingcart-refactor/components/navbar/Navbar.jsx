import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Container, Nav, Navbar, NavDropdown, Offcanvas, Form, Button } from 'react-bootstrap';

import "./Navbar.css"

const NavbarShop = () => {
  const [scrolling, setScrolling] = useState(false)
  const [y, setY] = useState(0);
  
  
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    console.log(" window: ",  window);
    console.log("scroll window is",y)

    setY(window.scrollY);
    if (y > 10){
      setScrolling(true);
    }else{
      setScrolling(false);
    }
  };
  useEffect(() => {

    window.addEventListener("scroll", (e) => handleNavigation(e));
  },[scrolling,y]);

 
  const navbarClass = classnames({
    headerScroll: scrolling,
  })
  let expand = "lg"
  return (
    <>
      <header id="header-shop">
        <Navbar expand={expand} fixed='top' className={`text-light ${navbarClass}`} >
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
      </header>
    </>
  );
}

export default NavbarShop;
























