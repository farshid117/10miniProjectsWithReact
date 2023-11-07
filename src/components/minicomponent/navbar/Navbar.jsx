import React, { Component } from 'react'

import "./Navbar.css"

class Navbar extends Component {
  state = {}
  render() {
    return (
      <><nav className="navbar bg-light">
        <div className="container-fluid">
          <div className="row w-100 align-items-center">
            <div className="col-12 col-lg-2 d-flex justify-content-between align-items-center">
              <a className="navbar-brand d-block " href="a"><img src="./img/logo2.png" style={{ width: 120, height: 50 }} alt="" /></a>

              <button className=" d-block d-lg-none border-0 bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" style={{ width: 60, height: 50 }}>
                { /* <span class="navbar-toggler-icon"></span> */}
                <img src="./img/Hamburger_icon.svg" alt="" />
              </button>
            </div>

            <div className="col-lg-10 d-none d-lg-block" id="navbarList">
              <div className="container">
                <div className="row align-items-lg-center">

                  <div className="col-lg-8">
                    <ul className="nav nav-pills nav-fill  mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" href="a">خانه</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="a">ارتباط در واتساپ</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="a" data-bs-toggle="dropdown">
                          انواع بیمه ها
                        </a>
                        <ul className="dropdown-menu" style={{ fontSize: 14 }}>
                          <li><a className="dropdown-item" href="a">بیمه شخص ثالث</a></li>
                          <li><a className="dropdown-item" href="a">بیمه بدنه</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="a">بیمه آتش سوزی</a></li>
                          <li><a className="dropdown-item" href="a">بیمه مسئولیت</a></li>
                          <li><a className="dropdown-item" href="a">بیمه تکمیل درمان</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href='a'>درباره ما</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="جستجو کنید..." style={{ fontSize: 12 }} />
                      <button type="submit" className="btn btn-outline-primary" style={{ fontSize: 12 }}>جستجو</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </nav>

        <section id="offconvas">
          <div className="offcanvas offcanvas-start" data-bs-backdrop="true" data-bs-scroll="true" tabIndex={-1} id="staticBackdrop">
            { /* ofconvas Header */}
            <div className="offcanvas-header bg-primary-subtle ">
              <img src="./img/logo2.png" style={{ width: 100, height: 50 }} alt="logo" />
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
            </div>

            { /* offconvas Body */}
            <div className="offcanvas-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "#0a1045" }}>خانه</a></li>
                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "#0a1045" }}>بیمه شخص ثالث</a></li>
                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "#0a1045" }}>بیمه بدنه</a></li>
                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "#0a1045" }}>بیمه تکمیل درمان</a></li>
                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "#0a1045" }}>بیمه مسئولیت</a></li>

                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "#0a1045" }}>درباره ما</a></li>
                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "#0a1045" }}>پروفایل</a></li>
                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "#0a1045" }}>ارتباط مستقیم در <span className="text-danger fw-bolder">واتساپ</span> </a><span className="badge bg-warning">new</span></li>
                <li className="list-group-item"><a href="a" style={{ fontSize: 14, color: "red", fontWeight: "bold" }}>خروج</a></li>
              </ul>
            </div>
          </div>
        </section></>
    );
  }
}

export default Navbar;

























