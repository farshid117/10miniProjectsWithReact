import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

//todo: Modal Basic
export function ModalBasic() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='text-center mt-5'>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                size=''
                backdrop="static" //in Bootstrap in tag with .modal --> Put: data-bs-bacdrop = "static"
                keyboard={false}
                centered
                className='text-dark'
            >

                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"   onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

//todo: Modal With Form Content autoFocus on Input
export function ModalWithFormFocus() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='text-center mt-5'>
                <Button variant="primary" onClick={handleShow} >
                    ModalWithFormFocus
                </Button>
            </div>

            <Modal
                show={show}
                onHide={handleClose} //happen in 2 ways: click on closeButton & click on outside Modal(backdrop) if not Static
                fullscreen={"lg-down"} //Bootstarp: in .modal.dialog add --> modal-fullscreen-sm-down
                centered //Bootstarp: in .modal.dialog add --> modal-dialog-centered
                scrollable //Bootstarp: in .modal.dialog add --> modal-dialog-scrollable
                size='lg' //Bootstarp: in .modal.dialog add --> modal-lg(sm-xl)
                className='text-dark bg-primary'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ادرس ایمیل : </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>درباره خودتان : </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='چند خط درباره خودتان بنویسید' />
                        </Form.Group>
                    </Form>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
