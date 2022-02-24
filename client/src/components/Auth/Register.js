import { useMutation } from '@apollo/client'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context'
import useFormHandler from '../../hooks/useFormHandler'
import Loading from '../UI/Loading/Loading'
import { REGISTER } from './auth-mutation'

import "./auth.scss"

export default function Register() {
 const ctx = useContext(AuthContext)

 const history = useHistory()

 const { values, inputChangeHandler, submitHandler } = useFormHandler({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [registerUser, { loading }] = useMutation(REGISTER, {
    update(_, { data: { registerUser } }) {
      ctx.login(registerUser)
      history.push("/")
    },
    variables: values
  })

  return (
    <section className="section auth--section">
      {loading && <Loading />}
      <div className="container">
        <div className="section--title">
          <h1 className="title">Register</h1>
        </div>
        <form className="auth--form" onSubmit={submitHandler.bind(null, registerUser)}>
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
              email
              <input 
                type="text" 
                name="email"
                className="input primary-input"
                placeholder="e.g.: example@gmail.com" 
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
            <label className="controller--action">
              confirm password
              <input 
                type="password" 
                name="confirmPassword"
                className="input primary-input"
                placeholder="confirm password" 
                onChange={inputChangeHandler}
              />
            </label>
            <button type="submit" className='btn primary-btn'>Register</button>
          </div>
        </form>
      </div>
    </section>
  )
}
