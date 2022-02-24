import React from 'react'
import { useQuery } from '@apollo/client'

import { ALL_QUESTIONS } from './questions-query'
import QuestionItem from './QuestionItem'
import Loading from '../UI/Loading/Loading'
import NotFound from "../NotFound"

export default function QuestionList() {
  const { loading, error, data } = useQuery(ALL_QUESTIONS)

  if (loading) return <Loading />

  if (error) return <NotFound />

  if (data.questions.length === 0) return <p>no question found</p>

  return (
    <div className="q--list">
      {data.questions.map(question => (
        <QuestionItem
          key={question.id}
          id={question.id}
          author={question.username}
          body={question.body}
          createdAt={question.createdAt}
          likes={question.likes}
          totalLikes={question.likes.length}
          totalAnswers={question.answers.length}
        />
      ))}
    </div>
  )
}
