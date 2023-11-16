import React from 'react';

import { FaEraser } from 'react-icons/fa'
import { VscDiffAdded } from 'react-icons/vsc'

import ColorBox from './ColorBox';

const NoteForm = ({ noteTitle, colors, inputColor, addNote, noteTitleChangeHandler, inputColorChangeHandler, removeAll }) => {
    return (
        <>
          
                    <form onSubmit={(event) => addNote(event)}>
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
                    </form>

                    <div className="mt-3">
                <button type='submit' className="btn btn-primary d-inline-block" onClick={(event) => addNote(event)}><VscDiffAdded /><span className='ms-1'>اضافه کن</span></button>
                <button className="btn btn-danger d-inline-block ms-2 Btn2" onClick={() => removeAll()} ><FaEraser /><span className='ms-1'>حذف همه</span></button>
                    </div>
           
        </>
    );
}

export default NoteForm;
