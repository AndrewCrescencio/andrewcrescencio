import { SocialLinks } from "../SocialLinks";
import { Container } from "../UI/Container";
import { Header, Logo, Wrapper } from "./styles";

export const AppHeader = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Logo>Andrew Crescencio</Logo>
          <SocialLinks />
        </Wrapper>
      </Container>
    </Header>
  );
};
