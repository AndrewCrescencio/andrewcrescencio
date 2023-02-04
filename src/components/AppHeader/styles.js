import { media } from "@/styles/media-querie";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
export const Wrapper = styled.nav`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.tablet`
    height: 64px;
  `}
`;
export const Logo = styled.p`
  margin-right: auto;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
