import { Logo } from "@/components/global/Logo";
import { IconChevronDown } from "@/components/icons/ChevronDown";
import { Container } from "@/components/layout/Container";
import { SubTitle, Text, Heading } from "@/components/typography";
import { profile } from "@/data";
import { Banner, Wrapper, Content, ScrollIndicator } from "./styles";

export const Hero = () => {
  return (
    <Banner id="home">
      <Container>
        <Wrapper>
          <Content>
            <Heading textAlign={["center", "left"]} marginBottom={["16px"]}>
              {profile.tagline}
            </Heading>
            <SubTitle textAlign={["center", "left"]} marginBottom={["24px"]}>
              {profile.subHeadline}
            </SubTitle>
            <Text textAlign={["center", "left"]} marginTop={["32px"]} color="medium">
              {profile.role}
            </Text>
          </Content>
          <Logo width={280} height={428} />
        </Wrapper>
      </Container>
      <ScrollIndicator>
        <IconChevronDown />
      </ScrollIndicator>
    </Banner>
  );
};