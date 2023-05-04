import styled, { css } from 'styled-components'

export const Button = styled.button`
${({ theme }) => css`
all:unset;
background-color: ${theme.color.secondaryColor};
border-radius:  ${theme.radius.small};
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`}
`
