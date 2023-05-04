import * as Styled from './styles'
import { Loader } from '@styled-icons/boxicons-regular/Loader'

export const Loading = () => {
  return (
    <Styled.Container data-testid='loading'>
      <Loader></Loader>
    </Styled.Container>
  )
}