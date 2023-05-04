import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    max-width:1400px;
    margin: 0 auto;
  }
    
  body{
    font-family: Roboto, sans-serif;
    background-color: ${theme.color.backgroundColor};
    color: ${theme.color.primaryColor}
  }
  a{
    text-decoration: none;
    color:${theme.color.secondaryColor};
    }
    ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;
