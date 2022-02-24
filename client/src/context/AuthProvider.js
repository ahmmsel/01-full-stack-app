import React, { useReducer } from 'react'
import jwtDecode from 'jwt-decode';

import authReducer, { initialState } from '../utility/reducers/auth-reducer'
import { AuthContext } from './'

const jwtToken = localStorage.getItem("token")

if (jwtToken) {
  const decodeToken = jwtDecode(jwtToken)

  if (decodeToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token")
  } else {
    initialState.user = decodeToken
  }
}

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = (user) => {
    localStorage.setItem("token", user.token)
    dispatch({
      type: "LOGIN",
      payload: user
    })
  }

  const logout = () => {
    localStorage.removeItem("token")
    dispatch({ type: "LOGOUT" })
  }

  return (
    <AuthContext.Provider value={{
      user: state.user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
