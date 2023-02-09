import { Company } from "../Company";
import { Projects } from "../Projects";
import { Techs } from "../Techs";
import { Section } from "../UI/Section";
import { Title, Wrapper } from "./styles";

export const Experiences = ({ data }) => {
  return (
    <Section>
      <Title>Experiências Profissionais</Title>
      {data.allExperiences.map((exp, i) => {
        return (
          <div key={"project" + i}>
            <Wrapper>
              <Company
                name={exp.companyName}
                logo={exp.companyImage}
                responsibilities={exp.responsibilities}
                role={exp.role}
                techs={[...exp.techs]}
              />
              {/* <Techs data={[...exp.techs]} /> */}
            </Wrapper>
            <Projects data={exp.projects} />
          </div>
        );
      })}
    </Section>
  );
};
