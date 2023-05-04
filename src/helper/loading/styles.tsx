import styled, { keyframes } from 'styled-components'

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
animation:${spinAnimation} 1.5s linear infinite;
`

