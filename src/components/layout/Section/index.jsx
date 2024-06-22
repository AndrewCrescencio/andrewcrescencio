import { Section as StyledSection } from "./styles";
import { Container } from "../Container";

export const Section = ({ children, black, id }) => {
  return (
    <StyledSection black={black} id={id}>
      <Container
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {children}
      </Container>
    </StyledSection>
  );
};
