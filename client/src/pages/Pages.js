import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import { AuthContext } from '../context'
import Layout from '../components/Layout/Layout'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import QuestionPage from "./QuestionPage"
import NotFoundPage from './NotFoundPage'
import EditQuestionPage from './EditQuestionPage'
import AskQuestionPage from './AskQuestionPage'
import EditAnswerPage from './EditAnswerPage'

export default function Pages() {
  const { user: isAuth } = useContext(AuthContext)

  return (
    <Router>
      <Layout>
        <Switch> 
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/register">
            {!isAuth ? <RegisterPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">
            {!isAuth ? <LoginPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/q" exact>
            <NotFoundPage />
          </Route>
          <Route path="/q/ask-question">
            <AskQuestionPage />
          </Route>
          <Route path="/q/:questionId" exact>
            <QuestionPage />
          </Route>
          <Route path="/q/:questionId/edit-question">
            <EditQuestionPage />
          </Route>
          <Route path="/q/:questionId/:answerId/edit-answer">
            <EditAnswerPage />
          </Route>
          <Route paht="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}
