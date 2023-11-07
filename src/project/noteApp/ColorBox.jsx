import React, { Component } from 'react'

class ColorBox extends Component {

    render() {
        const { colors, inputColorChangeHandler } = this.props
        return (
            <>
                {
                    colors.map((color, index) => (
                        <span key={index}
                            id="color-box"
                            className="p-2 p-sm-3 rounded-circle ms-1"
                            style={{ background: color, border: "2px solid #fff", cursor: "pointer" }}
                            onClick={() => inputColorChangeHandler(color)}
                        >
                        </span>
                    ))
                }
            </>
        );
    }
}

export default ColorBox;