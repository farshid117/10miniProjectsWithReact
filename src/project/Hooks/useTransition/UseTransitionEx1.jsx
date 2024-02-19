import { useState, useRef, useEffect, useTransition } from 'react';

const UseTransitionEx1 = () => {

    const [value, setValue] = useState(0)
    const [lists, setLists] = useState([])

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const [isPending, startTransition] = useTransition()

    const onChangeHandler = (event) => {
        setValue(event.target.value) //first preority

        //ignore this untill isPending is true
        startTransition(() => {
            const numberList = []
            numberList.push(value)

            setLists(numberList)
        })

    }
    return (
        <div className='d-flex flex-column align-items-center mt-5' >
            <p className='fw-bold fs-2'> useTransition <span className='text-primary'>Example</span></p>
            <input
                ref={inputRef}
                type="text"
                className="form-control w-50"
                value={value}
                onChange={onChangeHandler}
            />
            <ul className='mt-5' dir='ltr' style={{ fontSize: 16, fontWeight: "bold" }}>
                {

                      isPending ? "is Loading...!" : lists.map((item, index) => (
                        <li key={index}> {`Number is :    ${item}`} </li>
                    ))

                }
            </ul>
        </div>
    );
}

export default UseTransitionEx1;
