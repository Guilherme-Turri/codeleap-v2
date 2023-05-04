import { DeleteForever } from '@styled-icons/material/DeleteForever'
import * as Styled from './styles'

export const Delete = () => {
  return (
    <Styled.Img data-testid='Delete'>
      <DeleteForever />
    </Styled.Img>
  )
}