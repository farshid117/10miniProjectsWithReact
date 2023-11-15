import { BsTrash } from "react-icons/bs"



const Todo = ({ id, title, completed, checked, checkedHandler, removeHandler }) => {
    
        return (
            <>
                <li>
                    <div className="input-group input-group-lg mb-3">
                        <input type="text" className={`form-control  ${completed ? "completed" : ""} `} value={title}  readOnly/>
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox"  checked={checked} onChange={(event) => checkedHandler(event, id)} />
                        </div>
                        <button className="btn btn-outline-secondary text-danger" type="button"  onClick={event => removeHandler(event, id)}><BsTrash /></button>
                    </div>
                </li>
            </>
        );
    }

 
export default Todo;