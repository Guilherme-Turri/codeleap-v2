import styled, { css } from 'styled-components'
export const Img = styled.div`
${({ theme }) => css`
color: ${theme.color.optionalColor};
width: 100%;
height: 100%;
`}
`