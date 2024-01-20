import { useEffect, useRef } from 'react';

const UseRefEx1 = () => {
    //return object with with one member  current key => {current:null}
    const inputRef = useRef(null)
    console.log("inputRef: ", inputRef.current);

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const newStyle = () => {
        inputRef.current.style = "background : violet"
    }

    return (

        <div className='text-center'>
            <div className='w-50 m-auto'>
                <input
                    ref={inputRef}
                    type="text"
                    className='form-control'
                />


            </div>
            <button className='btn btn-primary d-inline mt-4' onClick={newStyle}>
                Add New Style
            </button>
        </div>

    );
}

export default UseRefEx1;
