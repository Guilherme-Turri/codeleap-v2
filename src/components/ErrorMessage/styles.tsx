import styled, {css} from 'styled-components'

export const Container = styled.p`
${({theme}) => css`
color: ${theme.color.error};
font-size: ${theme.sizes.small};
`}
`