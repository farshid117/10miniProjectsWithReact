import {useEffect, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useMediaQuery } from '@mui/material';

import Features from '../features/Features';
import "./HomeModal.css"

const HomeModal = ({ features }) => {
    let matches = useMediaQuery('(min-width:768px)') //MUI
    console.log("matches in Feature component: ", matches);
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (matches) setOpenModal(false);
    }, [matches])

    return (
      <>
            <div className='text-center' >
                <Button variant='primary' className='' onClick={() => { setOpenModal((prev) => !prev) }} >Reports</Button>
            </div>
            <Modal
                show={openModal}
                fullscreen="md-down"
                onHide={() => setOpenModal(false)}
                onClick={() => setOpenModal(false)}
                style={{ color: "#000" }}
                dir="ltr"
               
            >
                <Modal.Header closeButton>
                    <Modal.Title>Reports</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    onClick={() => { setOpenModal((prev) => !prev) }}
                    style={{ backgroundColor: "blueviolet" }}
                >
                    <div className="row justify-content-center mt-3">
                        {
                            features.map((feature) => (
                                <div className="col-10">
                                    <Features key={feature.title} {...feature} />
                                </div>
                            ))
                        }
                    </div>
                </Modal.Body>
            </Modal>
      </>
    );
}

export default HomeModal;
