import { createGlobalStyle, palette2 } from '../../../foundation';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color:${palette2('neutral', 'elevation')};
    margin: 0;
    padding-right: 0 !important;
    background: ${palette2('neutral', 'b03')};
    padding: 0;
    font-family: Lato, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
