import { createGlobalStyle } from "styled-components";
const Poppins = require ('./assets/fonts/Poppins-Regular.ttf')

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-display: auto;
  }
  body {
    font-family: 'Poppins';
  }
`;
