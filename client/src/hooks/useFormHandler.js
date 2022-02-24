import { useState } from 'react'

export default function useFormHandler(initialState = {}, defaultBehaviour = true) {
  const [values, setValues] = useState(initialState)

  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }

  const submitHandler = (submitted, event) => {
    defaultBehaviour && event.preventDefault()
    submitted()
  }

  return {
    values,
    inputChangeHandler,
    submitHandler
  }

}
