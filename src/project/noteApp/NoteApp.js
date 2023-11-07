import React, { Component } from 'react'
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

class NoteApp extends Component {
    state = {
        colors: [
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
        ],
        noteTitle: '',
        inputColor: '#FF89FD',
        notes: [],
    }
    noteTitleChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ noteTitle: event.target.value })
    }
    inputColorChangeHandler = (color) => {
        this.setState({ inputColor: color })
    }
    addNote = (event) => {
        event.preventDefault()
        if(this.state.noteTitle){
            this.setState({ notes: [...this.state.notes, { id: uuidv4(), color: this.state.inputColor, title: this.state.noteTitle }] })
            this.setState({ noteTitle: "" }) 
        }else{
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
    confirmDeleteHandler = (color, id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui p-5 rounded-5' style={{background: color, fontFamily: "Vazir" }} >
                        <h1 className='text-dark'>آیا مطمئن هستی</h1>
                        <p className='text-dark'>که میخواهی این کار را حذف کنی؟</p>

                        <button
                            className='btn btn-danger me-2'
                            onClick={() => {
                                this.removeNoteHandler( id);
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
    removeNoteHandler = (id) => {
        const newNotes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes: newNotes })
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
    render() {
        const { noteTitle, inputColor, colors, notes } = this.state

        return (
            <div className="NoteApp  position-relative">
                <Helmet>
                    <title>اپلیکیشن یادداشت | 10 مینی پروژه ری‌اکت</title>
                </Helmet>
                <Header />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">

                            <form onSubmit={this.addNote}>
                                <input type="text"
                                    className='form-control'
                                    value={noteTitle}
                                    onChange={this.noteTitleChangeHandler}
                                    style={{ background: inputColor }}
                                    placeholder='یادداشت خود را بنویسید...'
                                />

                                <div className="d-flex justify-content-start mt-2 flex-row-reverse">
                                    <ColorBox colors={colors} inputColorChangeHandler={this.inputColorChangeHandler} />
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
                                    <Note key={note.id} title={note.title} color={note.color} removeNoteHandler={() => this.confirmDeleteHandler(note.color,note.id)} />
                                ))
                            }
                        </div>

                    </section>

                </div>
            </div>
        );
    }
}

export default NoteApp;