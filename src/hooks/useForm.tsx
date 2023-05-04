import React from 'react'

const typeField = {
  email: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}(\.co\.uk)?$/,
    message: "Please fill in a valid email."
  }
}

export const useForm = () => {
  const [value, setValue] = React.useState<string>('')
  const [error, setError] = React.useState<string>('');

  const validate = (value: string) => {
    if (typeField.email.regex.test(value) === false) setError(typeField.email.message)
    else setError('');
  }

  const onChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
    if (target.placeholder === "Email") {
      validate(target.value)
    }
  }

  return (
    { value, onChange, error, setValue }
  )
}
