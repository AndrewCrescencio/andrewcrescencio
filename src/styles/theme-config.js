import { createGlobalStyle } from "styled-components";
import { media } from "./media-querie";

export const myTheme = {
  colors: {
    black: "#252525",
    white: "#fff",
    navbarBg: "#1E1E1E"
  },
  sizes: {
    xs:8,
    sm:16,
    md:34,
    lg:64,
    xl:128,
  }
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
  }

  html {
    scroll-behavior: smooth;
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
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding-top: 56px;
    scroll-padding-top: 56px;
    ${media.tablet`
      padding-top: 64px;
      scroll-padding-top: 64px;
  `}
  }
`;
