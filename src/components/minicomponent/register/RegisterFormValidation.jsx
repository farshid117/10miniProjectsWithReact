import React, { Component } from 'react'
import { toast } from 'react-toastify'

import "./Register.css"

class RegisterFormValidation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submited: false,
            allValid: false,
            remember: false,
            name: '',
            family: '',
            email: "",
          

        }
    }
    textChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    checkedChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    }

    onSubmitHandler(event) {
        event.preventDefault()
        this.setState({ submited: true })

        if(this.state.name && this.state.family && this.state.email) {
            this.setState({ allValid: true })
            toast.success('🦄 ثبت نام شما با موفقیت انجام شد', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                this.setState({ allValid: false })
                this.setState({ submited: false })
                this.setState({ name: "" })
                this.setState({ family: "" })
                this.setState({ email: "" })
            }, 4000)
        }
    }

    onCilickHandler(event) {

    }

    render() {
        let header
        if (this.state.allValid){
            header = <div className="alert alert-success"  >
                شما با موفقیت ثبت نام شدید
            </div>
        }
        else{
            header = <h1 className="h3 mb-3 fw-normal">ثبت نام</h1>
        }
        return (
            <>
                <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                    <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                        <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half" /></svg>
                        <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill" /></svg>
                                Light
                                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill" /></svg>
                                Dark
                                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half" /></svg>
                                Auto
                                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
                            </button>
                        </li>
                    </ul>
                </div>


                <main className="form-signin w-50">
                    <form onSubmit={(event) => this.onSubmitHandler(event)}>
                        <img className="mb-4" src="./img/logo2.png" alt="" width="150" height="70" />

                        {
                            header
                         
                        }

                        <div className="form-floating text-dark mb-1  ">
                            <input type="text" className="form-control" id="name" name='name' value={this.state.name} onChange={(event) => this.textChangeHandler(event)} placeholder="نام را وارد کنید" style={{
                                borderRadius: "10px 10px 0 0"
                            }} />
                            <label htmlFor="floatingInput">نام</label>
                           {
                            this.state.submited && !this.state.name &&
                                <span className="text-danger d-block text-start m-1" style={{ fontSize: 13 }}>لطفا نام را وارد کنید</span>
                           }
                        </div>

                        <div className="form-floating text-dark mb-1 ">
                            <input type="text" className="form-control" id="family" name='family' value={this.state.family} onChange={(event) => this.textChangeHandler(event)} placeholder="نام خانوادگی را وارد کنید"
                                style={{ borderRadius: "0 0 0 0" }} />
                            <label htmlFor="family">نام خانوادگی</label>
                            {
                                this.state.submited && !this.state.family &&
                                <span className="text-danger d-block text-start m-1"style={{ fontSize: 13 }}>لطفا فامیلی را وارد کنید</span>
                            }
                        </div>

                        <div className="form-floating text-dark mb-3 ">
                            <input type="email" className="form-control" id="email" name='email' value={this.state.email} onChange={(event) => this.textChangeHandler(event)} placeholder="name@example.com"
                                style={{ borderRadius: "0 0 10px 10px" }} />
                            <label htmlFor="floatingPassword">ایمیل</label>
                            {
                                this.state.submited && !this.state.email &&
                                <span className="text-danger d-block text-start m-1" style={{ fontSize: 13 }}>لطفا ایمیل را وارد کنید</span>
                            }
                        </div>

                        <div className="checkbox mb-4 text-start">
                            <label>
                                <input type="checkbox" name='remember' checked={this.state.remember} onChange={this.checkedChangeHandler} /> مرا به خاطر بسپار
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={(event)=>this.onCilickHandler(event)} data-bs-toggle="modal" data-bs-target="#modalSheet">تایید</button>
                        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>

                        {/* todo Modal */}
                        <div className="modal modal-sheet position-absolute top-0 start-0 bottom-0 end-0 d-block bg-body-secondary p-4 py-md-5 fade text-dark " tabIndex={-1} role="dialog" id="modalSheet"
                             >
                            <div className="modal-dialog" >
                                <div className="modal-content rounded-4 shadow">
                                    <div className="modal-header border-bottom-0">
                                        <h1 className="modal-title fs-5">پذیرش قوانین و شرایط</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body py-0">
                                        <p style={{textAlign: 'justify', }}>با انتخاب دکمه ثبت نام کلیه شرایط این سایت را مطالعه کرد و تمامی اطلاعات را به درستی وارد میکنم و هرگونه مغایرت در اطلاعات وارد شده مسئولیت آن با عهده شخص خود اینجانب میباشد و به تنهایی به همه اینها پاسخگو هستم</p>
                                    </div>
                                    <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                                        <button type="submit" className="btn btn-lg btn-primary" data-bs-dismiss="modal">ثبت نام</button>
                                        <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>     
                        
                    </form>
                </main>
            </>

        );
    }
}

export default RegisterFormValidation;




