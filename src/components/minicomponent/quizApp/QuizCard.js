import React, { Component } from 'react'

class QuizCard extends Component {
  
    render() {
        const { questionText, answers, onClickHandler } = this.props


        return (
            <>
                <div className='card bg-primary-subtle text-primary-emphasis'>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 " style={{ direction: "ltr" }}>
                                    {
                                        answers.map((answer, index) => (
                                            <button key={index}
                                                    className="btn btn-outline-primary-primary d-block mb-1" 
                                                    value={index} 
                                                    onClick={((event) => onClickHandler(event))}
                                            >
                                                 {answer}
                                            </button>
                                        ))
                                    }
                                </div>

                                <div className="col-6 p-2 fw-bold" style={{ direction: "ltr" }}>
                                    <p className="h4 fw-bold" >{questionText}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default QuizCard;