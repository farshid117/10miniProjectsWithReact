import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    plusHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    //✍️ approach2 in use setState
    minusHandler = () => {
        this.setState((prevCounter) => {
            if (prevCounter.counter > 0) {
                return {
                    counter: prevCounter.counter - 1
                }
            } else {
                return {
                    counter: 0
                }
            }

        })
    }
    resetHandler = () => {
        this.setState({
            counter: 0
        })
    }

 
    render() { 
        return (
            <div className='App text-center mt-4 '>
                <div className='text-center w-50 bg-success mx-auto' style={{ borderRadius: 10, height: 300, border: "5px solid #000" }}>
                    <h1 className='mt-3'>Counter</h1>
                    <span className='h3'>{this.state.counter}</span>

                    <div className='d-flex justify-content-around'>
                        <button onClick={this.plusHandler} className="btn btn-primary px-5">+</button>
                        <button onClick={this.minusHandler} className={this.state.counter === 0 ? "btn btn-danger px-5" : "btn btn-secondary px-5"}>-</button>
                    </div>
                    <div className='btn btn-info' onClick={this.state.resetHandler}>Reset</div>
                </div>
            </div>
        );
    }
}
 
export default Counter;