import { MdAddBox } from "react-icons/md"

const FormTodoList = ({ todoTitle, addTodoSubmitHandler, textChangeHandler, statusOnchangeHandler }) => {
    return (
        <form onSubmit={(event) => addTodoSubmitHandler(event)}>
            <div className="row align-items-center">
                <div className="col-md-7">
                    <div className="input-group input-group-lg mb-3">
                        <input type="text" className="form-control" value={todoTitle} onChange={(event) => textChangeHandler(event)} placeholder="کاری را وارد نمائید" />
                        <button className="btn btn-outline-secondary text-primary fs-4" type='submit' style={{ fontSize: 25 }}><MdAddBox /></button>
                    </div>
                </div>
                <div className="col-md-4 offset-md-1 ">
                    <select className="form-select form-select-lg mb-3" dir='rtl' onChange={statusOnchangeHandler}>
                        <option value="All">همه</option>
                        <option value="Completed">انجام شده</option>
                        <option value="Uncompleted">انجام نشده</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default FormTodoList;
