import EllipsisText from "react-ellipsis-text";
const Note = ({ id, title, color, removeNoteHandler }) => {

        return (
            <>
                {
                    <div className="col-md-4 gx-3 gy-3">
                        <div className="card shadow-lg" onClick={() => removeNoteHandler(id, color)} style={{ background: color, minHeight: 150 }}>
                            <div className="crad-body p-5">
                                <p className="card-text fw-bold text-dark" style={{ fontSize: 18, }}>
                                    {/* <span style={{ textShadow: "4px 4px 5px rgb(176, 230, 255)" }}> {title} </span> */}
                                    <EllipsisText text={title} length={"60"} style={{ textShadow: "4px 4px 5px rgb(176, 230, 255)" }} />
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
}

export default Note;