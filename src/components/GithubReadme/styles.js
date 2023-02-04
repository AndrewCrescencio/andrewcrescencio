import { media } from "@/styles/media-querie";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin: 64px auto;
  padding: 16px;
  border: 1px solid gray;
  border-radius: 8px;

  ${media.laptop`
    margin: 128px auto
  `}

  h1 {
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    padding-bottom: 0.3em;
    font-size: 32px;
    border-bottom: 1px solid gray;
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
    border-bottom: 1px solid gray;
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
