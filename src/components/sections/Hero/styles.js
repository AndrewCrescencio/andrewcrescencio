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
    bottom: 32px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
    animation: bounce 2s infinite;

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translate(-50%, 0);
      }
      40% {
        transform: translate(-50%, -10px);
      }
      60% {
        transform: translate(-50%, -5px);
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: 48px 0;

  ${media.tablet`
    justify-content: space-between;
    height: 620px;
    padding: 64px 0;
  `}

  ${media.laptop`
    height: 680px;
  `}
`;

export const Content = styled.div`
  max-width: 580px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.tablet`
    max-width: 520px;
    margin-right: 48px;
  `}

  ${media.laptop`
    max-width: 600px;
    margin-right: 96px;
  `}

  h1 {
    max-width: 100%;
  }

  h2 {
    max-width: 100%;
  }

  p {
    max-width: 100%;
  }
`;

export const Highlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};

  ${media.tablet`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;

export const HighlightItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 12px;
  flex: 1;
  min-width: 0;
  transition: all 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  ${media.tablet`
    min-width: calc(50% - 8px);
  `}

  ${media.laptop`
    min-width: calc(33.333% - 10px);
  `}
`;

export const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;

  ${media.tablet`
    flex-direction: row;
    align-items: center;
  `}

  a, button {
    width: 100%;
    ${media.tablet`
      width: auto;
    `}
  }
`;