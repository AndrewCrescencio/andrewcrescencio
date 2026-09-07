import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SubTitle, Text, Title } from "@/components/typography";
import { Grid, Group, List, ListItem } from "./styles";

export const Skills = ({ groups }) => {
  return (
    <Section black>
      <Container>
        <Title marginBottom={["64px", "128px"]} textAlign={["center"]}>
          Habilidades Técnicas
        </Title>
        <Grid>
          {groups.map((group) => (
            <Group key={group.name}>
              <SubTitle marginBottom={["24px"]}>{group.name}</SubTitle>
              <List>
                {group.items.map((item) => (
                  <ListItem key={item}>
                    <Text marginBottom={["8px"]}>{item}</Text>
                  </ListItem>
                ))}
              </List>
            </Group>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};