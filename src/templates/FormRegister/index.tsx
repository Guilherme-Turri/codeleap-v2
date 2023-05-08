import * as Styled from './styles'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'
import { valuesForm } from '../../types/types'

interface FormProps {
  handleRegister: (event: React.FormEvent<HTMLFormElement>) => void,
  username: valuesForm,
  usermail: valuesForm,
  userpassword: valuesForm
  loading: boolean
}

export const FormRegister = ({ loading, username, usermail, userpassword, handleRegister }: FormProps) => {

  return (
    <Styled.Container data-testid='form' onSubmit={handleRegister} >
      <Input type='text' name='Name' {...username}></Input>
      <Input type='text' name='Email' {...usermail}></Input>
      <Input type='password' name='Password' {...userpassword} />
      <SubmitButton name={username.value} usermail={usermail.value} userpassword={userpassword.value} error={usermail.error}>{loading ? 'Creating...' : 'Register'}</SubmitButton>
    </Styled.Container>
  )
}