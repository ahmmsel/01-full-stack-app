export const initialState = {
  user: null
}

export default function authReducer(state, action) {
  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      }
    case "LOGOUT":
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}