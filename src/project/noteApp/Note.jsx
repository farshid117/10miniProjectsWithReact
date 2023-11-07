import React, { Component } from 'react'

class Note extends Component {

    render() {
        const { removeNoteHandler, title, color } = this.props
        return (
            <>
                {

                    <div className="col-md-4 mb-3">
                        <div className="card shadow-lg" onClick={removeNoteHandler} style={{ background: color, minHeight: 150 }}>
                            <div className="crad-body p-5">
                                <p className="card-text fw-bold text-dark" style={{ fontSize: 18, }}>
                                    <span style={{ textShadow: "4px 4px 5px rgb(176, 230, 255)" }}> {title} </span>
                                </p>
                            </div>
                        </div>
                    </div>

                }
            </>
        );
    }
}

export default Note;