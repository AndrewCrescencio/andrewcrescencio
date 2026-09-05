import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Title, Text } from "@/components/typography";
import { CTAButton } from "@/components/UI/CTAButton";
import { profile } from "@/data";
import { ContactWrapper, ContactContent, ContactButtons } from "./styles";

export const Contact = () => {
  return (
    <Section black id="contato">
      <Container>
        <ContactWrapper>
          <ContactContent>
            <Title marginBottom={["16px"]} textAlign={["center"]}>
              Tem um projeto em mente?
            </Title>
            <Text textAlign={["center"]} marginBottom={["32px", "48px"]} color="medium" maxWidth="580px" style={{ margin: "0 auto 32px" }}>
              Conte o que você precisa desenvolver, melhorar ou integrar.
            </Text>
            <ContactButtons>
              <CTAButton
                href={profile.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                primary
              >
                WhatsApp
              </CTAButton>
              <CTAButton
                href={profile.contacts.email}
                secondary
              >
                Email
              </CTAButton>
              <CTAButton
                href={profile.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                secondary
              >
                LinkedIn
              </CTAButton>
            </ContactButtons>
          </ContactContent>
        </ContactWrapper>
      </Container>
    </Section>
  );
};