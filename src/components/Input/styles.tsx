import styled, { css } from 'styled-components'


export const Container = styled.input`
${({ theme }) => css`
outline: none;
all: unset;
border-bottom: 1px solid ${theme.color.secondaryColor};
width: 100%;
padding: ${theme.spacings.small};
box-sizing: border-box;
color: ${theme.color.primaryColor};
::placeholder{
  color:'#95A5A6'!important;
}
`}
`