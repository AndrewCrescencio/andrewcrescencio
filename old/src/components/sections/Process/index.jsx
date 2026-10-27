import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Title, Text } from "@/components/typography";
import { processSteps } from "@/data";
import { ProcessWrapper, Step, StepNumber, StepContent, StepIcon } from "./styles";
import { IconSearch, IconFileText, IconGitBranch, IconCheckCircle } from "@/components/icons";

const icons = {
  Search: IconSearch,
  FileText: IconFileText,
  GitBranch: IconGitBranch,
  CheckCircle: IconCheckCircle,
};

export const Process = () => {
  return (
    <Section id="como-trabalho" variant="alt">
      <Container>
        <Title textAlign={["center"]} marginBottom={["16px"]}>
          Como Trabalho
        </Title>
        <Text textAlign={["center"]} color="medium" marginBottom={["64px"]} maxWidth="640px" style={{ margin: "0 auto 64px" }}>
          Processo transparente, previsível e focado em entregar valor a cada sprint.
        </Text>
        <ProcessWrapper>
          {processSteps.map((step) => {
            const IconComponent = icons[step.icon];
            return (
              <Step key={step.step}>
                <StepNumber>{step.step}</StepNumber>
                <StepIcon>
                  <IconComponent width={28} height={28} />
                </StepIcon>
                <StepContent>
                  <h3>{step.title}</h3>
                  <Text>{step.description}</Text>
                </StepContent>
              </Step>
            );
          })}
        </ProcessWrapper>
      </Container>
    </Section>
  );
};