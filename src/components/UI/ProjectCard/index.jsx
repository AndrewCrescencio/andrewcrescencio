import Image from "next/image";
import { Responsibilities } from "../Responsibilities";
import { Card, CardButton, CardImage, CardTitle, Techs } from "./styles";

export const ProjectCard = ({
  projectImage,
  projectLink,
  projectResponsibilities,
  projectTitle,
  technologies,
}) => {
  return (
    <Card href={projectLink} target="_blank" rel="noreferrer">
      <div>
        <CardTitle>{projectTitle}</CardTitle>
        <Responsibilities data={projectResponsibilities} />
        <Techs>
          <h4>tecnologias usadas</h4>
          <div>
            {technologies.map((tech, i) => {
              return (
                <Image
                  key={i}
                  src={tech.techImage.url}
                  alt={tech.techName}
                  width={tech.techImage.width}
                  height={tech.techImage.height}
                />
              );
            })}
          </div>
        </Techs>
      </div>
      <CardButton>Ver o projeto</CardButton>
    </Card>
  );
};
