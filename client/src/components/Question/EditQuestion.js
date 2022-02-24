import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { UPDATE_Q } from './question-mutation'
import QuestionForm from './QuestionForm'
import { SINGLE_QUESTION } from './questions-query'
import Loading from "../UI/Loading/Loading"

export default function EditQuestion() {
  const { questionId } = useParams()

  const { loading, data } = useQuery(SINGLE_QUESTION, {
    variables: { id: questionId }
  })
  if (loading) return <Loading />

  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <QuestionForm 
            initialValue={data.singleQuestion.body}
            gql={UPDATE_Q} 
            variables={{ id: questionId }}
            location={true}
            goingTo="/" 
            config={{ 
            placeholder: "edit a question",
            btnTitle: "save"
           }} />
        </div>
      </section>
    </Fragment>
  )
}
