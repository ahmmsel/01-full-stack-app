import React from 'react'

import "./answer.scss"
import AnswerList from './AnswerList'
import AnswerQuestion from './AnswerQuestion'

export default function Answers({ answers, questionId, questionAuthor }) {
  return (
    <div className="answers">
      <AnswerQuestion />
      <AnswerList questionId={questionId} questionAuthor={questionAuthor} answers={answers} />
    </div>
  )
}
