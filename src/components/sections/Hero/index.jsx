import { Logo } from "@/components/global/Logo";
import { IconChevronDown } from "@/components/icons/ChevronDown";
import { Container } from "@/components/layout/Container";
import { SubTitle, Text } from "@/components/typography";
import { profile, languages } from "@/data";
import { IconEnvelopeAt } from "@/components/icons/EnvelopeAt";
import { IconLinkedin } from "@/components/icons/Linkedin";
import { IconWhatsapp } from "@/components/icons/Whatsapp";
import { Banner, Wrapper, ContactRow, ContactLink, LangRow, LangBadge } from "./styles";

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
            <LangRow>
              {languages.map((lang, i) => (
                <LangBadge key={i}>
                  <strong>{lang.name}</strong>: {lang.level}
                  {lang.detail && <span> — {lang.detail}</span>}
                </LangBadge>
              ))}
            </LangRow>
            <ContactRow>
              <ContactLink href="mailto:andrew_workstation@hotmail.com" aria-label="Email">
                <IconEnvelopeAt size={20} />
                <span>andrew_workstation@hotmail.com</span>
              </ContactLink>
              <ContactLink href="https://linkedin.com/in/andrewcrescencio" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconLinkedin size={20} />
                <span>LinkedIn</span>
              </ContactLink>
              <ContactLink href="https://wa.me/5511939475095" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <IconWhatsapp size={20} />
                <span>WhatsApp</span>
              </ContactLink>
            </ContactRow>
          </div>
          <Logo />
        </Wrapper>
      </Container>
      <IconChevronDown />
    </Banner>
  );
};