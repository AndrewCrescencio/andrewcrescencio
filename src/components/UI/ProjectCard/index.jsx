import Image from "next/image";
import { Responsibilities } from "../Responsibilities";
import { Techs } from "../Techs";
import {
  Card,
  CardBody,
  CardButton,
  CardFooter,
  CardImage,
  CardTitle,
} from "./styles";

export const ProjectCard = ({
  projectLink,
  projectResponsibilities,
  projectTitle,
  projectImage,
  technologies,
}) => {
  return (
    <Card>
      <CardImage>
        <Image
          src={projectImage.url}
          alt={`foto do projeto ${projectTitle}`}
          fill
        />
      </CardImage>
      <CardBody>
        <CardTitle>{projectTitle}</CardTitle>
        <Responsibilities data={projectResponsibilities} />
        <div id="techs">
          <Techs data={technologies} />
        </div>
      </CardBody>
      <CardFooter>
        <CardButton href={projectLink} target="_blank" rel="noreferrer">
          Ver o projeto
        </CardButton>
      </CardFooter>
    </Card>
  );
};
