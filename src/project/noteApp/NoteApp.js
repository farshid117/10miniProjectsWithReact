import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert';
import { Helmet } from 'react-helmet-async';

import { FaEraser } from 'react-icons/fa'
import { VscDiffAdded } from 'react-icons/vsc'

import Header from './Header'
import ColorBox from './ColorBox'
import Note from './Note'
import "./NoteApp.css"
import { useState } from 'react';

const NoteApp = () => {

    const [noteTitle, setNoteTitle] = useState("")
    const [inputColor, setInputColor] = useState("#FF89FD")
    const [notes, setNotes] = useState([])
    const [colors,] = useState([

                                "#fff",
                                "#FFD37F",
                                "#FFFA81",
                                "#D5FA80",
                                "#78F87F",
                                "#79FBD6",
                                "#79FDFE",
                                "#7AD6FD",
                                "#7B84FC",
                                "#D687FC",
                                "#FF89FD",
    ])

    const noteTitleChangeHandler = (event) => {
        event.preventDefault();
        setNoteTitle(event.target.value)
    }
    const inputColorChangeHandler = (color) => {
        setInputColor(color)
    }
    const addNote = (event) => {
        event.preventDefault()
        if (noteTitle) {
            setNotes([...notes, { id: uuidv4(), color: inputColor, title: noteTitle }])
            setNoteTitle("")
        } else {
            toast.warn('لطفا یادداشت را وارد کنید', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    const confirmDeleteHandler = (id, color) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui p-5 rounded-5' style={{ background: color, fontFamily: "Vazir" }} >
                        <h1 className='text-dark'>آیا مطمئن هستی</h1>
                        <p className='text-dark'>که میخواهی این کار را حذف کنی؟</p>

                        <button
                            className='btn btn-danger me-2'
                            onClick={() => {
                                removeNoteHandler(id);
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
    const removeNoteHandler = (id) => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
        toast.error('یادداشت مورد نظر حذف گردید', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }



    return (
        <div className="NoteApp  position-relative ">
            <Helmet>
                <title>اپلیکیشن یادداشت | 10 مینی پروژه ری‌اکت</title>
            </Helmet>
            <Header />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={(event)=>addNote(event)}>
                            <input
                                type="text"
                                className='form-control'
                                value={noteTitle}
                                onChange={(event) => noteTitleChangeHandler(event)}
                                style={{ background: inputColor }}
                                placeholder='یادداشت خود را بنویسید...'
                            />

                            <div className="d-flex justify-content-start mt-2 flex-row-reverse">
                                <ColorBox colors={colors} inputColorChangeHandler={inputColorChangeHandler} />
                            </div>

                            <div className="mt-3">
                                <button className="btn btn-danger d-inline-block me-2 Btn2"><FaEraser /></button>
                                <button type='submit' className="btn btn-primary d-inline-block"><VscDiffAdded /></button>
                            </div>
                        </form>
                    </div>
                </div>

                {/*todo Note Card */}
                <section id='note-container' className='mt-4'>
                    <div className="row">

                        {notes.length > 0 &&
                            notes.map(note => (
                                <Note
                                    key={note.id}
                                    {...note}
                                    removeNoteHandler={confirmDeleteHandler} />
                            ))
                        }

                    </div>

                </section>

            </div>
        </div>
    );

}

export default NoteApp;