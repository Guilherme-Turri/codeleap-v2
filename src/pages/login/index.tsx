import React from 'react'
import * as Styled from './styles'
import { TextComponent } from '../../components/TextComponent'
import { useForm } from '../../hooks/useForm'
import { Link, useNavigate } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData'
import { useWidth } from '../../hooks/useWidth'
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../services/users/fetch/fetchLogin'
import { authLogin } from '../../services/users/auth/authLogin'
import { setLoggedUser } from '../../context/user/Login/setLoggeduser'
import { Info } from '../../templates/info-login-register'
import { DoorOpened } from '../../UI/DoorOpened'
import { Left } from '../../templates/Left'
import { FormLogin } from '../../templates/FormLogin'

export const Login = () => {
  const { error, loading, request } = useFetchData();
  const [message, setMessage] = React.useState<string>();
  const [lock, setcheckLock] = React.useState<boolean>(false)
  const [loginSucess, setLoginSucess] = React.useState<boolean>(false)

  const usermail = useForm();
  const userpassword = useForm();
  const width = useWidth();
  const isMobile = width <= 850;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const valuesToLogin = [!usermail.value, !userpassword.value, loginSucess, loading].every((e) => e === false)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valuesToLogin && usermail.error === '') {
      setMessage('')
      setcheckLock(false)
      const result = await fetchLogin(usermail.value, userpassword.value, request)
      if (result !== undefined) {
        const { response, json } = result;
        if (!json.token) {
          setMessage(json.status)
        }
        if (json.token && response.status === 200) {
          setcheckLock(true)
          handleAuth(json.token)
        }
      }
    }
  }

  const handleAuth = async (token: string) => {
    const result = await authLogin(token, usermail.value, userpassword.value, request)
    if (result !== undefined) {
      const { response, json } = result
      if (response.status === 401) {
        setcheckLock(false)
        setMessage(response.statusText);
      }
      if (!json.user) {
        setcheckLock(false)
        setMessage(json.status)
      }
      if (response.status === 200 && json.user) {
        setcheckLock(false)
        setLoginSucess(true)
        setLoggedUser(json.user, dispatch, navigate, token)
      }
    }
  }


  return (
    <Styled.Container isMobile={isMobile} data-testid='loginpage'>
      <Left></Left>
      <Styled.Right>
        <Styled.Img>
          <DoorOpened />
        </Styled.Img>
        <FormLogin handleLogin={handleLogin} usermail={usermail} userpassword={userpassword} />
        <Styled.Info>
          <Info error={error} loading={loading} message={message} lock={lock} loginSucess={loginSucess} />
        </Styled.Info>
        <TextComponent>Don't have an account? <Link to='/register'> Register Now!</Link> </TextComponent>
      </Styled.Right>
    </Styled.Container >
  )
}

