import React, { Component } from 'react'

class Book extends Component {

    render() {
        const { id, name, author, year } = this.props
        //  console.log(this.props)
        return (
            <>

                <tr>
                    <th>{id}</th>
                    <td>{name}</td>
                    <td>{author}</td>
                    <td>{year}</td>
                    <td>
                        <div className='btn btn-sm btn-success'>ویرایش</div>
                        <div className='btn btn-sm btn-danger'>حذف</div>
                    </td>
                </tr>

            </>
        );
    }
}

export default Book;