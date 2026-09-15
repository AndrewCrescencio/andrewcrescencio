import Image from "next/image";
import { Heading, SubHeading, Text } from "@/components/typography";
import { Card, CardButton, CardHeader, CardImage } from "./styles";

export const ProjectCard = ({
  slug,
  title,
  shortDescription,
  type,
  technologies = [],
  metrics = [],
  image,
  confidential = false,
  projectLink,
}) => {
  const mainMetric = metrics[0];
  const externalLink = projectLink && projectLink.startsWith("http");

  return (
    <Card>
      <CardHeader>
        <SubHeading>{title}</SubHeading>
      </CardHeader>
      <CardImage>
        {image && (
          <Image
            src={image}
            alt={confidential ? `Ilustração representativa do projeto ${title}` : `Screenshot do projeto ${title}`}
            fill
          />
        )}
      </CardImage>
      <CardButton
        href={externalLink ? projectLink : `/projetos/${slug}`}
        target={externalLink ? "_blank" : undefined}
        rel={externalLink ? "noopener noreferrer" : undefined}
      >
        Ver case
      </CardButton>
    </Card>
  );
};