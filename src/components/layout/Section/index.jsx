import { Section as StyledSection } from "./styles";
import { Container } from "../Container";

export const Section = ({ children }) => {
  return (
    <StyledSection>
      <Container>{children}</Container>
    </StyledSection>
  );
};
