import { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const MainPagination = () => {
    const [todos, setTodos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pending, setPending] = useState(true)
    const [totalpagese, setTotalpages] = useState(0)
    const [todosCurrentPage, setTodosCurrentPage] = useState([])

    //todo: pageSize
    const pageSize = 10

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((datas) => {
                setTodos(datas) /* Pls Note: setState is Async Operation */
                setTotalpages(Math.ceil(datas.length / pageSize)) // 200 / 10 = 20
                
                let endIndex =  currentPage * pageSize  //calculate datas for page 1
                let startIndex = endIndex - pageSize
                setTodosCurrentPage(datas.slice(startIndex, endIndex))

                setPending(false)
            })
    }, []);

    useEffect(() => {
        setTotalpages(Math.ceil(todos.length / pageSize)) // 200 / 10 = 20
        let endIndex = currentPage * pageSize
        let startIndex = endIndex - pageSize
        setTodosCurrentPage(todos.slice(startIndex, endIndex))
    }, [pageSize])

    useEffect(()=>{
        let endIndex = pageSize * currentPage
        let startIndex = endIndex - pageSize
        setTodosCurrentPage(todos.slice(startIndex, endIndex))
    },[currentPage])
    

    const todosCurrentPageHandler = (current) => {
        setCurrentPage(current)  /* Pls Note: setState is Asyn Operation */

        /* let endIndex = pageSize * current
        let startIndex = (endIndex - pageSize)
        setTodosCurrentPage(todos.slice(startIndex, endIndex)) */
    }

    const editHandler = (event, id) => {
    }
    const deleteHandler = (event, id) => {
    }
    return (
        <>
            {
                !pending ? (
                    <>
                        <Grid container spacing={2} justifyContent="center" >
                            <Grid xs={11}>
                                <div className="card m-auto mt-5 ">
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
                                                        todosCurrentPage.map(todo => (
                                                            <tr key={todo.id}>
                                                                <th scope="row">{todo.id}</th>
                                                                <td>{todo.userId}</td>
                                                                <td>{todo.title}</td>
                                                                <td>
                                                                    <span className={todo.completed ? "text-success fw-bold" : "text-danger fw-bold fs-6"}>
                                                                        {todo.completed ? "completed" : "uncompleted"}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button className='btn btn-success btn-sm ms-1' onClick={(event) => editHandler(event, todo.id)}>Edit</button>
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
                            </Grid>
                            <Grid xs={12}>
                                <section id='pagination' className='d-flex justify-content-center flex-wrap mt-3'>
                                    <nav >
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#b" alt="prev" >
                                                    <span aria-hidden="true">«</span>
                                                </a>
                                            </li>
                                            {
                                                Array.from(Array(totalpagese).keys()).map(index => (
                                                    <li
                                                        key={index + 1}
                                                        className={index + 1 === currentPage ? "page-item active" : "page-item "}
                                                        onClick={() => todosCurrentPageHandler(index + 1)}
                                                    >
                                                        <a
                                                            className="page-link"
                                                            alt="one"
                                                            href="#a"

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
                            </Grid>
                        </Grid>
                    </>
                ) : (

                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={require("../../assets/Spinner.gif")} alt="loading" />
                        <p className='fs-2'>صبور باشید در حال دریافت اطلاعات از سرور هستیم</p>
                    </div>

                )
            }
        </>

    );
}

export default MainPagination;
