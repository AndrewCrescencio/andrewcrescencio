import styled from "styled-components"
import { media } from "@/styles/media-querie";

export const Section = styled.section`
  padding-bottom: 64px;
  &:first-of-type {
    padding-top: 48px;
    ${media.tablet`
      padding-top: 64px;
    `}
    ${media.laptop`
      padding-top: 128px;
    `}
  }

  ${media.laptop`
    padding-bottom: 128px;
  `}
`;