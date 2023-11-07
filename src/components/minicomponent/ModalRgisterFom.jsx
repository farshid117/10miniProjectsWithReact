import React, { Component } from 'react'

class ModalRgisterFom extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className=' w-100 d-flex justify-content-start mt-3'>
                    <button className='btn btn-primary  ' data-bs-toggle="modal" data-bs-target="#modalSignin">ثبت نام</button>
                </div>
                <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5 text-dark fade" tabIndex={-1} role="dialog" id="modalSignin">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header p-5 pb-4 border-bottom-0">
                                <h1 className="fw-bold mb-0 fs-2">ثبت نام کنید</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>

                            <div className="modal-body p-5 pt-0">
                                <form className="">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">آدرس ایمیل</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">پسورد</label>
                                    </div>
                                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">ثبت نام</button>
                                    <small className="text-body-secondary">با انتخاب دکمه ثبت نام تمامی قوانین و مقررات سایت را پذیرفته اید</small>
                                    <hr className="my-4" />
                                    <h2 className="fs-5 fw-bold mb-3">استفاده از روش های دیگر برای ورود به سایت</h2>
                                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        <svg className="bi me-1" width="16" height="16"><use href="#twitter" /></svg>
                                        Sign up with Google Account
                                    </button>
                                    <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                                        <svg className="bi me-1" width="16" height="16"><use href="#facebook" /></svg>
                                        Sign up with Facebook
                                    </button>
                                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        <svg className="bi me-1" width="16" height="16"><use href="#github" /></svg>
                                        Sign up with GitHub
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
 
export default ModalRgisterFom;