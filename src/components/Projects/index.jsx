import Image from "next/image";
import { useEffect } from "react";
import { ProjectCard } from "../ProjectCard";
import { Container, ProjectsContainer, Title } from "./styles";

export const Projects = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });
  return (
    <Container>
      <Title as="h2">Alguns dos projetos que participei</Title>
      <ProjectsContainer>
        {data.map((project, i) => {
          return <ProjectCard {...project} key={i} />;
        })}
      </ProjectsContainer>
    </Container>
  );
};
