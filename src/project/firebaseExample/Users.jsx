import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiFillDelete } from "react-icons/ai"
import { AiFillEdit } from "react-icons/ai"
import { Modal, Button, Form } from "react-bootstrap"

import "./Users.css"


const Users = () => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    return (
        <>
            <Container>
                <Row style={{ justifyContent: "center", alignItems: "center", marginTop: 15 }} >
                    <Col md={8}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">نام و نام‌خانوادگی</TableCell>
                                        <TableCell align="right">ایمیل</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">
                                                <AiFillDelete style={{ marginLeft: 10, color: "red", cursor: "pointer", fontSize: 25 }}
                                                    onClick={() => setShowDeleteModal(true)}
                                                />
                                                <AiFillEdit style={{ color: "green", cursor: "pointer", fontSize: 25 }}
                                                    onClick={() => setShowEditModal(true)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Col>
                </Row>
            </Container>
            {/* todo: Delete Modal */}
            <Modal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>حذف کاربر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    برادر جان آیا مطمئنی که میخوای این کاربر را حذف کنی؟
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShowDeleteModal(false)}>
                        بستن
                    </Button>
                    <Button variant="danger">حذف</Button>
                </Modal.Footer>
            </Modal>

            {/* todo: Edit Modal */}
            <Modal
                show={showEditModal}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header >
                    <Modal.Title style={{fontWeight:"bold"}}>ویرایش کاربر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fw-bold'>نام و نام‌خانوادگی</Form.Label>
                            <Form.Control type="text" placeholder="نام را وارد کنید" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fw-bold'>ایمیل</Form.Label>
                            <Form.Control type="email" placeholder="ایمیل را وارد کنید" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="تمام مندرجات صحیح میباشد" style={{fontSize:12}} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShowEditModal(false)}>
                        بستن
                    </Button>
                    <Button variant="success">ویرایش</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Users;






