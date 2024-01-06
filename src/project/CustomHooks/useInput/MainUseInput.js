import { useEffect, useRef } from "react"

import "./MainUseInput.css"

const MainUseInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="hero">
                        <div className="form-box d-flex justify-content-center mt-2">
                            <form id="login" className="input-group2 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex flex-column gap-3">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className="form-control"
                                        placeholder="نام را وارد کنید"
                                    />
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="پسورد را وارد کنید..."

                                    />
                                </div>
                                <div className="not-forget d-flex align-items-center justify-content-start">
                                    <input type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox">فراموشم نکن</label>
                                </div>
                                <button className="btn btn-primary">ارسال</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainUseInput;
