import { useState, useEffect } from 'react';
const MainPagination = () => {
    const [todos, setTodos] = useState([])
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(datas => {
                setTodos(datas)
                setIsPending(false)
                console.log(datas)})
    }, [])

    const editHandler = (event, id) => {
        console.log("event1 is : ", event)
        console.log("id for edit is :" , id)
    }
    const deleteHandler = (event, id) => {
        console.log("event2 is : ",event)
        console.log("id for delete is :" , id)
    }

    return (
        <>
            <div className="table-responsive" >
                <table className="table table-striped w-75 m-auto p-4" dir='ltr'>
                    <thead className=''>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">userId</th>
                            <th scope="col">title</th>
                            <th scope="col">completed</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        todos.map(todo =>(
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
                                    <button className='btn btn-primary btn-sm ms-1' onClick={(event)=>editHandler(event, todo.id)}>Edit</button>
                                    <button className='btn btn-danger btn-sm' onClick={(event) => deleteHandler(event, todo.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default MainPagination;
