import React from 'react'
import * as Styled from './styles'

interface TextAreaProps {
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const TextArea = ({ onChange, value }: TextAreaProps) => {
  return (
    <Styled.Container value={value} onChange={onChange} rows={10} placeholder='Content Here' />
  )
}