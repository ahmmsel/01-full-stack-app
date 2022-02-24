import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context'

export default function Navbar() {
  const { user: isAuth, logout } = useContext(AuthContext)
  return (
    <nav className="main--navbar">
      <ul className="nav--list">
          {!isAuth ? 
            <Fragment>
              <li className="nav--item">
                <NavLink to="/register" className="btn flat--btn">register</NavLink>
              </li>
              <li className="nav--item">
                <NavLink to="/login" className="btn flat--btn">login</NavLink>
              </li>
            </Fragment> :
            <Fragment>
              <li className="nav--item">
                <NavLink to="/q/ask-question" className="btn icon bi bi-question-lg"></NavLink>
              </li>
              <li className="nav--item">
                <button className="btn primary-btn" onClick={logout}>logout</button>
              </li>
            </Fragment>
          }
      </ul>
    </nav>
  )
}
