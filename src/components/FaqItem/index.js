// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {ansVisible: false}

  clickPlusMinus = () => {
    this.setState(prev => ({ansVisible: !prev.ansVisible}))
  }

  render() {
    const {ansVisible} = this.state
    const {eachFaq} = this.props
    const {id, questionText, answerText} = eachFaq

    const plusMinus = ansVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altPlusMinus = ansVisible ? 'minus' : 'plus'

    return (
      <li key={id} className="faq-list">
        <div className="each-faq-container">
          <div className="question-section">
            <h1 className="question-header">{questionText}</h1>
            <button
              type="button"
              className="plus-minus-button"
              onClick={this.clickPlusMinus}
            >
              <img
                src={plusMinus}
                alt={altPlusMinus}
                className="plus-minus-image"
              />
            </button>
          </div>
          {ansVisible && (
            <>
              <hr className="separator" />
              <p className="answer-text">{answerText}</p>
            </>
          )}
        </div>
      </li>
    )
  }
}

export default FaqItem
