import * as Styled from './styles'
import React from 'react'
import { ErrorMessage } from '../ErrorMessage'

export interface InputProps {
  type: string,
  name: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  value: string,
  error?: string
}

export const Input = ({ type, name, value, onChange, error }: InputProps) => {
  const [visible, setVisible] = React.useState(false)

  const checkBlur = () => {
    if (error) {
      setVisible(true)
    }
  }
  return (
    <>
      <Styled.Container data-testid="Input" onBlur={checkBlur} onChange={onChange} value={value} type={type} placeholder={name} autoComplete='new-password' />
      {error && visible ? <ErrorMessage data-testid="ErrorMessage" >{error}</ErrorMessage > : null}
    </>
  )
}
