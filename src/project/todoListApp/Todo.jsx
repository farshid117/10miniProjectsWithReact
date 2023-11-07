import React, { Component } from 'react'
import { BsTrash } from "react-icons/bs"



class Todo extends Component {

    render() {
        const { id, title, completed, checked, checkedHandler, removeHandler } = this.props
        return (
            <>
                <li>
                    <div className="input-group input-group-lg mb-3">
                        <input type="text" className={`form-control ${completed ? "completed" : ""} `} value={title}  readOnly/>
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox" checked={checked} onChange={(event) => checkedHandler(event, id)} />
                        </div>
                        <button className="btn btn-outline-secondary text-danger" type="button"  onClick={event => removeHandler(event, id)}><BsTrash /></button>
                    </div>
                </li>
            </>
        );
    }
}
 
export default Todo;