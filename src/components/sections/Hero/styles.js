import styled from "styled-components";

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-bottom: 1px solid #444c56;
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
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
