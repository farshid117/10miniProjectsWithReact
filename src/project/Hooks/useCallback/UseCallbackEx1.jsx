import { useState, useRef, useEffect, memo, useCallback } from 'react';

const UseCallbackEx1 = () => {
    const inputRef = useRef(null)

    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState("")

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    //todo :Rrefrential Equality
    const addCounter = useCallback(() => {
       return setCounter(prevCounter => prevCounter + 1)
    }, [counter])
    const minusCounter = useCallback(() => {
        return setCounter(prevCounter => prevCounter - 1)
    }, [counter])

    console.log("App Run!")

    return (
        <>
            <div className='w-50 m-auto text-center'>
                <input
                    ref={inputRef}
                    type="text"
                    className='form-control'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Title title={title} />

                <p className='h3 mb-2'><span className='badge bg-success rounded-circle'>{counter}</span></p>

                <Buttons add={addCounter} minus={minusCounter} />
            </div>

        </>
    );
}

export default UseCallbackEx1;


//! titlte is primitive type
const Title = memo(({ title }) => {
    console.log("Title Run!")
    return (
        <h3 className='mt-3'>{title}</h3>
    )
}
)

//! add & minus are function and refrence Type
const Buttons = memo(({ add, minus }) => {
    console.log("Buttons Run !")
    return (
        <>
            <button className="btn btn-primary me-2" onClick={add}>Add</button>
            <button className="btn btn-warning" onClick={minus}>minus</button>
        </>
    )
})
