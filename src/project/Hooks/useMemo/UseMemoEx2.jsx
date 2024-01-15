
import { useState, useRef, useEffect } from 'react';

const UseMemoEx2 = () => {
    const inputRef = useRef(null)
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("")

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const addNote = (event) => {
        event.preventDefault()
        if (newNote.trim().length > 0) {
            const newNoteObj = {
                id: notes.length + 1,
                title: newNote
            }
            setNotes(preNotes => [...preNotes, newNoteObj])
            setNewNote("")
            inputRef.current.focus()

        } else {
            alert("please enter a note")
        }
    }

    const resetNotesArray = () => {
        setNotes([])
        setNewNote("")
        inputRef.current.focus()
    }

    return (
        <>
            <div className="container">
                <div className='row justify-content-center mt-5'>
                    <div className="col-12 col-md-6">

                        <form className='d-flex justify-content-center'>
                            <button className='btn btn-primary btn-sm' onClick={addNote} >Add New Note</button>
                            <input
                                ref={inputRef}
                                type='text'
                                dir='ltr'
                                className='form-control w-50 ms-3'
                                value={newNote}
                                onChange={e => setNewNote(e.target.value.trim())}
                            />
                        </form>

                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <ul dir='ltr' >
                                    {notes.length > 0 ?
                                        (notes.map(note => {
                                            console.log("render map Black")
                                            return (
                                                <li key={note.id} className='fw-bold' >{note.id} - {note.title}</li>
                                            )
                                        }

                                        )) : (
                                            <p className='text-center fw-bold'>Notes Array is empty...
                                                <br /> <span className='fw-normal'>pls enter new notes</span>
                                            </p>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <button className='btn btn-warning btn-sm mt-3' onClick={resetNotesArray} >Reset Notes</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default UseMemoEx2;
