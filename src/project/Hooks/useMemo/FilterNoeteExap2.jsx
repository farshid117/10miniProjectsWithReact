import { memo } from "react";

const FilterNoeteExap2 = memo(({ notes }) => {
    console.log("Render component Body")
    return (
        <div>
            {notes.length > 0 ? (
                notes.filter(note => {
                    console.log("Render Filter Block");
                    return note.title.toLowerCase().includes("js")
                }).map(note => {
                    console.log("Render Map Filter Block")
                    return (
                        <li key={note.id}>
                            {note.id} - {note.title}
                        </li>
                    )
                })

            ) : null}

        </div>
    );
}
)

export default FilterNoeteExap2;
