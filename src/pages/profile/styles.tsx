import styled, { css } from 'styled-components'
import { isMobile } from '../../types/types'

interface AddProps {
  isLoggedUser: boolean
}

export const Container = styled.section<isMobile>`
display:flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
width: 100%;
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

`}
`
export const UserRef = styled.section<isMobile>`
${({ theme }) => css`
display: flex;
flex-direction: column;
align-items: center;
min-height: 12.5rem;
width: 100%;
align-items: center;
padding: ${theme.spacings.normal};
position: relative;
`
  }
`

export const Img = styled.img`
${({ theme }) => css`
width: 200px;
height: 200px;
display: flex;
border-radius: ${theme.radius.total};
object-fit: cover;
cursor: pointer;
`
  }
`

export const Add = styled.div<AddProps>`
${({ isLoggedUser }) => css`
width: 50px;
height: 50px;
display: ${isLoggedUser ? 'flex' : 'none'};
cursor:pointer;
position: absolute;
bottom: 60px;
backdrop-filter: blur(15px);
`}
`
