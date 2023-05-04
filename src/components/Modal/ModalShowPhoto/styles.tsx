import styled, { css } from 'styled-components'
import { isMobile } from '../../../types/types'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
 `

export const Close = styled.div<isMobile>`
${({ theme, isMobile }) => css`
  position:absolute;
  display:flex;
  width:60px;
  height: 60px;
  border-radius: ${theme.radius.total};
  top: ${isMobile ? '65px' : '-20px'};
  right: ${isMobile ? '15px' : '-20px'};
  cursor:pointer;
`}
`

export const Img = styled.img<isMobile>`
${({ theme, isMobile }) => css`
width: ${isMobile ? '350px' : '450px'};
height: ${isMobile ? '350px' : '450px'};
display: flex;
border-radius: ${theme.radius.total};
object-fit: cover;
margin-top:${theme.spacings.normal};
`}
`