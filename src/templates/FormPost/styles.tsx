import styled, { css } from 'styled-components'
import { Container as InputContainer } from '../../components/Input/styles'
import { Container as TextContainer } from '../../components/TextComponent/styles'

interface iForm {
  isClosable: boolean;
}

export const Container = styled.form<iForm>`
${({ theme, isClosable }) => css`
position:relative;
display: flex;
flex-direction: column;
width: 100%;
height: 25rem;
justify-content: space-evenly;
border: ${isClosable ? 'none' : '3px solid'}!important;
padding:${theme.spacings.big};
border-image: linear-gradient(90deg, rgba(44, 62, 80, 0.5) 0px, rgba(44, 100, 80, 0.8) 50%, rgba(44, 62, 80, 0.4) 100%) 10!important;

  background-clip: padding-box;
${TextContainer}{
  color: ${theme.color.optionalColor};
  font-weight: bold;
}
${InputContainer} {
  height:30px;
  border: 3px solid;
  border-image: linear-gradient(90deg, rgba(44, 62, 80, 0.4) 0px, rgba(44, 100, 80, 0.8) 50%, rgba(44, 62, 80, 0.4) 100%) 10;
  background-clip: padding-box;
  background-color:#2C3E50;
 }
`}
`
export const TextArea = styled.div`
display:flex;
`
