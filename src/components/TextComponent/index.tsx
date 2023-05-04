import React from 'react'
import * as Styled from './styles'
interface TextComponentProps {
  children: React.ReactNode,
}
export const TextComponent = ({ children }: TextComponentProps) => {
  return (
    <Styled.Container>{children}</Styled.Container>
  )
}
