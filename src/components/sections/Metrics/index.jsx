import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Title, Text, Heading } from "@/components/typography";
import { metrics } from "@/data";
import { Grid, Group, List, ListItem } from "@/components/sections/Skills/styles";

export const Metrics = () => {
  return (
    <Section black id="resultados">
      <Container>
        <Title marginBottom={["16px"]} textAlign={["center"]}>
          Resultados mensuráveis
        </Title>
        <Text textAlign={["center"]} marginBottom={["48px", "64px"]} color="medium" maxWidth="640px" style={{ margin: "0 auto 48px" }}>
          Números reais de projetos entregues. Não são estimativas — são resultados de produção.
        </Text>
        <Grid>
          {metrics.map((metric) => (
            <Group key={metric.label}>
              <Heading style={{ fontSize: "32px", color: "var(--color-primary)", marginBottom: "8px" }}>{metric.value}</Heading>
              <Text style={{ fontWeight: 500 }}>{metric.label}</Text>
              {metric.context && <Text color="medium" style={{ fontSize: "12px", textTransform: "uppercase" }}>{metric.context}</Text>}
            </Group>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};