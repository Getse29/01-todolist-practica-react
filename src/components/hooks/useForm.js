import { useState } from "react"

export const useForm = (iniState = {}) => {

  const [values, setValues] = useState(iniState)

  const reset = () => [
    setValues(iniState)
  ]

  const handleInput = ({ target }) => {
    setValues({
      ...values,
      [target.name]: [target.value]
    })
  }

  const resetForm = ({ target }) => {
    target.reset()
  }

  return [values, handleInput, resetForm, reset]

}
