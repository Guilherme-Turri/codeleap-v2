import React from 'react'
import * as Styled from './styles'

export interface HeadingProps {
  children: React.ReactNode;
  uppercase: boolean;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  big: boolean;
}

export const Heading = ({ children, uppercase, as, big }: HeadingProps) => {
  return (
    <Styled.Container big={big} as={as} uppercase={uppercase}>{children}</Styled.Container>
  )
}
