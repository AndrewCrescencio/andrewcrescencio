import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Title, Text, Heading, SubTitle } from "@/components/typography";
import { services } from "@/data";
import { Grid, Group, List, ListItem } from "@/components/sections/Skills/styles";

export const Services = () => {
  return (
    <Section id="servicos">
      <Container>
        <Title marginBottom={["16px"]} textAlign={["center"]}>
          O que posso desenvolver
        </Title>
        <Text textAlign={["center"]} marginBottom={["48px", "64px"]} color="medium" maxWidth="640px" style={{ margin: "0 auto 48px" }}>
          Problemas reais de negócio exigem soluções técnicas bem fundamentadas. Estes são os principais tipos de demanda em que atuo:
        </Text>
        <Grid>
          {services.map((service, index) => (
            <Group key={`service-${index}`}>
              <Heading marginBottom={["12px"]}>{service.title}</Heading>
              <Text marginBottom={["20px"]} color="medium">{service.description}</Text>
              <List>
                {service.examples.map((example, i) => (
                  <ListItem key={`service-example-${index}-${i}`}>
                    <Text marginBottom={["8px"]}>{example}</Text>
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