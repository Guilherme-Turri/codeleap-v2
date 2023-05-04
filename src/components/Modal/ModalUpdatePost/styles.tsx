import styled, { css } from 'styled-components'
import { Container as TC } from '../../TextComponent/styles'
import { isMobile } from '../../../types/types'

export const Container = styled.div`
${({ theme }) => css`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
${TC}{
  font-size: ${theme.sizes.big};
}
`
  }
`
export const Button = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
width: 6rem;
height: 3rem;
`
export const Wrapper = styled.div`
display:flex;
align-items: center;
width: 100%;
justify-content: space-evenly;
`

export const Close = styled.div<isMobile>`
${({ theme, isMobile }) => css`
  position:absolute;
  display:flex;
  width:3.75rem;
  height: 3.75rem;
  border-radius: ${theme.radius.total};
  top: ${isMobile ? '60px' : '-20px'};
  right: ${isMobile ? '30px' : '-20px'};
  cursor:pointer;
`}
`
