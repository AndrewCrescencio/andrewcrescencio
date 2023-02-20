import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  color: ${({ theme }) => theme.colors.white};
`;

export const Navbar = styled.nav`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    padding: 20px 0;
  }
  > a[href="#"] {
    display: flex;
    align-items: center;
    gap: 16px;
    transition: 250ms ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Name = styled.p`
  font: inherit;
  @media (max-width: 768px) {
    display: none;
  }
`;
