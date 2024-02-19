import { useState, useEffect } from 'react';
const MainPagination = () => {
    const [todos, setTodos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isPending, setIsPending] = useState(true)
    const [pagesNumber, setPagesNumber] = useState(0)
    const [todosPerPage, setTodosPerPage] = useState([])
    const pageSize = 10


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((todos) => {
                setTodos(todos)
                setPagesNumber(Math.ceil(todos.length / pageSize)) // 200 / 10 = 20
                setIsPending(false)
            })
    }, [])

    const todosPerPageHandler = (current) => {
        setCurrentPage(current)
        let endIndex = pageSize * currentPage
        let startIndex = endIndex - pageSize

        setTodosPerPage(todos.slice(startIndex, endIndex))
    }

    const editHandler = (event, id) => {
    }
    const deleteHandler = (event, id) => {
    }
    return (
        <>
            {
                !isPending ? (
                    <>
                        <div className="card w-75 m-auto mt-5 ">
                            <div className="card-header bg-primary text-white">
                                <h3 className='mt-3 text-center fw-bold'>Todos List That Fetch from
                                    <span className='text-warning' > jsonplaceholder.com</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive mt-3" >
                                    <table className="table table-striped  m-auto p-4 align-middle " dir='ltr'>
                                        <thead className=''>
                                            <tr key={1}>
                                                <th scope="col">id</th>
                                                <th scope="col">userId</th>
                                                <th scope="col">title</th>
                                                <th scope="col">completed</th>
                                                <th scope="col">action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                todosPerPage.map(todo => (
                                                    <tr key={todo.id}>
                                                        <th scope="row">{todo.id}</th>
                                                        <td>{todo.userId}</td>
                                                        <td>{todo.title}</td>
                                                        <td>
                                                            <span className={todo.completed ? "badge bg-success" : "badge bg-primary"}>
                                                                {todo.completed ? "completed" : "uncompleted"}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <button className='btn btn-primary btn-sm ms-1' onClick={(event) => editHandler(event, todo.id)}>Edit</button>
                                                            <button className='btn btn-danger btn-sm' onClick={(event) => deleteHandler(event, todo.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <section id='pagination' className='d-flex justify-content-center mt-3'>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#b" alt="prev" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    {
                                        Array.from(Array(pagesNumber).keys()).map(index => (
                                            <li
                                                key={index + 1}
                                                className={index + 1 === currentPage ? "page-item active" : "page-item "}

                                            >
                                                <a
                                                    className="page-link"
                                                    alt="one"
                                                    href="#a"
                                                    onClick={() => todosPerPageHandler(index + 1)}
                                                >
                                                    {index + 1}
                                                </a>
                                            </li>

                                        ))
                                    }
                                    <li className="page-item">
                                        <a className="page-link" href="a" alt="next" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </>
                ) : (
                    <>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img src={require("../../assets/Spinner.gif")} alt="loading" />
                            <p className='fs-2'>صبور باشید در حال دریافت اطلاعات از سرور هستیم</p>
                        </div>
                    </>
                )
            }
        </>

    );
}

export default MainPagination;
