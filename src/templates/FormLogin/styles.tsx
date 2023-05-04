import styled, { css } from 'styled-components'

export const Container = styled.form`
${({ theme }) => css`
display: flex;
flex-direction: column;
width: 50%;
height: 11.875rem;
justify-content: space-evenly;
`}
`