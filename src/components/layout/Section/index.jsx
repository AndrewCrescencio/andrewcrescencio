import { Section as StyledSection } from "./styles";
import { Container } from "../Container";

export const Section = ({ children, black, id }) => {
  return (
    <StyledSection black={black} id={id}>
      <Container>{children}</Container>
    </StyledSection>
  );
};
