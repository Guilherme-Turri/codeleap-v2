import styled, { css } from 'styled-components'
import { isMobile } from '../../types/types'

export const Container = styled.div<isMobile>`
${({ isMobile }) => css`
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`}
`
export const Right = styled.div`
display: flex;
height: 70%;
width: 100%;
flex-direction: column;
align-items: center;
justify-content:space-evenly;
`
export const Img = styled.div`
width:5rem;
height:5rem;
`
export const Info = styled.div`
display:flex;
`



