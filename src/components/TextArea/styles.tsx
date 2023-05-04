import styled, { css } from 'styled-components'

export const Container = styled.textarea`
${({ theme }) => css`
display: flex;
outline: none;
width: 100%;
height: 100%;
border: 3px solid;
border-image: linear-gradient(90deg, rgba(44, 62, 80, 0.4) 0px, rgba(44, 100, 80, 0.8) 50%, rgba(44, 62, 80, 0.4) 100%) 10;
  background-clip: padding-box;
background-color:#2C3E50;
border-radius:${theme.radius.small};
color: ${theme.color.primaryColor};
padding: ${theme.spacings.small};
font-family: ${theme.fonts.secondaryFont};
::placeholder{
   font-family: ${theme.fonts.secondaryFont};
   color:'#95A5A6'
}
`}
`