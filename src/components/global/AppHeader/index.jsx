import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/UI/SocialLinks";
import { Header, Wrapper, Logo } from "./styles";

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
