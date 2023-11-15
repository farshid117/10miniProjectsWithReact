import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert';



import Header from "./Header"
import FormTodoList from './FormTodoList';
import TodoList from './TodoList';


import "./TodoList.css"

const TodoListRefactor = () => {

    const [todoTitle, setTodoTitle] = useState("") //for text input
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("All")


    const textChangeHandler = (event) => {
        setTodoTitle(event.target.value)
    }
    const addTodoSubmitHandler = (event) => {
        event.preventDefault() //first job for not refresh
        if (todoTitle) {
            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    title: todoTitle,
                    completed: false,
                    checked: false,
                }
            ]
            )
            setTodoTitle("")
        }
    }
    const checkedHandler = (event, todoId) => {
        let todoIndex = todos.findIndex(todo => todo.id === todoId)
        let todo = todos.find(todo => todo.id === todoId)
        todo.completed = !todo.completed
        todo.checked = !todo.checked
        let copyTodos = [...todos]
        copyTodos[todoIndex] = todo
        setTodos(copyTodos)
    }
    const confirmDeleteHandler = (event, id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui bg-info p-5 rounded-5' style={{ fontFamily: "Vazir" }} >
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
                                    {/* FormTodoList */}
                                    <FormTodoList
                                        todoTitle={todoTitle}
                                        addTodoSubmitHandler={addTodoSubmitHandler}
                                        textChangeHandler={textChangeHandler}
                                        statusOnchangeHandler={statusOnchangeHandler}
                                    />
                                    {/* todo: Todo List Section */}
                                    <TodoList
                                        todos={todos}
                                        status={status}
                                        checkedHandler={checkedHandler}
                                        confirmDeleteHandler={confirmDeleteHandler}

                                    />
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