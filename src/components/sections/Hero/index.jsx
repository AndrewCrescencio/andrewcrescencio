import { Logo } from "@/components/global/Logo";
import { IconChevronDown } from "@/components/icons/ChevronDown";
import { Container } from "@/components/layout/Container";
import { Title, SubTitle, Text, Heading } from "@/components/typography";
import { profile } from "@/data";
import { Banner, Wrapper } from "./styles";

export const Hero = () => {
  return (
    <Banner>
      <Container>
        <Wrapper>
          <div>
            <Title textAlign={["center", "left"]} marginBottom={["16px"]}>
              {profile.name}
            </Title>
            <SubTitle textAlign={["center", "left"]} marginBottom={["24px"]}>
              {profile.tagline}
            </SubTitle>
            <Text marginBottom={["24px"]}>{profile.summary}</Text>
            <Text textAlign={["center", "left"]} color="medium">
              {profile.role}
            </Text>
          </div>
          <div className="logo">
            <Logo width={110} height={170} />
          </div>
        </Wrapper>
      </Container>
      <IconChevronDown className="chevron-down" />
    </Banner>
  );
};