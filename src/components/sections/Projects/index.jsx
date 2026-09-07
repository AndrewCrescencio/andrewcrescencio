import { Section } from "@/components/layout/Section";
import { SubTitle } from "@/components/typography";
import { ProjectCard } from "../../UI/ProjectCard";
import { ProjectsContainer } from "./styles";

export const Projects = ({ data }) => {
  return (
    <Section>
      <SubTitle textAlign={["center"]} marginBottom={['64px']}>Alguns dos projetos que participei</SubTitle>
      <ProjectsContainer>
        {data.map((project, i) => {
          return <ProjectCard {...project} key={i} />;
        })}
      </ProjectsContainer>
    </Section>
  );
};
