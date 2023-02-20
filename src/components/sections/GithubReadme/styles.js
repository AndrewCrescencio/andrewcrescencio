import { media } from "@/styles/media-querie";
import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 4px;

  h1 {
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    padding-bottom: 0.3em;
    font-size: 32px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    ${media.laptop`
      font-size: 48px;
    `}
  }

  h2 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 500;
    line-height: 1.25;
    padding-bottom: 0.3em;
    font-size: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    ${media.laptop`
      font-size: 32px;
    `}
  }

  h3 {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 18px;
    ${media.laptop`
      font-size: 24px;
    `}
  }

  h4 {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
    line-height: 1.5;
    width: 100%;
    ${media.laptop`
    font-size: 20px;
  `}
  }

  p + h2 {
    margin-top: 32px;
  }
`;
