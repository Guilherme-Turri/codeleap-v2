import * as Styled from './styles'
import { Thinking } from '@styled-icons/fluentui-system-filled/Thinking'

export const Logo = () => {
  return (
    <Styled.Container>
      <Styled.Logo>
        <Thinking data-testid="Logo" />
      </Styled.Logo>
    </Styled.Container>
  )
}

