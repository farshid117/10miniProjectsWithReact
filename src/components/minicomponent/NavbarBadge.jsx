import React, { Component } from 'react'


class NavbarBadge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notification: [
                "سلام یه سوال داشتم",
                "ممنون از پاسختون",
                "سلام این دوره کی برگزار میشه؟",
                "سلام مدت ساعت دوره چند ساعته؟",
                "سال نو مبارک"
            ],
        }
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold" href="a">بیمه آنلاین</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="a">خانه</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="a">درباره ما</a>
                                </li>
                               {
                                this.state.notification.length && 
                                    <li className="nav-item ">
                                        <a className="nav-link position-relative " href="htt">اطلاعیه
                                            <span className='badge bg-info position-absolute rounded-circle text-danger d-flex align-items-center justify-content-center'
                                                style={{ width: 20, height: 20, top: -4, left: -6 }}>{this.state.notification.length}</span> </a>
                                    </li>
                               }

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavbarBadge;