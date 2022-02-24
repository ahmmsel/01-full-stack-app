import React, { Fragment } from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"

import Loading from "../UI/Loading/Loading"
import { SINGLE_A } from './answer-query'
import AnswerForm from './AnswerForm'
import { ANSWER_Q, UPDATE_A } from './answer-mutation'

export default function EditAnswer() {
  const { questionId, answerId } = useParams()

  const { loading, data } = useQuery(SINGLE_A, {
    variables: {
      qid: questionId,
      answerId
    }
  })

  if (loading) return <Loading />

  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <AnswerForm 
            initialValue={data.singleAnswer.body}
            gql={UPDATE_A}
            location={true}
            goingTo={`/q/${questionId}`} 
            variables={{ qid: questionId, answerId }} config={{ 
            placeholder: "edit answer",
            btnTitle: "save"
          }} />
        </div>
      </section>
    </Fragment>
  )
}
