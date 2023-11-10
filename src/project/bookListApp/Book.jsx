import React, { Component } from 'react'

class Book extends Component {

    render() {
        const { id, name, author, year } = this.props
        //  console.log(this.props)
        return (
            <>

                <tr>
                    <th style={{ fontSize: "1rem"}}>{id}</th>
                    <td style={{ fontSize: "1rem" }}>{name}</td>
                    <td style={{ fontSize: "1rem" }}>{author}</td>
                    <td style={{ fontSize: "1rem" }}>{year}</td>
                    <td style={{ fontSize: "1rem" }}>
                    <div className="d-flex justify-content-center flex-nowrap">
                            <div className='btn btn-sm btn-success me-1'>ویرایش</div>
                            <div className='btn btn-sm btn-danger'>حذف</div>

                    </div>
                    </td>
                </tr>

            </>
        );
    }
}

export default Book;