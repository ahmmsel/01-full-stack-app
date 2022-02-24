import React from 'react'

import formatDate from '../../utility/formatDate'
import LikeButton from '../UI/Like/LikeButton'
import { LIKE_A } from '../UI/Like/like-mutation'
import { DELETE_A } from './answer-mutation'
import { useMutation } from '@apollo/client'
import { SINGLE_QUESTION } from '../Question/questions-query'
import OptionsModal from '../UI/Modal/OptionsModal'
import { useHistory } from 'react-router-dom'

export default function AnswerItem(props) {
  const { questionId, questionAuthor, id, author, body, createdAt, likes, totalLikes } = props
  
  const [deleteA] = useMutation(DELETE_A, {
    refetchQueries: [SINGLE_QUESTION],
    variables: {
      qid: questionId,
      answerId: id
    }
  })

  const history = useHistory()

  const date = formatDate(createdAt)

  return (
    <div className="answer--item">
      <header className="answer--header">
        <div className="answer--author">
          <h3>{author}</h3>
          <small className="pointer">{date}</small>
        </div>
        <OptionsModal 
          questionUser={questionAuthor} 
          answerUser={author} 
          onDelete={deleteA} 
          onEdit={() => history.push(`/q/${questionId}/${id}/edit-answer`)}
        />
      </header>
      <main className="answer--body">
        <p>{body}</p>  
      </main>
      <footer className="answer--footer">
        <div className="answer--actions">
          <div className="action--controller">
            <LikeButton likes={likes} variables={{ qid: questionId, answerId: id }} gql={LIKE_A} />
            <small>{totalLikes}</small>
          </div>
        </div>
      </footer>
    </div>
  )
}
