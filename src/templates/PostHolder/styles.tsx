import styled, { css } from 'styled-components'

import { Container as TC } from '../../components/TextComponent/styles'
import { isMobile } from '../../types/types'
import { Button as ButtonContainer } from '../../components/Button/styles'

export const Container = styled.section`
  ${({ theme }) => css`
  position: relative;
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 3px solid;
  border-image: linear-gradient(90deg, rgba(44, 62, 80, 0.4) 0px, rgba(44, 100, 80, 0.8) 50%, rgba(44, 62, 80, 0.4) 100%) 10;
  background-clip: padding-box;
  border-radius: ${theme.radius.medium};
  margin-top: ${theme.spacings.normal};

  ${TC}{
    padding:${theme.spacings.normal};
  }

  ${ButtonContainer}{
    background: linear-gradient(90deg, rgba(44, 62, 80, 0.4) 0px, rgba(44, 100, 80, 0.8) 50%, rgba(44, 62, 80, 0.4) 100%);
  }
 `}
 `

export const Wrapper = styled.section<isMobile>`
  ${({ theme, isMobile }) => css`
  display:flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  height:100%
  justify-content: center;
  align-items: left;
  background-color:#2C3E50; 
  border-radius: ${theme.radius.medium};
  margin:${theme.spacings.small};
  `}
 `
export const Info = styled.div`
display:flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Btn = styled.div`
display:flex;
width: 3rem;
height: 3rem;
position: absolute;
bottom: -15px;
left: -15px;
justify-content: center;
align-items: center;
`