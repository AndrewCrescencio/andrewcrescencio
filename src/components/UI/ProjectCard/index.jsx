import Link from "next/link";
import Image from "next/image";
import { Heading, SubHeading, Text } from "@/components/typography";
import { CTAButton } from "../CTAButton";
import {
  Card,
  CardHeader,
  CardCategory,
  CardTitle,
  CardDescription,
  CardTechList,
  CardTechItem,
  CardMetrics,
  CardMetric,
  CardFooter,
  CardImage,
} from "./styles";

export const ProjectCard = ({
  id,
  slug,
  title,
  shortDescription,
  type,
  technologies = [],
  metrics = [],
  image,
  confidential = false,
  featured = false,
}) => {
  const mainMetric = metrics[0];

  return (
    <Card>
      <CardImage>
        {image && (
          <Image
            src={image}
            alt={confidential ? `Ilustração representativa do projeto ${title}` : `Screenshot do projeto ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
            className="project-image"
          />
        )}
        {confidential && (
          <span className="confidential-badge">Projeto confidencial</span>
        )}
      </CardImage>

      <CardHeader>
        <CardCategory>{type}</CardCategory>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardDescription>{shortDescription}</CardDescription>

      {technologies.length > 0 && (
        <CardTechList>
          {technologies.slice(0, 5).map((tech, i) => (
            <CardTechItem key={i}>{tech}</CardTechItem>
          ))}
          {technologies.length > 5 && (
            <CardTechItem>+{technologies.length - 5}</CardTechItem>
          )}
        </CardTechList>
      )}

      {mainMetric && (
        <CardMetrics>
          <CardMetric>
            <span className="metric-value">{mainMetric.value}</span>
            <span className="metric-label">{mainMetric.label}</span>
          </CardMetric>
        </CardMetrics>
      )}

      <CardFooter>
        <CTAButton
          href={`/projetos/${slug}`}
          secondary
        >
          Ver case
        </CTAButton>
      </CardFooter>
    </Card>
  );
};