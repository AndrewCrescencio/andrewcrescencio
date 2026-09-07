import Link from "next/link";
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
}) => {
  const mainMetric = metrics[0];

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
      <CardButton href={`/projetos/${slug}`} target="_blank" rel="noreferrer">
        Ver case
      </CardButton>
    </Card>
  );
};