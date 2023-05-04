import styled, { css, keyframes } from 'styled-components'
import { isMobile } from '../../types/types'
import { Container as Post } from '../../templates/FormPost/styles'
interface ShowPost {
  isMobile: boolean,
  clicked: boolean
}

export const Container = styled.main`
display: flex;
height: 100%;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

export const Content = styled.section<isMobile>`
${({ theme, isMobile }) => css`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
width: ${isMobile ? '85%' : '50rem'};
flex-direction: column;
margin: ${theme.spacings.normal};
position:relative;
`}
`

export const Info = styled.div`
display:flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
`

export const Add = styled.div<ShowPost>`
${({ isMobile, clicked }) => css`
display: ${isMobile ? 'flex' : 'none'};
width: 40px;
height: 40px;
position: fixed;
right: 15px;
top:${clicked ? '60px' : '110px'};
z-index: 1001;
cursor: pointer;
`}
`
export const Blur = styled.div<ShowPost>`
${({ clicked, isMobile, theme }) => css`
position: ${isMobile ? 'fixed' : 'none'};
width:${isMobile ? '100vw' : '100%'};
height: 100%;
top:0px;
left: 0px;
background: ${isMobile ? ' rgba(0,0,0,.5)' : 'none'};
display:${clicked || !isMobile ? 'flex' : 'none'};
flex-direction: ${isMobile ? 'column' : 'row'};
z-index: 1000;
justify-content: ${isMobile ? 'center' : 'end'} ;
align-items:center;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
${Post}{
 border: ${isMobile ? 'none' : '1px solid' + theme.color.secondaryColor} ;
 padding:${isMobile ? '50px' : ''};
}
`}
`

export const Notification = styled.div<isMobile>`
  ${({ isMobile }) => css`
    position: fixed;
    bottom: 65px;
    right: ${isMobile ? '3px' : '15px'}; 
    z-index: 1000;
    width: ${isMobile ? '25px' : '50px'};
    height: ${isMobile ? '25px' : '50px'};
    animation: ${shake} 2s ease-in-out;
    cursor: pointer;
 `}
`;
const shake = keyframes`
  0% { transform: rotate(0); }
  15% { transform: rotate(12deg); }
  30% { transform: rotate(-12deg); }
  45% { transform: rotate(8deg); }
  60% { transform: rotate(-8deg); }
  75% { transform: rotate(4deg); }
  85% { transform: rotate(-4deg); }
  92% { transform: rotate(1deg); }
  100% { transform: rotate(0); }
`
