import { Section } from "@/components/layout/Section";
import { Title } from "@/components/typography";
import { Company } from "../Company";
import { Container } from "./styles";

export const Companies = ({data}) => {
  return (
    <Section>
      <Title marginBottom={["64px", "128px"]} textAlign={["center"]}>
        Experiências Profissionais
      </Title>
      <Container>
        {data.map((company, i) => {
          return (
            <Company {...company}  key={"project" + i} />
          )
        })}
      </Container>
    </Section>
  );
};
