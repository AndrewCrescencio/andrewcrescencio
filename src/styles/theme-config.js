import { createGlobalStyle } from "styled-components";
import { media } from "./media-querie";

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
    --background: #121212;
    --text: #fff;
  }
  
  * {
    /* outline: 1px solid red; */
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
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
    width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box !important;
    font-family: 'Ubuntu', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding-top: 56px;
    scroll-padding-top: 56px;
    ${media.tablet`
      padding-top: 64px;
      scroll-padding-top: 64px;
  `}
  }
`;
