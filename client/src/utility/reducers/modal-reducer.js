export default function modalReducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return { isVisible: true }
    case "CLOSE":
      return { isVisible: false }
    default:
      throw new Error("you must add type")
  }
}

export const initialState = {
  isVisible: false
}