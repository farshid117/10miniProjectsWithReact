import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import "./Ticket.css"

class Ticket extends Component {
    state = {
        contriesData: [
            { name: "Iran",   cities: ["Tehan", "Shiraz", "Gilan", "Tabriz"] },
            { name: "Turkey", cities: ["Ankara", "Ezmir", "Istanbul", "Antaliya"] },
            { name: "Usa",    cities: ["Los Angles", "San Diego", "Chicago", "San Francisco"] },
        ],
        selectedCountryCities: [],
    }


    onChangeHandler(event) {
        event.preventDefault()
        console.log(event.target.value)
        if (event.target.value === "-1") {
            this.setState({ selectedCountryCities: [] })
        } else {
            this.setState({ selectedCountryCities: this.state.contriesData[event.target.value].cities })
        }
    }
    render() {
        return (
            <div className="Ticket ">
                <Helmet>
                    <title>خرید بلیط آنلاین | 10 مینی پروژه ری‌اکت</title>
                </Helmet>
                <img src="./img/bg4.jpg" className='backImg' alt="" />
                <div className='card myCard 
                h-auto position-absolute top-50 start-50 translate-middle w-75 h-75'>

                    <div className='text-end position-absolute top-0 end-0'>
                        <Link to="/" className='btn btn-warning'>خانه</Link>
                    </div>

                    <div className="card-body ">
                        <div className="container">
                            <div className="row" style={{ fontSize: 13, fontWeight: "bold", color: "whitesmoke" }}>
                                <div className="col-12 col-md-6 " >
                                    <div className="row g-3 align-items-center mt-1 mt-md-3 justify-content-center">
                                        <div className="d-none d-lg-block col-auto">
                                            <label htmlFor="input6" className="col-form-label">نام و فامیلی :</label>
                                        </div>
                                        <div className="col-md-9 col-lg-8">
                                            <input type="text" id="input6" className="form-control" placeholder='نام و فامیلی' />
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center justify-content-center mt-1 mt-md-3">
                                        <div className="d-none d-lg-block col-auto">
                                            <label htmlFor="input5" className="col-form-label">تاریخ تولد  :</label>
                                        </div>
                                        <div className="col-md-9 col-lg-8">
                                            <input type="text" id="input5" className="form-control" placeholder='تاریخ تولد' />
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center justify-content-center mt-1 mt-md-3">
                                        <div className="d-none d-lg-block col-auto">
                                            <label htmlFor="input1" className="col-form-label">نام کشور :</label>
                                        </div>
                                        <div className='col-md-9 col-lg-8'>
                                            <select id='input1'
                                                className="form-select mb-3 text-muted"
                                                style={{ fontSize: 13, fontWeight: "bold" }}
                                                onChange={(event) => this.onChangeHandler(event)}
                                            >
                                                <option selected={true} value={-1}>نام کشور را انتخاب کنید</option>
                                                {

                                                    this.state.contriesData.map((country, index) => (
                                                        <option key={index} value={index} style={{ fontWeight: "bold", direction: "ltr" }}>{country.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <div className="row g-3 align-items-center justify-content-center mt-1 mt-md-3">
                                        <div className="d-none d-lg-block col-auto">
                                            <label htmlFor="input4" className="col-form-label">کدملی :</label>
                                        </div>
                                        <div className="col-md-9 col-lg-8">
                                            <input type="text" id="input4" className="form-control" placeholder='کدملی' />
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center justify-content-center mt-1 mt-md-3">
                                        <div className="d-none d-lg-block col-auto">
                                            <label htmlFor="input3" className="col-form-label">نام پدر :</label>
                                        </div>
                                        <div className="col-md-9 col-lg-8">
                                            <input type="text" id="input3" className="form-control" placeholder='نام پدر' />
                                        </div>
                                    </div>
                                    <div className="row g-3 align-items-center justify-content-center mt-1 mt-md-3">
                                        <div className="d-none d-lg-block col-auto">
                                            <label htmlFor="input2" className="col-form-label">نام شهر :</label>
                                        </div>
                                        <div className='col-md-9 col-lg-8' >
                                            <select id='input2'
                                                className="form-select mb-3 text-muted"
                                                style={{ fontSize: 13, fontWeight: "bold" }}
                                            >

                                                {
                                                    this.state.selectedCountryCities.length ? (
                                                        this.state.selectedCountryCities.map((city, index) => (
                                                            <option key={index} value={index} style={{ fontWeight: "bold", direction: "ltr", cursor: 'pointer', }} >{city}</option>
                                                        ))) : (
                                                        <option selected={true} value={-1}>نام شهر را انتخاب کنید</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-3">
                                    <button className="btn btn-primary">ارسال</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Ticket;