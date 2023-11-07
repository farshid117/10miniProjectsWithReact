import React, { Component } from 'react'

class Post extends Component {
    state = {  } 
    render() { 
        const {id, userId, title, body} = this.props
        return (
            <>
                <tr>
                    <th>{id}</th>
                    <td>{userId}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            </>
        );
    }
}
 
export default Post;