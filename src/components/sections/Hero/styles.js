import styled from "styled-components";

export const Banner = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
  }
  > svg {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 63px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
    height: 560px;
  }
  h2 {
    max-width: 440px;
    @media (min-width: 1440px) {
      max-width: 520px;
    }
  }
  svg {
    display: none;
    @media (min-width: 768px) {
      display: block;
      margin-right: 48px;
    }
    @media (min-width: 1280px) {
      margin-right: 96px;
    }
  }
`;
