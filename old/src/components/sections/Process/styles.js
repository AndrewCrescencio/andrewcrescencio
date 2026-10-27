import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const ProcessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 28px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.divider} 100%);
    z-index: 0;

    ${media.tablet`
      left: 50%;
      transform: translateX(-50%);
    `}
  }

  ${media.tablet`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 48px;
    padding-left: 32px;
  `}
`;

export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;

  ${media.tablet`
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: calc(50% - 24px);
  `}

  ${media.laptop`
    min-width: calc(25% - 24px);
  `}
`;

export const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.primary}40;
  flex-shrink: 0;

  ${media.tablet`
    margin-bottom: 8px;
  `}
`;

export const StepIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

export const StepContent = styled.div`
  flex: 1;
  min-width: 0;

  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.onSurfaceHighEmphasis};
    margin: 0 0 8px 0;

    ${media.tablet`
      font-size: 16px;
    `}
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
    margin: 0;
  }
`;