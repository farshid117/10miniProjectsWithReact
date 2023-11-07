import { useState } from 'react';
import axios from "axios"

import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const LoginForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleRegister = (event) => {
        console.log("submit Ok!")
        event.preventDefault()
        let userInfo ={
            name,
            email
        }
        console.log(userInfo)
        axios.post("https://bimehonline-3794b-default-rtdb.firebaseio.com/user",
        userInfo
        )
        .then((response) => console.log(response))
        .catch(err => console.log("Error is",err))
    }
  

    return (
        <Container>
            <Row>
                <Col style={{ height: 500, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontSize: 14, color: "white", fontWeight: "bold" }} >نام و نام خانوادگی</Form.Label>
                            <Form.Control type="text"
                                placeholder="نام و نام خانوادگی را وارد کنید"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            <Form.Text className="text-muted d-none" >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>ایمیل</Form.Label>
                            <Form.Control type="email" placeholder="ایمیل را وارد کنید"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox"
                                style={{ fontSize: 12, color: "white" }}
                                label="قوانین و مقررات را میپذیرم." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            ثبت نام
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;


