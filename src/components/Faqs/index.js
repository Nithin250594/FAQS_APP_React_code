// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="white-bg">
      <div className="faqs-bg">
        <h1 className="Faqs-title">FAQS</h1>
        <ul className="faqs-unordered-list">
          {faqsList.map(eachObj => (
            <FaqItem key={eachObj.id} eachFaq={eachObj} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
