import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/UI/SocialLinks";
import { Logo } from "../Logo";
import { Header, Navbar, Name } from "./styles";

export const AppHeader = () => {
  return (
    <Header>
      <Container>
        <Navbar>
          <a href="#">
            <Logo width="34" height="33"/>
            <Name>Andrew Crescencio</Name>
          </a>
          <SocialLinks />
        </Navbar>
      </Container>
    </Header>
  );
};
