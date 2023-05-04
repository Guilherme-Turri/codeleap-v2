import styled, { css } from 'styled-components'
interface ContainerProps {
  size: 'small' | 'medium' | 'large'
}

const setWidth = {
  small: () => css`
  width: 20%;
  `,
  medium: () => css`
  width:50%;
  `,
  large: () => css`
  width:70%;
  `,
}

export const Container = styled.div<ContainerProps>`
${({ theme, size }) => css`
display:flex;
width:100%;
justify-content:center;
  a{
  display:flex;
  ${setWidth[size]}
  background:${theme.color.secondaryColor};
  color: white;
  padding: ${theme.spacings.xsmall};
  border-radius: ${theme.radius.small};
  justify-content: center;
  align-items: center;
  }
`}
`