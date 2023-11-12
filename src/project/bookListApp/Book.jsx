import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Book = ({ id, name, author, year, row, editHandler, deleteHandler, openEditModal, openEditModalHandler }) => {
    return (
        <>

            <tr>
                <th style={{ fontSize: "1rem" }}>{row + 1}</th>
                <td style={{ fontSize: "1rem" }}>{name}</td>
                <td style={{ fontSize: "1rem" }}>{author}</td>
                <td style={{ fontSize: "1rem" }}>{year}</td>
                <td style={{ fontSize: "1rem" }}>
                    <div className="d-flex justify-content-center flex-nowrap">
                        { /* Button trigger modal */}
                        <button type="button" className="btn btn-sm btn-success me-1" onClick={()=>openEditModalHandler()}>
                            ویرایش
                        </button>
                        <div className='btn btn-sm btn-danger' onClick={(event) => deleteHandler(event, id)}>حذف</div>

                    </div>
                </td>
            </tr>

            { /* Modal */}
            <Modal show={openEditModal} onHide={openEditModalHandler} className='text-dark'>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={openEditModalHandler}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={openEditModalHandler}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Book;
