import { Company } from "../Company";
import { Projects } from "../Projects";
import { Section } from "../UI/Section";
import { Experience, Title, Wrapper } from "./styles";

export const Experiences = ({ data }) => {
  return (
    <Section>
      <Title>Experiências Profissionais</Title>
      {data.allExperiences.map((exp, i) => {
        return (
          <Experience key={"project" + i}>
            <Wrapper>
              <Company
                name={exp.companyName}
                logo={exp.companyImage}
                responsibilities={exp.responsibilities}
                role={exp.role}
                techs={[...exp.techs]}
              />
            </Wrapper>
            {exp.projects.length > 1 && <Projects data={exp.projects} />}
          </Experience>
        );
      })}
    </Section>
  );
};
