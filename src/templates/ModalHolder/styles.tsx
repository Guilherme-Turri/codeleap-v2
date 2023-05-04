import styled, { css } from 'styled-components'
import { isMobile } from '../../types/types'

export const Container = styled.div<isMobile>`
${({ isMobile }) => css`
position: fixed;
width: 100vw;
height: 100%;
top:0px;
left: 0px;
background: rgba(0,0,0,.4);
display: flex;
flex-direction: column;
z-index: 5000;
justify-content: center;
align-items: ${isMobile ? 'start' : 'center'};
`}
`
export const Blur = styled.div<isMobile>`
${({ isMobile }) => css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-direction: column;
background: rgba(255, 255, 255, 0.2);
border-radius:${isMobile ? 'none' : '16px'};
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
width: ${isMobile ? '100%' : '45rem'} ;
height: ${isMobile ? '100%' : '30rem'} ;
`
  }
`
export const Info = styled.div`
${({ theme }) => css`
display: flex;
margin: ${theme.spacings.normal};
`
  }
`
