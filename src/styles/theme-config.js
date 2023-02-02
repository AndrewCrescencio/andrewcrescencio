import { createGlobalStyle } from "styled-components";

export const myTheme = {
  colors: {
    background: "var(--background)",
    text: "var(--text)",
  },
};

export const GlobalStyles = createGlobalStyle`
  :root {
   --background: #fff;
   --text: #121212;
  }

  [data-theme="dark"] {
    --background: rgb(40,40,40);
    --text: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  body {  
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

`;
