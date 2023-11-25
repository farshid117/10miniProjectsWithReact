import React, { Component } from 'react'
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap"

import NavbarLogin from "./Navbar"

class Login2 extends Component {
    state = {}
    render() {
        return (
            <div
             style={{ height: "auto", overflow: "hidden",}}
             
             >
                <Helmet>
                    <title>صفحه لاگین | 10 مینی پروژه ری‌اکت</title>
                </Helmet>
                <NavbarLogin />

                <Container style={{height:"100vh"}} >
                    <Row className='align-items-center  h-100 ' >
                        <Col xs={12} md={4}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>ایمیل : </Form.Label>
                                    <Form.Control type="email" placeholder="ایمیل را وارد کنید" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>پسورد :</Form.Label>
                                    <Form.Control type="password" placeholder="پسورد" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="قوانین را مطالعه کردم و قبول دارم" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    ارسال
                                </Button>
                            </Form>
                        </Col>

                        <Col xs={12} md={{ span: 7, offset: 1 }} className='text-center'>
                            <Image src='img/114.jpg' fluid
                                style={{
                                    display: "inline-block",
                                    borderRadius: 30,
                                    border: "3px solid rgba(255,255,255)"
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default Login2;