import React, { Component } from 'react'


class Temperature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: 10,
            color: "btn-primary"
        }
    }


    plusHandler = () => {

        if (this.state.temperature >= 20) {
            return false
        }
        
        this.setState({ temperature: this.state.temperature + 1 })

        if(this.state.temperature > 15) {
            this.setState({color: "btn-danger" })
        }
       
    }
    minusHandler = () => {
        if (this.state.temperature <= 0) {
            return false
        }
        this.setState({temperature: this.state.temperature - 1 })

        if(this.state.temperature <= 15) {
            this.setState({ color: "btn-primary" })
        }
    }


    render() {
        return (
            <>
                <div className='bg-black shadow-lg position-relative ' style={{ width: 300, height: 500, borderRadius: 15, border: "2px solid #fff" }}>
                    <div className={`rounded-circle position-absolute start-50 translate-middle fw-bold d-flex justify-content-center align-items-center ${this.state.color}`}
                        style={{ width: 200, height: 200, top: 140, border: "3px solid #fff", verticalAlign: "center", fontSize: 60 }}>
                        <span>{this.state.temperature}</span>
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <button onClick={this.plusHandler} className='btn btn-primary btn-lg rounded-circle position-absolute' style={{ bottom: 150, right: 50 }}>+</button>
                        <button onClick={this.minusHandler} className='btn btn-primary btn-lg rounded-circle position-absolute' style={{ bottom: 150, left: 50 }}>-</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Temperature;


/* Product.propTypes = {
    name: propTypes.string.isRequired,
} */