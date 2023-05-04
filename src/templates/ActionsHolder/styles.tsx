import styled, { css } from 'styled-components'
import { isMobile } from '../../types/types'

export const Container = styled.div<isMobile>`
${({ isMobile }) => css`
display:flex;
width: 100%;
flex-direction:${isMobile ? 'row' : 'column'};
justify-content: center;
align-items: center;
`}
`

export const Wrapper = styled.div<isMobile>`
${({ theme, isMobile }) => css`
display:flex;
width: ${isMobile ? '30px' : '50px'};
height: ${isMobile ? '30px' : '50px'};
justify-content: center;
align-items: center;
cursor: pointer;
margin: ${theme.spacings.xsmall};
`}
`
