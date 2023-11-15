import Todo from "./Todo"


const TodoList = ({ status, todos, checkedHandler, confirmDeleteHandler }) => {
    return (
        <div id='Todo-List'>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card bg-primary-subtle" style={{ display: todos.length>0 ? "block" : "none" }}>
                        <div className="card-body">
                            <ul className='list-unstyled'>
                                {
                                    status === "All" &&
                                    todos.map((todo) => (
                                        <Todo key={todo.id} {...todo} checkedHandler={checkedHandler} removeHandler={confirmDeleteHandler} />
                                    ))
                                }
                                {
                                    status === "Completed" &&
                                    todos.filter(todo => todo.completed === true).map((todo) => (
                                        <Todo key={todo.id} {...todo} checkedHandler={checkedHandler} removeHandler={confirmDeleteHandler} />
                                    ))
                                }
                                {
                                    status === "Uncompleted" &&
                                    todos.filter(todo => todo.completed === false).map((todo) => (
                                        <Todo key={todo.id} {...todo} checkedHandler={checkedHandler} removeHandler={confirmDeleteHandler} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TodoList;
