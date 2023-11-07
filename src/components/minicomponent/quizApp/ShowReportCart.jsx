import React, { Component } from 'react'

class ShowReportCart extends Component {
   
    render() {
        const { score, numberQiez } = this.props
        return (
            <>
                <div className='card bg-primary-subtle text-primary-emphasis'>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 " style={{ direction: "ltr" }}>
                                    <p className='h2 fw-bold'>End Of Quiz</p>
                                    <p className='alert alert-success h3'>Your Score is: <span className='text-danger fw-bold h2'>{score}</span> of <span className='text-danger fw-bold h2' >{numberQiez}</span></p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ShowReportCart;