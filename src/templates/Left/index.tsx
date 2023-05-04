import React from 'react'
import * as Styled from './styles'
import { TextComponent } from '../../components/TextComponent'
import { Heading } from '../../components/Heading'
import { Logo } from '../../UI/Logo'
import { useWidth } from '../../hooks/useWidth'

export const Left = () => {
  const url = window.location.href
  const isLoginPage = !url.includes('/register')
  const width = useWidth();

  const isMobile = width <= 850;

  return (
    <Styled.Container isMobile={isMobile}>
      <Styled.Logo isMobile={isMobile}>
        <Logo></Logo>
      </Styled.Logo>
      {isLoginPage ?
        <><Heading big={true} as='h1' uppercase={true}>CodeLeap</Heading>
          <TextComponent>Share NOW what is on your mind.</TextComponent></>
        :
        <><Heading big={true} as='h1' uppercase={true}>Register Now!</Heading>
          <TextComponent>Create your account and share your mind!.</TextComponent></>
      }
    </Styled.Container>
  )

}