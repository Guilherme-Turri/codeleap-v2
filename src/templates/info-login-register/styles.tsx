import styled, { css } from 'styled-components'

interface ContainerProps {
  areAllFalsy: boolean
}

export const Container = styled.div<ContainerProps>`
${({ theme, areAllFalsy }) => css`
display:${areAllFalsy ? 'none' : 'flex'} ;
justify-content:center;
margin: ${theme.spacings.xsmall};
`}
`

export const Text = styled.div`
display:flex;
height:100%;
width:100%;
`

export const Img = styled.div`
${({ theme }) => css`
display:flex;
height:32px;
width:32px;
color:${theme.color.secondaryColor};
`}
`


