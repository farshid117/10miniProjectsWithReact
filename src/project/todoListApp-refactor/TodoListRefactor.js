import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert';

import { MdAddBox } from "react-icons/md"

import Header from "./Header"
import Todo from "./Todo"

import "./TodoList.css"

const TodoListRefactor = () => {
    const [todoTitle, setTodoTitle] = useState("")
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("All")

    const textChangeHandler = (event) => {
        setTodoTitle(event.target.value)
    }
    const addTodoSubmitHandler = (event) => {
                event.preventDefault() //first job for not refresh
            if(todoTitle){
                setTodos([
                        ...todos,
                            {
                            id: uuidv4(),
                            completed: false,
                            checked: false,
                            title: todoTitle
                            }
                    ]
                )
                setTodoTitle("")
            }
    }
    const checkedHandler = (event, todoId) => {
            if (event.target.checked) {
                setStatus("Completed")
                let todoIndex = todos.findIndex(todo => todo.id === todoId)
                let todo = todos.find(todo => todo.id === todoId)
                todo.completed = true
                todo.checked = true
                let copyTodos = [...todos]
                copyTodos[todoIndex] = todo
                setTodos(copyTodos)

            } else {
                setStatus("Uncompleted")
                let todoIndex = todos.findIndex(todo => todo.id === todoId)
                let todo = todos.find(todo => todo.id === todoId)
                todo.completed = false
                todo.checked = false
                let copyTodos = [...todos]
                copyTodos[todoIndex] = todo
                setTodos(copyTodos)
            }


    }
    const confirmDeleteHandler = (event, id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui bg-info p-5 rounded-5' style={{fontFamily: "Vazir"}} >
                        <h1 className='text-dark'>آیا مطمئن هستی</h1>
                        <p className='text-dark'>که میخواهی این کار را حذف کنی؟</p>
                       
                        <button
                            className='btn btn-danger me-2'
                            onClick={() => {
                                removeHandler(event, id);
                                onClose();
                            }}
                        >
                            حذف کن
                        </button>
                        <button className='btn btn-secondary' onClick={onClose}>انصراف</button>
                    </div>
                );
            }
        });
    }
    const removeHandler = (event, todoId) => {

            let newTodos = todos.filter(todo => todo.id !== todoId)
            setTodos(newTodos)
            toast.success('کار مورد نظر حذف گردید', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    }
    const statusOnchangeHandler = (event) => {
          setStatus(event.target.value) //for <select> elements
    }

    
        return (
            <div className='TodoList'>
                <Helmet>
                    <title>لیست کارها | 10 مینی پروژه ری‌اکت</title>
                </Helmet>
                <Header />
                <section id='todoList'>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                    {/* todo: import Todo & Filter */}
                                        <form onSubmit={(event) => addTodoSubmitHandler(event)}>
                                            <div className="row align-items-center">
                                                <div className="col-md-8">
                                                    <div className="input-group input-group-lg mb-3">
                                                        <input type="text" className="form-control" value={todoTitle} onChange={(event) => textChangeHandler(event)} placeholder="کاری را وارد نمائید" />
                                                        <button className="btn btn-outline-secondary text-primary" type='submit' style={{ fontSize: 20 }}><MdAddBox /></button>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <select className="form-select form-select-lg mb-3" dir='rtl' onChange={statusOnchangeHandler}>
                                                        <option value="All">همه</option>
                                                        <option value="Completed">انجام شده</option>
                                                        <option value="Uncompleted">انجام نشده</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                        {/* todo: Todo List Section */}
                                        <section id='Todo-List'>
                                            <div className="row justify-content-center">
                                                <div className="col-md-10">
                                                    <div className="card bg-primary-subtle" style={{ display: todos.length ? "block" : "none" }}>
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
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    
}

export default TodoListRefactor;