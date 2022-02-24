import React, { Fragment } from 'react'
import { ASK_QUESTION } from './question-mutation'
import QuestionForm from './QuestionForm'

export default function AskQuestion() {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <QuestionForm 
            gql={ASK_QUESTION} 
            goingTo="/"
            config={{ 
            placeholder: "ask a question",
            btnTitle: "ask"
           }} />
        </div>
      </section>
    </Fragment>
  )
}
