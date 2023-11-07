import React, { Component } from 'react'

class Book extends Component {

    render() {
      //  console.log(this.props)
        return (
            <>

                <tr>
                    <th>{this.props.id}</th>
                    <td>{this.props.name}</td>
                    <td>{this.props.author}</td>
                    <td>{this.props.year}</td>
                </tr>

            </>
        );
    }
}

export default Book;