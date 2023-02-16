import { Section } from "@/components/layout/Section";
import { CompanyInfo } from "@/components/UI/CompanyInfo";
import { Projects } from "../Projects";
import { Experience, Title, Wrapper } from "./styles";

export const Experiences = ({ data }) => {
  return (
    <Section>
      <Title>Experiências Profissionais</Title>
      {data.allExperiences.map((exp, i) => {
        return (
          <Experience key={"project" + i}>
            <Wrapper>
              <CompanyInfo
                name={exp.companyName}
                logo={exp.companyImage}
                responsibilities={exp.responsibilities}
                role={exp.role}
                time={exp.companyTime}
              />
            </Wrapper>
            {exp.projects.length > 1 && <Projects data={exp.projects} />}
          </Experience>
        );
      })}
    </Section>
  );
};
