import styled, { css } from 'styled-components'
interface ContainerProps {
  enableColor: boolean
}
export const Container = styled.button<ContainerProps>`
${({ theme, enableColor }) => css`
  display: flex;
  all:unset;
  background: ${enableColor ? theme.color.secondaryColor : 'grey'};
  cursor: ${enableColor ? 'pointer' : 'auto'};
  width: 100%;
  border-radius: ${theme.radius.small};
  height: 2rem;
  text-align: center;
  
  `}
`