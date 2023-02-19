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
  > a[href="#"] {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Name = styled.p`
  font: inherit;
  @media (max-width: 768px) {
    display: none;
  }
`;
