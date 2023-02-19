import { Heading, SubHeading } from "@/components/typography";
import Image from "next/image";

import { Card, CardButton, CardHeader, CardImage } from "./styles";

export const ProjectCard = ({ projectLink, projectTitle, projectImage }) => {
  return (
    <Card>
      <CardHeader>
        <SubHeading>{projectTitle}</SubHeading>
      </CardHeader>
      <CardImage>
        <Image
          src={projectImage.url}
          alt={`foto do projeto ${projectTitle}`}
          fill
        />
      </CardImage>
      <CardButton href={projectLink} target="_blank" rel="noreferrer">
        Ver o projeto
      </CardButton>
    </Card>
  );
};
