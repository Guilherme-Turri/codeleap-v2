import styled, { css } from 'styled-components'
export const Container = styled.div`
${({ theme }) => css`
color: ${theme.color.secondaryColor};
width: 100%;
height: 100%;
`}
`