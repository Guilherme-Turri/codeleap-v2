import * as Styled from './styles'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'

import { valuesForm } from '../../types/types'

interface FormProps {
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void,
  usermail: valuesForm,
  userpassword: valuesForm
}

export const FormLogin = ({ usermail, userpassword, handleLogin }: FormProps) => {

  return (
    <Styled.Container data-testid='form' onSubmit={handleLogin} >
      <Input type='text' name='Email' {...usermail}></Input>
      <Input type='password' name='Password' {...userpassword} />
      <SubmitButton usermail={usermail.value} userpassword={userpassword.value} error={usermail.error}>
        Enter
      </SubmitButton>
    </Styled.Container>
  )
}