import { SocialLinks } from "../SocialLinks";
import { ToggleTheme } from "../ToggleTheme";
import { Header, Logo } from "./styles";

export const AppHeader = () => {
  return (
    <Header>
      <Logo>Andrew Crescencio</Logo>
      <SocialLinks />
      <ToggleTheme />
    </Header>
  );
};
