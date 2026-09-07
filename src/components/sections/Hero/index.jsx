import { Logo } from "@/components/global/Logo";
import { IconChevronDown } from "@/components/icons/ChevronDown";
import { Container } from "@/components/layout/Container";
import { SubTitle, Text, Heading } from "@/components/typography";
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
            <Heading textAlign={["center", "left"]} marginBottom={["24px"]}>
              {profile.subHeadline}
            </Heading>
            <Text marginBottom={["24px"]}>{profile.summary}</Text>
            <Text textAlign={["center", "left"]} color="medium">
              {profile.role}
            </Text>
          </div>
          <Logo />
        </Wrapper>
      </Container>
      <IconChevronDown />
    </Banner>
  );
};