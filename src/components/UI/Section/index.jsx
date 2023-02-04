import { media } from "@/styles/media-querie";
import styled from "styled-components";
import { Container } from "../Container";

const StyledSection = styled.section`
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

export const Section = ({ children }) => {
  return (
    <StyledSection>
      <Container>{children}</Container>
    </StyledSection>
  );
};
