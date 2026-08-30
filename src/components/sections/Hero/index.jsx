import { Logo } from "@/components/global/Logo";
import { IconChevronDown } from "@/components/icons/ChevronDown";
import { Container } from "@/components/layout/Container";
import { SubTitle, Text } from "@/components/typography";
import { profile } from "@/data";
import { Banner, Wrapper } from "./styles";

export const Hero = () => {
  return (
    <Banner>
      <Container>
        <Wrapper>
          <div>
            <SubTitle textAlign={["center", "left"]}>
              {profile.tagline}
            </SubTitle>
            <Text marginBottom={["24px"]}>{profile.summary}</Text>
          </div>
          <Logo />
        </Wrapper>
      </Container>
      <IconChevronDown />
    </Banner>
  );
};