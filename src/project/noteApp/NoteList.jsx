import Note from "./Note";


const NoteList = ({notes, confirmDeleteHandler}) => {
    return (
        <>
           

                {notes.length > 0 &&
                    notes.map(note => (
                        <Note
                            key={note.id}
                            {...note}
                            removeNoteHandler={confirmDeleteHandler} />
                    ))
                }

           
        </>
    );
}

export default NoteList;
