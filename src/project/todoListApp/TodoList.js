import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert';
import { MdAddBox } from "react-icons/md"

import Header from "./Header"
import Todo from "./Todo"

import "./TodoList.css"

class TodoList extends Component {
    state = {
        todos: [],
        status: "All",
        todoTitle: "",
    }

    textChangeHandler = (event) => {
        this.setState({ todoTitle: event.target.value })
    }
    addTodoSubmitHandler = (event) => {
        event.preventDefault() //first job for not refresh
       if(this.state.todoTitle){
           this.setState({
               todos: [
                   ...this.state.todos, {
                       id: uuidv4(),
                       completed: false,
                       checked: false,
                       title: this.state.todoTitle
                   }
               ]
           })
           this.setState({ todoTitle: "" })
       }
    }
    checkedHandler = (event, todoId) => {
        if (event.target.checked) {
            let todoIndex = this.state.todos.findIndex(todo => todo.id === todoId)
            let todo = this.state.todos.find(todo => todo.id === todoId)
            let copyTodos = [...this.state.todos]
            todo.completed = true
            todo.checked = true
            copyTodos[todoIndex] = todo
            this.setState({ todos: copyTodos })

        } else {
            this.setState({ checked: event.target.checked })
            let todoIndex = this.state.todos.findIndex(todo => todo.id === todoId)
            let todo = this.state.todos.find(todo => todo.id === todoId)
            let copyTodos = [...this.state.todos]
            todo.completed = false
            todo.checked = false
            copyTodos[todoIndex] = todo
            this.setState({ todos: copyTodos })
        }


    }
    confirmDeleteHandler = (event, id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui bg-info p-5 rounded-5' style={{fontFamily: "Vazir"}} >
                        <h1 className='text-dark'>آیا مطمئن هستی</h1>
                        <p className='text-dark'>که میخواهی این کار را حذف کنی؟</p>
                       
                        <button
                            className='btn btn-danger me-2'
                            onClick={() => {
                                this.removeHandler(event, id);
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
    removeHandler = (event, todoId) => {

        let newTodos = this.state.todos.filter(todo => todo.id !== todoId)
        this.setState({ todos: newTodos })
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
    statusOnchangeHandler = (event) => {
        this.setState({ status: event.target.value })
    }

    render() {
        const { todos, todoTitle, status, } = this.state
        return (
            <div className='TodoList '>
                <Header />
                <section id='todoList overflow-scroll h-100'>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card ">
                                    <div className="card-body">
                                    {/* todo: import Todo & Filter */}
                                        <form onSubmit={(event) => this.addTodoSubmitHandler(event)}>
                                            <div className="row align-items-center">
                                                <div className="col-md-8">
                                                    <div className="input-group input-group-lg mb-3">
                                                        <input type="text" className="form-control" value={todoTitle} onChange={(event) => this.textChangeHandler(event)} placeholder="کاری را وارد نمائید" />
                                                        <button className="btn btn-outline-secondary text-primary" type='submit' style={{ fontSize: 20 }}><MdAddBox /></button>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <select className="form-select form-select-lg mb-3" dir='rtl' onChange={this.statusOnchangeHandler}>
                                                        <option value="All">همه</option>
                                                        <option value="Completed">انجام شده</option>
                                                        <option value="Uncompleted">انجام نشده</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                        {/* todo: Todo List Section */}
                                        <section id='Todo-List '>
                                            <div className="row justify-content-center">
                                                <div className="col-md-10">
                                                    <div className="card bg-primary-subtle " style={{ display: todos.length ? "block" : "none" }}>
                                                        <div className="card-body ">
                                                            <ul className='list-unstyled'>
                                                                {
                                                                    status === "All" &&
                                                                    todos.map((todo) => (
                                                                        <Todo key={todo.id} {...todo} checkedHandler={this.checkedHandler} removeHandler={this.confirmDeleteHandler} />
                                                                    ))
                                                                }
                                                                {
                                                                    status === "Completed" &&
                                                                    todos.filter(todo => todo.completed === true).map((todo) => (
                                                                        <Todo key={todo.id} {...todo} checkedHandler={this.checkedHandler} removeHandler={this.confirmDeleteHandler} />
                                                                    ))
                                                                }
                                                                {
                                                                    status === "Uncompleted" &&
                                                                    todos.filter(todo => todo.completed === false).map((todo) => (
                                                                        <Todo key={todo.id} {...todo} checkedHandler={this.checkedHandler} removeHandler={this.confirmDeleteHandler} />
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
}

export default TodoList;