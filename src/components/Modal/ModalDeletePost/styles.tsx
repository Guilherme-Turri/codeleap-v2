import styled, { css } from 'styled-components'
import { Container as TC } from '../../TextComponent/styles'

export const Container = styled.div`
${({ theme }) => css`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
${TC}{
  font-size: ${theme.sizes.big};
}
`}
`
export const Button = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
width: 6rem;
height: 3rem;
`
export const Wrapper = styled.div`
display:flex;
 flex-direction: column;
align-items: center;
width: 100%;
justify-content: space-evenly; 
`
export const Actions = styled.div`
${({ theme }) => css`
display:flex;
 flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-evenly; 
padding: ${theme.spacings.normal};
`}
`