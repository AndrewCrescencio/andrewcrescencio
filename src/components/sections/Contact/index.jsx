import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Title, Text } from "@/components/typography";
import { profile } from "@/data";
import styled from "styled-components";

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  transition: all 200ms ease;
  cursor: pointer;
  border: 2px solid transparent;
  white-space: nowrap;

  ${({ $primary, theme }) =>
    $primary &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
    border-color: ${theme.colors.primary};

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
    }
  `}

  ${({ $secondary, theme }) =>
    $secondary &&
    `
    background-color: transparent;
    color: ${theme.colors.onSurfaceHighEmphasis};
    border-color: ${theme.colors.divider};

    &:hover {
      background-color: ${theme.colors.navbarBg};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
  `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Contact = () => {
  return (
    <Section black id="contato">
      <Container>
        <Title marginBottom={["16px"]} textAlign={["center"]}>
          Tem um projeto em mente?
        </Title>
        <Text textAlign={["center"]} marginBottom={["32px", "48px"]} color="medium" maxWidth="580px" style={{ margin: "0 auto 32px" }}>
          Conte o que você precisa desenvolver, melhorar ou integrar.
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          <Button
            href={profile.contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            $primary
          >
            WhatsApp
          </Button>
          <Button
            href={profile.contacts.email}
            $secondary
          >
            Email
          </Button>
          <Button
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            $secondary
          >
            LinkedIn
          </Button>
        </div>
      </Container>
    </Section>
  );
};