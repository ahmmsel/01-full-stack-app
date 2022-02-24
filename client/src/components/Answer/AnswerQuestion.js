import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { ANSWER_Q } from './answer-mutation'
import AnswerForm from './AnswerForm'

export default function AnswerQuestion() {
  const { questionId } = useParams()
  return (
    <Fragment>
      <AnswerForm gql={ANSWER_Q} goingTo="/" variables={{ id: questionId }} config={{ 
        placeholder: "answer a question",
        btnTitle: "answer"
      }} />
    </Fragment>
  )
}
