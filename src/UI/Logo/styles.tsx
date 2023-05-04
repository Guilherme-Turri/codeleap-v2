import styled, { css } from "styled-components";

export const Container = styled.div`
${({ theme }) => css`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
border-radius: ${theme.radius.total};
background: #273036;
box-shadow: inset 5px 5px 26px #1e252a,
            inset -5px -5px 26px #303b42;
`}`

export const Logo = styled.div`
${({ theme }) => css`
height: 50%;
width: 50%;
color: ${theme.color.secondaryColor};
`}`