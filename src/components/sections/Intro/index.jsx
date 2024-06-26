import { Section } from "@/components/layout/Section";
import { Text, Title } from "@/components/typography";
import { Differentials } from "@/components/UI/Differentials";

export const Intro = () => {
  return (
    <Section black id="intro">
      <Title marginBottom={["16px"]} textAlign={["center", "left"]}>
        O que faço?
      </Title>
      <Text marginBottom={["128px"]}>
        Desenvolvo aplicações web, desde simples sites e landing pages, até blogs ou lojas virtuais. Meu foco
        é resolver os seus problemas ou de sua empresa.
      </Text>
      <Differentials />
    </Section>
  );
};
