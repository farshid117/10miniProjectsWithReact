import React, { Component } from 'react'
import { QuizCard, ShowReportCart } from "../../../components"

import "./Quiz.css"

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.onClickHandler = this.onClickHandler.bind(this)
        this.state = {
            questions: [
                {
                    questionText: "what is the Capital of Italy?",
                    answers: [
                        { answerText: "A: Rom",        isCorrect: true  },
                        { answerText: "B: Berlin",     isCorrect: false },
                        { answerText: "C: Parice",     isCorrect: false },
                        { answerText: "D: Amesterdam", isCorrect: false },
                    ]
                },
                {
                    questionText: "what is the Capital of France?",
                    answers: [
                        { answerText: "A: Sunfrunsisco", isCorrect: false },
                        { answerText: "B: Frunkfort",    isCorrect: false },
                        { answerText: "C: Berlin",       isCorrect: false },
                        { answerText: "D: Paris",        isCorrect: true  },
                    ]
                },
                {
                    questionText: "what is the Capital of Iran ?",
                    answers: [
                        { answerText: "A: Esfehan", isCorrect: false },
                        { answerText: "B: Fars",    isCorrect: false },
                        { answerText: "C: Tehran",  isCorrect: true  },
                        { answerText: "D: Mashad",  isCorrect: false },
                    ]
                },
                {
                    questionText: "what is the Capital of Germany ?",
                    answers: [
                        { answerText: "A: Abadan",  isCorrect: false },
                        { answerText: "B: Rom",     isCorrect: false },
                        { answerText: "C: Fanland", isCorrect: false },
                        { answerText: "D: Bon",     isCorrect: true  },
                    ]
                },
                {
                    questionText: "what is the Capital of Amerca ?",
                    answers: [
                        { answerText: "A: Bon",   isCorrect: false },
                        { answerText: "B: Usa",   isCorrect: true  },
                        { answerText: "C: Rom",   isCorrect: false },
                        { answerText: "D: Paris", isCorrect: false },
                    ]
                },

            ],
            questionIndex: 0,
            score: 0,
            showReportCart: false
        }
    }

    onClickHandler(event) {
        console.log("event.target.value is: ", event.target.value) //✍️ refer to buttun element that onclick was happened in that
        console.log(this.state.questions[this.state.questionIndex].answers[event.target.value].isCorrect)
        /* set Score State */
         if (this.state.questions[this.state.questionIndex].answers[event.target.value].isCorrect === true) {
            this.setState({ score: this.state.score + 1 })
        }
 
        /* set questionIndex State */
        if (this.state.questionIndex === this.state.questions.length-1 ) {
            this.setState({ showReportCart: true })
        }else{
            this.setState({ questionIndex: this.state.questionIndex + 1 })
        }

        
    }
    render() {
       
        return (
            <div className='Quiz'>
                {
                    this.state.showReportCart ? (
                        <ShowReportCart score={this.state.score} numberQiez={this.state.questions.length} />
                    ) : (
                            <QuizCard questionText={this.state.questions[this.state.questionIndex].questionText}
                                      answers={this.state.questions[this.state.questionIndex].answers.map(answer => {
                                            return answer.answerText
                                      })}
                                      onClickHandler={this.onClickHandler} />
                    )
                }
            </div>
        );
    }
}

export default Quiz;