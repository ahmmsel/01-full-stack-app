import React from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { useMutation } from '@apollo/client'

import useFormHandler from '../../hooks/useFormHandler'
import { ALL_QUESTIONS } from './questions-query'

export default function QuestionForm({ initialValue = "", gql, variables = {}, config, goingTo }) {
  const { values, inputChangeHandler, submitHandler } = useFormHandler({ body: initialValue }, false)

  const history = useHistory()

  const location = useLocation()

  const [questionAction] = useMutation(gql, {
    refetchQueries: [
      ALL_QUESTIONS,
    ],
    variables: {
      ...variables,
      body: values.body
    }
  })

  const submitQuestionHandler = (e) => {
    e.preventDefault()
    history.push(goingTo || location.pathname)
    submitHandler(questionAction)
  }

  return (
    <form className="q--form" onSubmit={submitQuestionHandler}>
      <div className="form--controller">
        <textarea 
          type="text" 
          name="body"
          value={values.body}
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
