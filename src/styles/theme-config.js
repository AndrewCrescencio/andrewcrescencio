import { createGlobalStyle } from "styled-components";
import { media } from "./media-querie";

export const myTheme = {
  colors: {
    black: "#121212",
    white: "rgba(255, 255, 255, 1)",
    onSurfaceHighEmphasis: 'rgba(255, 255, 255, 0.87)',
    onSurfaceMediumEmphasis: 'rgba(255, 255, 255, 0.6)',
    onSurfaceDisabled: 'rgba(255, 255, 255, 0.6)',
    primary: '#BB86FC',
    navbarBg: "#1E1E1E",
    divider: 'rgba(255, 255, 255, 0.12)'
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
    color: ${({ theme }) => theme.colors.onSurfaceHighEmphasis};
    padding-top: 63px;
    scroll-padding-top: 63px;
    ${media.desktop`
      padding-top: 73px;
      scroll-padding-top: 73px;
  `}
  }
`;
