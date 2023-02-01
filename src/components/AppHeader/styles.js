import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2),
    0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
  padding: 16px;
  @media (min-width: 768px) {
    padding: 16px 32px;
  }
  @media (min-width: 1024px) {
    padding: 16px 64px;
  }
  @media (min-width: 1440px) {
    padding: 16px 128px;
  }
`;

export const Logo = styled.p`
  margin-right: auto;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
