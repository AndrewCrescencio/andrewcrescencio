import { Company } from "../Company";
import { Projects } from "../Projects";
import { Container } from "../UI/Container";
import { Title } from "./styles";

export const Experiences = ({ data }) => {
  return (
    <Container>
      <Title>Experiências Profissionais</Title>
      {data.allExperiences.map((exp, i) => {
        return (
          <div key={"project" + i}>
            <Company
              name={exp.companyName}
              logo={exp.companyImage}
              responsibilities={exp.responsibilities}
              role={exp.role}
            />
            <Projects data={exp.projects} />
          </div>
        );
      })}
    </Container>
  );
};
