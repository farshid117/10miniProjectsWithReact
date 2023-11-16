
const ColorBox = ({ colors, inputColorChangeHandler }) => {

    return (
        <>
            {
                colors.map((color, index) => (
                    <span
                        key={index}
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

export default ColorBox;