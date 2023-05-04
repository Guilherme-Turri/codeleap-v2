
import styled, { css } from 'styled-components'
import { isMobile } from '../../types/types'

export const Container = styled.div<isMobile>`
${({ theme, isMobile }) => css`
display: flex;
width: 100%;
height: 70%;
flex-direction: column;
align-items: center;
justify-content: space-around;
border-right: ${isMobile ? 'none' : '0.5px solid' + theme.color.secondaryColor}; 
`}
`

export const Logo = styled.div<isMobile>`
${({ isMobile }) => css`
display: flex;
width:  ${isMobile ? '6.5rem' : '12.5rem'};
height: ${isMobile ? '6.5rem' : '12.5rem'};
`}
`