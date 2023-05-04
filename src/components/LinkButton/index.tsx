import React from 'react'
import * as Styled from './styles'
import { Link } from 'react-router-dom'

interface LinkProps {
  size: 'small' | 'medium' | 'large',
  href: string,
  text: string,
}

export const LinkButton = ({ size, href, text }: LinkProps) => {
  return (
    <Styled.Container size={size} data-testid='link'>
      <Link to={href}>{text}</Link>
    </Styled.Container>

  )
}