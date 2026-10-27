import { Container, Wrapper } from "./styles";

export const ErrorDisplay = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
