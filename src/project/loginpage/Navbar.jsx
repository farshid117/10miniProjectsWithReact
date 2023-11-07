import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap"


class NavbarLogin extends Component {
    
    state = {}
    render() {
        return (
            <>
                <Container fluid className='p-0' >
                    <Navbar collapseOnSelect expand="lg" bg="primary" variant='dark' >
                        <Container fluid>
                            <Navbar.Brand href="#" className='fw-bold'>بیمه آنلاین</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="/">خانه</Nav.Link>
                                    <Nav.Link href="#action2">درباره ما</Nav.Link>
                                    <NavDropdown title="لیست پروژه‌ها" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">پروژه 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            پروژه 2
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            پروژه 3
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#" >
                                       تماس با ما
                                    </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="جستجو کنید ..."
                                        className="me-2"
                                    />
                                    <Button variant="success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </>
        );
    }
}

export default NavbarLogin;