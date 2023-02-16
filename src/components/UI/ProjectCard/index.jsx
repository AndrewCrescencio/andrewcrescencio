import Image from "next/image";
import { Responsibilities } from "../Responsibilities";
import { Techs } from "../Techs";
import { Card, CardBody, CardButton, CardTitle } from "./styles";

export const ProjectCard = ({
  projectLink,
  projectResponsibilities,
  projectTitle,
  technologies,
}) => {
  return (
    <Card href={projectLink} target="_blank" rel="noreferrer">
      <CardBody>
        <CardTitle>{projectTitle}</CardTitle>
        <Responsibilities data={projectResponsibilities} />
      <Techs data={technologies} />
      </CardBody>
      <CardButton>Ver o projeto</CardButton>
    </Card>
  );
};
