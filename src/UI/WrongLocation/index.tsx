import React from 'react'
import { LocationOff } from '@styled-icons/material-outlined/LocationOff'
import * as Styled from './styles'

export const WrongLocation = () => {
  return (
    <Styled.Container data-testid='WrongLocation'>
      <LocationOff />
    </Styled.Container>
  )
}