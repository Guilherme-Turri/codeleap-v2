import styled, { css } from 'styled-components'
export const Container = styled.footer`
${({ theme }) => css`
padding: ${theme.sizes.big};
display: flex;
justify-content: center;
align-items: center;
border-top: 3px solid ;
border-image: linear-gradient(90deg, rgba(44, 62, 80, 0.1) 0px, rgba(44, 100, 80, 0.6) 40%, rgba(44, 62, 80, 0.1) 100%) 1;
background-clip: padding-box;
margin-top: ${theme.spacings.normal};
`}
`