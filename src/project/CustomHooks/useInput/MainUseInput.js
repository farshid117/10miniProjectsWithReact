import { useEffect, useRef } from "react"
import useInput from "./UseInput"

import "./MainUseInput.css"

const MainUseInput = () => {
    const inputRef = useRef(null)

    const [name, nameBinding, resetName] = useInput("")
    const [passwordBinding, resetPassword] = useInput("")

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const onSubmitHandler = (event) => {
        // console.log(event)
        event.preventDefault()
        alert(`Hello ${name} From AliCoder.com 🙂`)
        resetName()
        resetPassword()
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="hero">
                        <div className="form-box d-flex justify-content-center mt-2">
                            <form
                                id="login"
                                className="input-group2 d-flex flex-column align-items-center justify-content-center"
                                onSubmit={onSubmitHandler}
                            >
                                <div className="d-flex flex-column gap-3">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className="form-control"
                                        placeholder="نام را وارد کنید"
                                        {...nameBinding}
                                    />
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="پسورد را وارد کنید..."
                                        {...passwordBinding}

                                    />
                                </div>
                                <div className="not-forget d-flex align-items-center justify-content-start">
                                    <input type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox">فراموشم نکن</label>
                                </div>
                                <button  className="btn btn-primary">ارسال</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainUseInput;
