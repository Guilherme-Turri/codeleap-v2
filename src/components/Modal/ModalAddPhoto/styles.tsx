import styled, { css } from 'styled-components'
import { Container as TC } from '../../TextComponent/styles'
interface BtnProps {
  loadPhoto?: boolean
}

export const Container = styled.div`
${({ theme }) => css`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
padding: ${theme.spacings.xsmall};;
${TC}{
  font-size: 1.5rem;
}
input{
  all: unset;
}
`}
`

export const Button = styled.div<BtnProps>`
${({ theme, loadPhoto }) => css`
display:${loadPhoto ? 'none' : 'flex'};
justify-content: space-evenly;
align-items: center;
width: 6rem;
height: 3rem;
margin:  ${theme.spacings.normal};
`}
`

export const Wrapper = styled.div`
display:flex;
align-items: center;
width: 100%;
justify-content: space-evenly;
`

export const Close = styled.div`
${({ theme }) => css`
  position:absolute;
  display:flex;
  width:3.75rem;
  height: 3.75rem;
  border-radius: ${theme.radius.total};
  top:-20px;
  right:-20px;
  cursor:pointer;
`}
`

