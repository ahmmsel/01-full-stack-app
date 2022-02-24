import { useReducer } from "react";

import modalReducer, { initialState } from "../../utility/reducers/modal-reducer";

export default function useModal() {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  const modalHandler = (type) => dispatch({ type })

  return {
    state,
    modalHandler
  }
}
