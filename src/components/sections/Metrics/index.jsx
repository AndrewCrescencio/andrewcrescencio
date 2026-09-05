import { Section } from "@/components/layout/Section";
import { Title, Heading, Text } from "@/components/typography";
import { metrics } from "@/data";
import { MetricsContainer, MetricCard, MetricValue, MetricLabel, MetricContext } from "./styles";

export const Metrics = () => {
  return (
    <Section black id="resultados">
      <Title marginBottom={["16px"]} textAlign={["center"]}>
        Resultados mensuráveis
      </Title>
      <Text textAlign={["center"]} marginBottom={["48px", "64px"]} color="medium" maxWidth="640px" style={{ margin: "0 auto 48px" }}>
        Números reais de projetos entregues. Não são estimativas — são resultados de produção.
      </Text>
      <MetricsContainer>
        {metrics.map((metric) => (
          <MetricCard key={metric.label}>
            <MetricValue>{metric.value}</MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
            {metric.context && <MetricContext>{metric.context}</MetricContext>}
          </MetricCard>
        ))}
      </MetricsContainer>
    </Section>
  );
};