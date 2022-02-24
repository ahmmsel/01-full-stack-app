import React, { useContext } from 'react'
import { useHistory } from "react-router-dom"
import { useMutation } from '@apollo/client'

import "./auth.scss"
import useFormHandler from '../../hooks/useFormHandler'
import { LOGIN } from './auth-mutation'
import { AuthContext } from '../../context'
import Loading from '../UI/Loading/Loading'

export default function Login() {
  const ctx = useContext(AuthContext)

  const history = useHistory()

  const { values, inputChangeHandler, submitHandler } = useFormHandler({ username: "", password: "" })

  const [loginUser, { loading }] = useMutation(LOGIN, {
    update(_, { data: { loginUser } }) {
      ctx.login(loginUser)
      history.push("/")
    },
    errorPolicy: "all",
    variables: values
  })

  if (loading) return <Loading />

  return (
    <section className="section auth--section">
      <div className="container">
        <div className="section--title">
          <h1 className="title">login</h1>
        </div>
        <form className="auth--form" onSubmit={submitHandler.bind(null, loginUser)}>
          <div className="auth--controller">
            <label className="controller--action">
              username
              <input 
                type="text" 
                name="username"
                className="input primary-input"
                placeholder="e.g.: username34" 
                onChange={inputChangeHandler}
              />
            </label>
            <label className="controller--action">
              password
              <input 
                type="password" 
                name="password"
                className="input primary-input"
                placeholder="your password" 
                onChange={inputChangeHandler}
              />
            </label>
            <button type="submit" className='btn primary-btn'>login</button>
          </div>
        </form>
      </div>
    </section>
  )
}
