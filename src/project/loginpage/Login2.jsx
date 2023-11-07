import React, { Component } from 'react'
import { Helmet } from 'react-helmet-async';
import {Container, Row, Col, Image, Form, Button} from "react-bootstrap"

import NavbarLogin from "./Navbar"

class Login2 extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{height: "auto", overflow: "hidden "}} >
                <Helmet>
                    <title>صفحه لاگین | 10 مینی پروژه ری‌اکت</title>
                </Helmet>
                <NavbarLogin />
                <Container >
                    <Row className='mt-5 align-items-center ' >
                        <Col xs={12} md={6} className='text-center'>
                            <Image src='img/111.png' fluid  style={{display: "imline-block", width:"70%"}}/>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>ایمیل : </Form.Label>
                                    <Form.Control type="email" placeholder="ایمیل را وارد کنید" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>پسورد :</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="قوانین را مطالعه کردم و قبول دارم" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    ارسال
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
 
export default Login2;