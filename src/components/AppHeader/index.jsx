import { SocialLinks } from "../SocialLinks";
import { ToggleTheme } from "../ToggleTheme";
import { Container } from "../UI/Container";
import { Header, Logo, Wrapper } from "./styles";

export const AppHeader = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Logo>Andrew Crescencio</Logo>
          <SocialLinks />
          <ToggleTheme />
        </Wrapper>
      </Container>
    </Header>
  );
};
