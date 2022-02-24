import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import Answers from '../Answer/Answers'
import Loading from "../UI/Loading/Loading"
import NotFoundPage from "../../pages/NotFoundPage"
import QuestionItem from './QuestionItem'
import { SINGLE_QUESTION } from './questions-query'

export default function QuestionDetails() {
  const { questionId } = useParams()

  const { loading, error, data } = useQuery(SINGLE_QUESTION, {
    variables: {
      id: questionId
    }
  })

  if (loading) return <Loading />

  if (error) return <NotFoundPage />
  
  const { singleQuestion: { id, username, createdAt, body, likes, answers } } = data
  
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <div className="q--details">
            <QuestionItem
              id={id}
              author={username}
              body={body}
              createdAt={createdAt}
              likes={likes}
              totalLikes={likes.length}
              totalAnswers={answers.length}
            />
            <Answers questionId={id} questionAuthor={username} answers={answers} />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
