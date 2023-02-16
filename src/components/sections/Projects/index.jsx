import { ProjectCard } from "../../UI/ProjectCard";
import { ProjectsContainer, Title } from "./styles";

export const Projects = ({ data }) => {
  return (
    <>
      <Title as="h2">Alguns dos projetos que participei</Title>
      <ProjectsContainer>
        {data.map((project, i) => {
          return <ProjectCard {...project} key={i} />;
        })}
      </ProjectsContainer>
    </>
  );
};
