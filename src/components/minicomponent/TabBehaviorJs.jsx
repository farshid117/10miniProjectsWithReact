import React, { Component } from 'react'

class TabBehaviorJs extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <section className="d-flex flex-column justify-content-start">
          <ul className="nav  nav-tabs nav-pills justify-content-start w-100" id="myTab">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" >Home</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" >Profile</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" >Contact</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" disabled>Disabled</button>
            </li>
          </ul>
          <div className="tab-content w-100" id="myTabContent">
            <div className="tab-pane card-body w-75 mx-auto fade show active " id="home-tab-pane" role="tabpanel">
              ایار خوبی اسن و همه باید آن را تهیه کنند مخصوصا با توجه به موضوع خودرو نامتعارف این بیمه بسیار
              مهم میشود زیرار اگر سقف خسارت های وارد شده بیشتر از سقف تعهدات مالی بیمه نامه باشد مازاد خسارت از محل بیمه
              بدنه باید پرداخت
            </div>
            <div className="tab-pane fade card-body  w-75 mx-auto" style={{ textAlign: 'justify' }} id="profile-tab-pane" role="tabpanel">
              بیمه بدنه بیمه بسیار خوبی اسن و همه باید آن را تهیه کنند مخصوصا با توجه به موضوع خودرو نامتعارف این بیمه بسیار
              مهم میشود زیرار اگر سقف خسارت های وارد شده بیشتر از سقف تعهدات مالی بیمه نامه باشد مازاد خسارت از محل بیمه
              بدنه باید پرداخت شود و در خودرو نامتعارف اعمال ماده 10 میشود به ازاء قیمت مازاد بر سقف متعارف
            </div>
            <div className="tab-pane fade card-body" id="contact-tab-pane" role="tabpanel">...
            </div>
            <div className="tab-pane fade card-body" id="disabled-tab-pane" role="tabpanel">
              ...
            </div>
          </div>
        </section>
      </div>


    );
  }
}

export default TabBehaviorJs;

























