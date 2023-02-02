import { Company } from "../Company";
import { Project } from "../Project";
import { Container, Title } from "./styles";

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
            <div>
              {exp.projects.map((project, i) => {
                return <Project key={i} {...project} />;
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};
