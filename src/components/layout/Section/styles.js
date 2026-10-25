import styled from "styled-components"
import { media } from "@/styles/media-querie";

export const Section = styled.section`
  padding: 80px 0;
  background-color: ${({ theme, black, variant }) => {
    if (black) return theme.colors.black;
    if (variant === "alt") return theme.colors.navbarBg;
    return "transparent";
  }};
  color: ${({ theme, black }) => (black ? theme.colors.white : theme.colors.onSurfaceHighEmphasis)};

  ${media.laptop`
    padding: 128px 0;
  `}
`;