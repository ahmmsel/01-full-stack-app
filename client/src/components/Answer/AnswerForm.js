import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from "@apollo/client"

import useFormHandler from '../../hooks/useFormHandler'
import { SINGLE_QUESTION } from '../Question/questions-query'

export default function AnswerForm({ initialValue = "", gql, variables = {}, config, location = false, goingTo }) {
  const { values: { body }, inputChangeHandler, submitHandler } = useFormHandler({ body: initialValue }, false)

  const history = useHistory()

  const [answerQuestion] = useMutation(gql, {
    refetchQueries: [
      SINGLE_QUESTION,
    ],
    variables: {
      ...variables,
      body
    }
  })

  const submitAnswerHandler = (event) => {
    event.preventDefault()
    location && history.push(goingTo)
    submitHandler(answerQuestion)
  }

  return (
    <form className="answer--form" onSubmit={submitAnswerHandler}>
      <div className="form--controller">
        <textarea 
          type="text" 
          value={body}
          name="body"
          className="input primary-textarea" 
          spellCheck="false"
          placeholder={config.placeholder}
          onChange={inputChangeHandler}
        ></textarea>
        <button type="submit" className="btn secondary-btn">{config.btnTitle}</button>
      </div>
    </form>
  )
}
