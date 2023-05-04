import styled, { css, keyframes } from 'styled-components'
import { isMobile } from '../../types/types'

interface MenuInterface {
  clicked: boolean;
  isMobile: boolean;
}

export const Container = styled.header`
${({ theme }) => css`
display: flex;
width: 100%;
max-height: 4rem;
border-bottom:3px solid ;
border-image: linear-gradient(90deg, rgba(44, 62, 80, 0.1) 0px, rgba(44, 100, 80, 0.6) 40%, rgba(44, 62, 80, 0.1) 100%) 1;
background-clip: padding-box;
justify-content: center;
align-items: center;
padding: ${theme.spacings.normal};
`}
`

export const Left = styled.div`
${({ theme }) => css`
display: flex;
width: 100%;
align-items: center;
justify-content: flex-start;
`}
`
export const Right = styled.nav`
${({ theme }) => css`
width: 100%;
display: flex;
justify-content: flex-end;
`}
`

export const Img = styled.div<isMobile>`
${({ theme, isMobile }) => css`
display: ${isMobile ? 'none' : 'flex'};
width: 3rem;
height: 3rem;
margin-right: ${theme.spacings.normal};;
`}
`
export const Actions = styled.div<isMobile>`
${({ theme, isMobile }) => css`
display: flex;
cursor:pointer;
font-weight: bold;
color:${theme.color.secondaryColor};
margin-left:  ${isMobile ? 'none' : '15px'};
margin-bottom: ${isMobile ? '15px' : 'none'};
`}
`
export const Menu = styled.div<MenuInterface>`
${({ theme, isMobile, clicked }) => css`
display: ${isMobile ? 'flex' : 'none'};
width: 30px;
height: 30px;
cursor: pointer;
animation: ${clicked ? rotateAnimation : 'none'} .2s forwards;
z-index: 9999;
`}
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;
export const Blur = styled.div<MenuInterface>`
${({ clicked, isMobile }) => css`
position: ${isMobile ? 'fixed' : 'none'};
width:${isMobile ? '100vw' : '100%'};
height: 100%;
top:0px;
left: 0px;
background: ${isMobile ? ' rgba(0,0,0,.5)' : 'none'};
display:${clicked || !isMobile ? 'flex' : 'none'};
flex-direction: ${isMobile ? 'column' : 'row'};
z-index: 9999;
justify-content: ${isMobile ? 'center' : 'end'} ;
align-items:center;
box-shadow:${isMobile ? ' 0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
backdrop-filter: blur(5px);
`}
`