import { Logo } from "@/components/global/Logo";
import { IconChevronDown } from "@/components/icons/ChevronDown";
import { Container } from "@/components/layout/Container";
import { SubTitle } from "@/components/typography";
import { Banner, Wrapper } from "./styles";

export const Hero = () => {
  return (
    <Banner>
      <Container>
        <Wrapper>
          <SubTitle as="h1">
            Solucionando problemas <br />
            com o poder da tecnologia.
          </SubTitle>
          <Logo />
        </Wrapper>
      </Container>
      <IconChevronDown />
    </Banner>
  );
};
