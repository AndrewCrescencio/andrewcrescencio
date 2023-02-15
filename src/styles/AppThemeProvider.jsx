import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles, myTheme } from "./theme-config";

export const AppThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={myTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
