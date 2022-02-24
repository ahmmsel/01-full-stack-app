import React, { useContext, useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { Redirect } from 'react-router-dom'

import { AuthContext } from '../../../context'

export default function LikeButton({ likes, gql, variables }) {
  const { user } = useContext(AuthContext)

  const [liked, setliked] = useState(false)

  const [likeButton, { error }] = useMutation(gql, {
    variables: variables
  })

  useEffect(() => {
    if (user && likes.find(like => like.username === user.username)) {
      setliked(true)
    } else {
      setliked(false)
    }
  }, [user, likes])

  const styling = liked ? "liked btn icon bi bi-heart-fill" : "btn icon bi bi-heart"

  if (error) return <Redirect to="/login" />

  return (
    <span className={styling} onClick={likeButton}></span>
  )
}
