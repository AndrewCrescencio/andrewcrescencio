import { Section } from "@/components/layout/Section";
import { Title, Text } from "@/components/typography";
import { Companies } from "@/components/UI/Companies";

export const Experience = ({ companies }) => {
  return (
    <Section id="experiencia">
      <Title marginBottom={["16px"]} textAlign={["center"]}>
        Experiência profissional
      </Title>
      <Text textAlign={["center"]} marginBottom={["48px", "64px"]} color="medium" maxWidth="640px" style={{ margin: "0 auto 48px" }}>
        Mais de 5 anos construindo, modernizando e evoluindo aplicações web para fintechs, ERPs e SaaS.
      </Text>
      <Companies data={companies} />
    </Section>
  );
};