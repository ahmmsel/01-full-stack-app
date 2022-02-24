import React from 'react'

import AnswerItem from './AnswerItem'

export default function AnswerList({ answers, questionId, questionAuthor }) {
  return (
    <div className="answer--list">
      {answers.map(answer => (
        <AnswerItem
          key={answer.id}
          questionId={questionId}
          questionAuthor={questionAuthor}
          id={answer.id}
          author={answer.username}
          body={answer.body}
          createdAt={answer.createdAt}
          likes={answer.likes}
          totalLikes={answer.likes.length}
        />
      ))}
    </div>
  )
}
