import { Section } from "@/components/layout/Section";
import { Title } from "@/components/typography";
import { ProjectCard } from "../../UI/ProjectCard";
import { ProjectsContainer } from "./styles";

export const Projects = ({ data }) => {
  const featuredProjects = data?.filter((p) => p.featured) || [];

  return (
    <Section id="projetos">
      <Title marginBottom={["48px", "64px"]} textAlign={["center"]}>
        Projetos em destaque
      </Title>
      <ProjectsContainer>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ProjectsContainer>
    </Section>
  );
};