const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function validators(action) {
  switch(action.type) {
    case "TRIM":
        return action.value.trim() !== ""
    case "MIN_LENGTH":
        return action.value.trim().length > action.length
    case "MAX_LENGTH":
        return action.value.trim().length < action.length
    case "EMAIL":
        return action.value.match(emailRegExp)
    case "IS_MATCH":
        return action.value === action.matchedValue
  }
}