import React from 'react'
import { CaretUpCircle } from '@styled-icons/boxicons-regular/CaretUpCircle'
import * as Styled from './styles'

export const UpArrow = () => {
  return (
    <Styled.Container data-testid='UpArrow'>
      <CaretUpCircle />
    </Styled.Container>
  )
}