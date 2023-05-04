import * as Styled from './styles'
import { ShieldLock } from '@styled-icons/bootstrap/ShieldLock'

export const AuthLogo = () => {
  return (
    <Styled.Container data-testid='authlogo'>
      <ShieldLock></ShieldLock>
    </Styled.Container>
  )
}