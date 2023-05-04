import styled, { css } from 'styled-components'
import { isMobile } from '../../types/types'

export const Container = styled.main<isMobile>`
${({ theme, isMobile }) => css`
min-height: 150px;
display: flex;
flex-direction:${isMobile ? 'column' : 'row'} ;
flex: 0 0 85%; 
justify-content: space-evenly;
margin-top: ${theme.spacings.xsmall};
`}
`
export const User = styled.div`
${({ theme }) => css`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
flex: 0 20%; 
a{
  color: ${theme.color.optionalColor};
  font-weight: bold;
  cursor: pointer;
}
`}
`
export const Img = styled.img`
${({ theme }) => css`
width: 5.625rem;
height: 5.625rem;
display: flex;
border-radius: ${theme.radius.total};
object-fit: cover;
`}
`
export const Post = styled.div`
${({ theme }) => css`
display: flex;
flex: 0 80%; 
flex-direction: column;
justify-content:space-around;
padding: ${theme.spacings.small};
& > *:nth-child(1) {
  color: ${theme.color.optionalColor};
  font-weight: bold;
}
 & > *:nth-child(3) {
  font-size: ${theme.sizes.small};
  `}
`
