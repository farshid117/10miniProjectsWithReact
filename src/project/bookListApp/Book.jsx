
const Book = ({ id, name, author, year, row, editHandler, deleteHandler }) => {
    return (
        <>

            <tr>
                <th style={{ fontSize: "1rem" }}>{row+1}</th>
                <td style={{ fontSize: "1rem" }}>{name}</td>
                <td style={{ fontSize: "1rem" }}>{author}</td>
                <td style={{ fontSize: "1rem" }}>{year}</td>
                <td style={{ fontSize: "1rem" }}>
                    <div className="d-flex justify-content-center flex-nowrap">
                        <div className='btn btn-sm btn-success me-1' onClick={(event) => editHandler(event, id)}>ویرایش</div>
                        <div className='btn btn-sm btn-danger' onClick={(event) => deleteHandler(event, id)}>حذف</div>

                    </div>
                </td>
            </tr>

        </>
    )
}

export default Book;
