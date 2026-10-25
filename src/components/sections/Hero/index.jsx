import { Logo } from "@/components/global/Logo";
import { IconChevronDown } from "@/components/icons/ChevronDown";
import { Container } from "@/components/layout/Container";
import { Title, SubTitle, Text, Heading } from "@/components/typography";
import { CTAButton } from "@/components/UI/CTAButton";
import { profile } from "@/data";
import { Banner, Wrapper, Content, Highlights, HighlightItem, CTAGroup } from "./styles";

export const Hero = () => {
  const highlights = [
    { label: "Migração Vue 2 → Nuxt 4 + Delphi → Node/TS", context: "Egis ERP" },
    { label: "Design System + SSO Keycloak/AWS", context: "UNLKD (Fintech)" },
    { label: "Migração Angular 12 → Vue 3 + 80%+ cobertura testes", context: "UNO ERP" },
  ];

  return (
    <Banner>
      <Container>
        <Wrapper>
          <Content>
            <Title textAlign={["center", "left"]} marginBottom={["16px"]}>
              AJUDO EMPRESAS A MODERNIZAR ERPs, LANÇAR SaaS E ESCALAR FINTECHS
            </Title>
            <SubTitle textAlign={["center", "left"]} marginBottom={["24px"]}>
              {profile.tagline}
            </SubTitle>
            <Text marginBottom={["32px"]} maxWidth={580}>
              5+ anos transformando sistemas legados em software que escala — sem paralisar o negócio.
            </Text>
            <Highlights>
              {highlights.map((h, i) => (
                <HighlightItem key={i}>
                  <Text weight="500" size="sm">{h.label}</Text>
                  <Text color="medium" size="xs" uppercase>
                    {h.context}
                  </Text>
                </HighlightItem>
              ))}
            </Highlights>
            <CTAGroup>
              <CTAButton href="#projetos" size="lg" variant="primary">
                Ver cases reais
              </CTAButton>
              <CTAButton
                href={profile.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="secondary"
              >
                Falar no WhatsApp
              </CTAButton>
            </CTAGroup>
          </Content>
          <div className="logo">
            <Logo width={140} height={220} />
          </div>
        </Wrapper>
      </Container>
      <IconChevronDown />
    </Banner>
  );
};