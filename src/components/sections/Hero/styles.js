import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Banner = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;

  ${media.tablet`
    padding: 80px 0;
    min-height: calc(100vh - 73px);
  `}

  ${media.laptop`
    padding: 120px 0;
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 640px;
  text-align: center;

  ${media.tablet`
    text-align: left;
    max-width: 720px;
  `}

  h2 {
    max-width: 100%;
    margin-bottom: 16px;
  }

  h3 {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

export const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-top: 32px;

  ${media.tablet`
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  `}

  a {
    width: 100%;
    max-width: 280px;

    ${media.tablet`
      width: auto;
    `}
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
  opacity: 0.6;

  ${media.tablet`
    display: none;
  `}

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;