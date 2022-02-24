import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import "./question.scss"
import formatDate from '../../utility/formatDate'
import LikeButton from '../UI/Like/LikeButton'
import { LIKE_Q } from '../UI/Like/like-mutation'
import { useMutation } from '@apollo/client'
import { DELETE_Q } from './question-mutation'
import { ALL_QUESTIONS } from './questions-query'
import OptionsModal from '../UI/Modal/OptionsModal'

export default function QuestionItem(props) {
  const { id, author, body, createdAt, likes, totalLikes, totalAnswers } = props

  const [deleteQ] = useMutation(DELETE_Q, {
    refetchQueries: [ALL_QUESTIONS],
    variables: {
      id
    }
  })

  const date = formatDate(createdAt)

  const history = useHistory()

  const location = useLocation()

  const linkHandler = () => {
    if (location.pathname === `/q/${id}`) return 
    history.push(`/q/${id}`)
  }

  return (
    <article className="q--article">
      <header className="q--header">
        <div className="q--author">
          <h3>{author}</h3>
          <small className="pointer" onClick={linkHandler}>{date}</small>
        </div>
        <OptionsModal questionUser={author} onEdit={() => history.push(`/q/${id}/edit-question`)} onDelete={deleteQ} />
      </header>
      <main className="q--body">
        <p>{body}</p>  
      </main>
      <footer className="q--footer">
        <div className="q--actions">
          <div className="action--controller">
            <LikeButton likes={likes} variables={{ qid: id }} gql={LIKE_Q} />
            <small>{totalLikes}</small>
          </div>
          <div className="action--controller" onClick={linkHandler}>
            <span className="btn icon bi bi-chat"></span>
            <small>{totalAnswers}</small>
          </div>
        </div>
      </footer>
    </article>
  )
}
