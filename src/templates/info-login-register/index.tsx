import * as Styled from './styles'
import { Loading } from '../../helper/loading'
import { AuthLogo } from '../../helper/authlogo'
import { Check } from '../../helper/check'
import { ErrorMessage } from '../../components/ErrorMessage'
import { TextComponent } from '../../components/TextComponent'

interface InforPros {
  loading?: boolean,
  error: string | null,
  message?: string | null,
  lock?: boolean,
  loginSucess?: boolean
}
export const Info = ({ loading, error, message, lock, loginSucess }: InforPros) => {
  const values = [loading, error, message, lock, loginSucess];

  const areAllFalsy = values.every((value) => !value);

  return (
    <Styled.Container areAllFalsy={areAllFalsy}>
      <Styled.Text>
        {message && <TextComponent>{message}</TextComponent>}
        {error && <ErrorMessage>{error}</ErrorMessage>}</Styled.Text>
      <Styled.Img>
        {loginSucess && <Check />}
        {lock && <AuthLogo />}
        {loading && <Loading />}
      </Styled.Img>
    </Styled.Container>
  )
}