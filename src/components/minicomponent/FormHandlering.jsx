import React from 'react'
//import { NavbarBadge } from './components';



class FormHandlering extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      job: "",
      age: "",
      checkLogin: true,
    }
  }
  onSubmitHandler(event) {

  }

  textChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkChangeHandler(event) {
    console.log(event)
    this.setState({
      checkLogin: event.target.checked, //!this.state.checkLogin
    [event.target.name]: event.target.checked //!this.state.checkLogin]
    })
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={(event) => this.onSubmitHandler(event)} className="w-50 mt-5">
          <input type="text" name="name" className='form-control mb-2' value={this.state.name} onChange={(event) => this.textChangeHandler(event)} placeholder="نام خود را وارد کنید" />
          <input type="text" name="job"  className='form-control mb-2' value={this.state.job}  onChange={(event) => this.textChangeHandler(event)} placeholder="شغل را وارد کنید" />
          <input type="text" name="age"  className='form-control mb-3' value={this.state.age}  onChange={(event) => this.textChangeHandler(event)} placeholder="سن را وارد کنید" />

          <div className='d-flex' >
            <input type="checkbox" name="checkLogin" id='check' className='form-check mb-3' checked={this.state.checkLogin} onChange={(event) => this.checkChangeHandler(event)} />
            <label htmlFor="check " >لاگین شده است</label>
          </div>

          <input type="submit" className='btn btn-primary' value="تائید کن" />

        </form>
      </div>
    );
  }
}
export default FormHandlering;
