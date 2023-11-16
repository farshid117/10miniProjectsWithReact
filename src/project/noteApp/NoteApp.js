import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert';
import { Helmet } from 'react-helmet-async';

import Header from './Header'
import NoteForm from './NoteForm';
import NoteList from './NoteList';

import "./NoteApp.css"

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
    const removeAllHandler = () => {
        setNotes([])
        
        toast.error('همه یادداشت ها حذف گردید', {
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
            {/*todo FormNote */}
            <section id='form-note'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                          <NoteForm 
                                noteTitle={noteTitle}
                                colors={colors}
                                inputColor={inputColor}
                                addNote={addNote}
                                noteTitleChangeHandler={noteTitleChangeHandler}
                                inputColorChangeHandler={inputColorChangeHandler}
                                removeAll={removeAllHandler}
                               

                          />
                        </div>
                    </div>
                </div>
            </section>

            {/*todo NoteList Crad */}
            <section id='note-list' className='mt-4'>
                <div className="container">
                    <div className="row">
                        <NoteList notes={notes} confirmDeleteHandler={confirmDeleteHandler} />
                    </div>
                </div>
            </section>

        </div>
    );

}

export default NoteApp;