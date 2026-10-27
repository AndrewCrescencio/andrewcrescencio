import { Section as StyledSection } from "./styles";
import { Container } from "../Container";

export const Section = ({ children, black, id, variant }) => {
  return (
    <StyledSection black={black} variant={variant} id={id}>
      <Container>{children}</Container>
    </StyledSection>
  );
};