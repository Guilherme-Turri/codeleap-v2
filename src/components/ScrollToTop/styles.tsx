import styled, { css } from 'styled-components'
import { isMobile } from '../../types/types'
export const Container = styled.a<isMobile>`
${({ theme, isMobile }) => css`
display: flex;
position:fixed;
width: ${isMobile ? '25px' : '50px'};
height: ${isMobile ? '25px' : '50px'};
bottom: ${theme.spacings.normal};
right: ${isMobile ? '3px' : '15px'};
cursor: pointer;
z-index: 999999;
`}`