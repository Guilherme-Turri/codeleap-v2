import styled, { css } from 'styled-components'
import { Container as TextContainer } from '../../components/TextComponent/styles'
import { isMobile } from '../../types/types'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content:center;
  align-items:center;
`
export const Wrapper = styled.div<isMobile>`
${({ theme, isMobile }) => css`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
height:75%;
width: ${isMobile ? '90%' : '50%'};
border:1px solid ${theme.color.secondaryColor};
border-radius:${theme.radius.medium};
padding: ${theme.spacings.normal};
${TextContainer}{
  font-weight:bold;
  font-size:${theme.sizes.big};
}
a{
  display:flex;
  background:${theme.color.secondaryColor};
  color:white;
  width:50%;
  padding:${theme.spacings.xsmall};
  border-radius:${theme.radius.small};
  font-weight:bold;
  justify-content:center;
  align-items:center;
}
`}
`
export const Img = styled.div`
width:15rem;
height:15rem;
`

