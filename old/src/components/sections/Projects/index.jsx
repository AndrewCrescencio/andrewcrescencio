import { Section } from "@/components/layout/Section";
import { SubTitle, Text } from "@/components/typography";
import { ProjectCard } from "../../UI/ProjectCard";
import { ProjectsContainer } from "./styles";
import { featuredProjects } from "@/data";

export const Projects = () => {
  return (
    <Section id="projetos">
      <SubTitle textAlign={["center"]} marginBottom={["16px"]}>
        Cases Principais
      </SubTitle>
      <Text textAlign={["center"]} color="medium" marginBottom={["64px"]} maxWidth={640} style={{ margin: "0 auto 64px" }}>
        Três migrações complexas entregues em produção — com números reais, não estimativas.
      </Text>
      <ProjectsContainer>
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ProjectsContainer>
    </Section>
  );
};