import React from 'react'
import * as Styled from './styles'

interface ErrorMessageProps {
  children: React.ReactNode
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <Styled.Container>{children}</Styled.Container>
  )
}
