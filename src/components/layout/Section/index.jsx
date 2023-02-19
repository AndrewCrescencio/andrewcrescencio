import { Section as StyledSection } from "./styles";
import { Container } from "../Container";

export const Section = ({ children, black }) => {
  return (
    <StyledSection black={black}>
      <Container>{children}</Container>
    </StyledSection>
  );
};
