import { Section } from "@/components/layout/Section";
import { Title, Heading, Text } from "@/components/typography";
import { services } from "@/data";
import { ServiceIcons } from "@/components/UI/ServiceIcons";
import { ServicesContainer, ServiceCard, ServiceIcon, ServiceExamples } from "./styles";

export const Services = () => {
  return (
    <Section id="servicos">
      <Title marginBottom={["16px"]} textAlign={["center"]}>
        O que posso desenvolver
      </Title>
      <Text textAlign={["center"]} marginBottom={["48px", "64px"]} color="medium" maxWidth="640px" style={{ margin: "0 auto 48px" }}>
        Problemas reais de negócio exigem soluções técnicas bem fundamentadas. Estes são os principais tipos de demanda em que atuo:
      </Text>
      <ServicesContainer>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <ServiceIcon>
              {ServiceIcons[service.id] || ServiceIcons["web-systems"]}
            </ServiceIcon>
            <Heading marginBottom={["12px"]}>{service.title}</Heading>
            <Text marginBottom={["20px"]} color="medium">{service.description}</Text>
            <ServiceExamples>
              {service.examples.map((example, i) => (
                <span key={i}>{example}</span>
              ))}
            </ServiceExamples>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </Section>
  );
};