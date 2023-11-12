import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Book, Header2 } from '../../project'


const AddBook = () => {


    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState("")
    const [books, setBooks] = useState([])
    const [openEditModal, setOpenEditModal] = useState(false)

    const onChangeHandler = (event) => {

        if (event.target.name === "name") setName(event.target.value)
        if (event.target.name === "author") setAuthor(event.target.value)
        if (event.target.name === "year") setYear(event.target.value)

    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (!name || !author || !year) {
            alert("لطفا تمامی فیلدها را پر نمائید")
        } else {
            setBooks([...books, {
                id: books.length + 1,
                name: name,
                author, //✍️ ES6
                year
            }])


            setName("")
            setAuthor("")
            setYear("")

        }
    }
    const editHandler = (event, id) => {
        console.log("in editHandler AddBook id is :", id)
        console.log("in editHadler AddBook event is :", event)
    }
    const deleteHandler = (event, id) => {
        console.log(typeof id)
        const filterBook = books.filter(book => book.id !== id);
        setBooks(filterBook)
    }
    const openEditModalHandler = () => {
        setOpenEditModal(prevValue => {
            return !prevValue
        })
    }


    return (
        <div className='AddBook mt-3'>
            <Helmet>
                <title>کتابخانه | 10 مینی پروژه ری‌اکت</title>
            </Helmet>
            <Header2 />
            <div className='container position-relative'>

                <div className='d-flex flex-column align-items-center'>
                    <div className='card myCard  w-75 h-auto'>
                        <div className="card-body">
                            <form onSubmit={(event) => onSubmitHandler(event)}>
                                <div className="container">
                                    <div className="row justify-content-center" style={{ fontSize: 13, fontWeight: "bold", color: "whitesmoke" }}>
                                        <div className="col-12 col-md-10 " >
                                            <div className="row  align-items-center mt-1 mt-md-3 justify-content-center">
                                                <div className="d-none d-lg-block col-2">
                                                    <label htmlFor="input1" className="col-form-label">نام کتاب :</label>
                                                </div>
                                                <div className="col-md-9 col-lg-8">
                                                    <input type="text"
                                                        id="input1"
                                                        className="form-control"
                                                        placeholder='نام کتاب'
                                                        name="name"
                                                        value={name}
                                                        onChange={(event) => onChangeHandler(event)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row  align-items-center justify-content-center mt-1 mt-md-3">
                                                <div className="d-none d-lg-block col-2">
                                                    <label htmlFor="input2" className="col-form-label"> نویسنده  :</label>
                                                </div>
                                                <div className="col-md-9 col-lg-8">
                                                    <input type="text"
                                                        id="input2"
                                                        className="form-control"
                                                        placeholder='نویسنده'
                                                        name="author"
                                                        value={author}
                                                        onChange={(event) => onChangeHandler(event)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row align-items-center justify-content-center mt-1 mt-md-3">
                                                <div className="d-none d-lg-block col-2">
                                                    <label htmlFor="input3" className="col-form-label"> سال تالیف :</label>
                                                </div>
                                                <div className="col-md-9 col-lg-8">
                                                    <input type="text"
                                                        id="input3"
                                                        className="form-control"
                                                        placeholder='سال تالیف'
                                                        name="year"
                                                        value={year}
                                                        onChange={(event) => onChangeHandler(event)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-9 d-grid text-center mt-4">
                                            <button className="btn btn-warning">افزودن کتاب</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <section id='bookList'>
                    <div className='d-flex flex-column align-items-center mt-3'>
                        {
                            books.length > 0 &&
                            <div className='card  w-100 h-auto text-center'>
                                <div className='table-responsive w-100'>
                                    <table className='table table-striped  align-middle'>
                                        <thead>
                                            <tr>
                                                <th className='fw-bold'>ردیف</th>
                                                <td className='fw-bold'>نام کتاب</td>
                                                <td className='fw-bold'>نویسنده</td>
                                                <td className='fw-bold'>سال تالیف</td>
                                                <td className='fw-bold'>عملیات</td>
                                            </tr>
                                        </thead>
                                        <tbody className='overflow-scroll'>
                                            {
                                                books.length > 0 &&
                                                books.map((book, index) => (
                                                    <Book key={book.id}
                                                        row={index}
                                                        {...book}
                                                        openEditModal={openEditModal}
                                                        openEditModalHandler={openEditModalHandler}
                                                        editHandler={editHandler}
                                                        deleteHandler={deleteHandler}
                                                    />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                    </div>

                </section>

            </div>

        </div>

    )
}
export default AddBook