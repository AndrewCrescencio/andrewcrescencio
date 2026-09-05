import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Title, Text } from "@/components/typography";
import { skills } from "@/data";
import { SkillsGrid, SkillGroup, SkillCategory, SkillItems, SkillItem } from "./styles";

export const Skills = () => {
  return (
    <Section black id="tecnologias">
      <Container>
        <Title marginBottom={["16px"]} textAlign={["center"]}>
          Tecnologias
        </Title>
        <Text textAlign={["center"]} marginBottom={["48px", "64px"]} color="medium" maxWidth="640px" style={{ margin: "0 auto 48px" }}>
          Stack principal que utilizo no dia a dia. A lista completa inclui mais ferramentas e frameworks.
        </Text>
        <SkillsGrid>
          {skills.map((group) => (
            <SkillGroup key={group.category}>
              <SkillCategory>{group.category}</SkillCategory>
              <SkillItems>
                {group.items.map((item) => (
                  <SkillItem key={item}>{item}</SkillItem>
                ))}
              </SkillItems>
            </SkillGroup>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  );
};