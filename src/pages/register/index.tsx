import React from 'react'
import { TextComponent } from '../../components/TextComponent'
import * as Styled from './styles'
import { useForm } from '../../hooks/useForm'
import { Link, useNavigate } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import { createUser } from '../../services/users/create/createUser'
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '../../context/user/Login/setLoggeduser'
import { Info } from '../../templates/info-login-register'
import { Pencil } from '../../UI/Pencil'
import { Left } from '../../templates/Left'
import { FormRegister } from '../../templates/FormRegister'
import { useWidth } from '../../hooks/useWidth'

export const Register = () => {
  const { error, loading, request } = useFetchData();
  const [message, setMessage] = React.useState<string>()

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const width = useWidth();
  const isMobile = width <= 850;


  const usermail = useForm();
  const userpassword = useForm();
  const username = useForm();

  const valuesToLogin = [!usermail.value, !userpassword.value, loading].every((e) => e === false)

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (valuesToLogin && usermail.error === '') {
      setMessage('')
      const result = await createUser(username.value, usermail.value, userpassword.value, request)
      if (result !== undefined) {
        const { response, json } = result;
        if (!json.user) {
          setMessage(json.msg)
        }
        if (response.status === 200 && json.user && json.token) {
          setMessage(json.msg)
          setLoggedUser(json.user, dispatch, navigate, json.token)
        }
      }
    }
  }

  return (
    <>
      <Styled.Container data-testid='containerRegiste' isMobile={isMobile}>
        <Left></Left>
        <Styled.Right>
          <Styled.Img>
            <Pencil />
          </Styled.Img>
          <FormRegister usermail={usermail} username={username} userpassword={userpassword} handleRegister={handleRegister}></FormRegister>
          <Styled.Info>
            <Info loading={loading} error={error} message={message} />
          </Styled.Info>
          <TextComponent>Do you already have an account? <Link to='/'>Go to Login!</Link> </TextComponent>
        </Styled.Right>
      </Styled.Container>
    </>
  )
}
