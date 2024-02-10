
import { useState, useRef, useEffect, useMemo } from 'react';
import FilterNoeteExap2 from './FilterNoeteExap2';

const UseMemoEx2 = () => {
    const inputRef = useRef(null)
    const [newNote, setNewNote] = useState("")
    const [notes, setNotes] = useState([])

    useEffect(() => {
        inputRef.current.focus()
    }, [notes])

    const addNote = (event) => {
        event.preventDefault()
        if (newNote.trim().length > 0) {
            const newNoteObj = {
                id: notes.length + 1,
                title: newNote
            }
            setNotes(preNotes => [...preNotes, newNoteObj])
            setNewNote("")

        } else {
            alert("Please Enter a Note")
        }
    }

    const resetNotesArray = () => {
        setNotes([])
        setNewNote("")
    }

    return (
        <>
            <div className="container text-center">
                <p className='fw-bold fs-2 mt-5'>useMemo <span className='text-primary'>Example2</span></p>
                <div className='row justify-content-center mt-4'>
                    <div className="col-12 col-md-6">
                        <form className='d-flex justify-content-center'>
                            <button className='btn btn-primary btn-sm' onClick={addNote} >Add New Note</button>
                            <input
                                ref={inputRef}
                                type='text'
                                dir='ltr'
                                className='form-control w-50 ms-3'
                                value={newNote}
                                onChange={e => setNewNote(e.target.value)}
                            />
                        </form>

                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <ul dir='ltr' className='text-end' >
                                    {
                                        useMemo(() => notes.length > 0 ? (
                                            notes.map(note => {
                                                console.log("Render Map Block");
                                                return <li key={note.id} className='fw-bold' >{note.id} - {note.title}</li>
                                                
                                            })
                                        ) : (
                                            <p className='text-center fw-bold'>
                                                Notes Array is Empty...
                                                <br />
                                                <span className='fw-normal'>pls enter a new note</span>
                                            </p>
                                        )
                                            , [notes])
                                    }
                                </ul>
                                {
                                    notes.length > 0 ? <hr /> : null
                                }
                                <ul dir="ltr" className='text-end'>
                                    {/* todo: notes is Array => Refrence type */}
                                    <FilterNoeteExap2 notes={notes} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <button className='btn btn-warning btn-sm mt-3' onClick={resetNotesArray}> Reset Notes </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default UseMemoEx2;
