import styled, { css } from 'styled-components'
import { HeadingProps } from './index'

export const Container = styled.h1<HeadingProps>`
  ${({ theme, uppercase, big }) => css`
      text-transform: ${uppercase ? 'uppercase' : 'none'};
      color: ${theme.color.secondaryColor};
      font-size: ${big ? theme.sizes.huge : theme.sizes.xbig};
      font-family: ${theme.fonts.logoFont};
      `}
  `