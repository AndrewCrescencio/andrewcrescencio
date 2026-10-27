import Image from "next/image";
import { Heading, SubHeading, Text } from "@/components/typography";
import { Card, CardButton, CardHeader, CardImage, CardBody, CardMetrics, MetricItem, CardTags } from "./styles";

export const ProjectCard = ({
  title,
  company,
  period,
  role,
  problem,
  action,
  results,
  metrics = [],
  technologies = [],
  image,
  projectLink,
  category,
}) => {
  const displayMetrics = metrics.length > 0 ? metrics : [
    { label: "Status", value: "Em produção" },
    { label: "Tipo", value: category || "Projeto" },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="meta">
          <span className="category">{category}</span>
          <span className="company">{company}</span>
        </div>
        <SubHeading>{title}</SubHeading>
        <div className="role-period">
          <Text size="sm" color="medium">{role}</Text>
          <Text size="sm" color="medium">{period}</Text>
        </div>
      </CardHeader>
      <CardImage>
        {image && (
          <Image
            src={image}
            alt={`Screenshot do projeto ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </CardImage>
      <CardBody>
        <div className="par-section">
          <h4>Problema</h4>
          <Text size="sm">{problem}</Text>
        </div>
        <div className="par-section">
          <h4>Ação</h4>
          <Text size="sm">{action}</Text>
        </div>
        <div className="par-section results">
          <h4>Resultados</h4>
          <ul>
            {results.slice(0, 4).map((r, i) => (
              <li key={i}><Text size="sm">{r}</Text></li>
            ))}
            {results.length > 4 && (
              <li><Text size="sm" color="medium">+{results.length - 4} mais resultados...</Text></li>
            )}
          </ul>
        </div>
        {technologies.length > 0 && (
          <CardTags>
            {technologies.slice(0, 8).map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
            {technologies.length > 8 && <span>+{technologies.length - 8}</span>}
          </CardTags>
        )}
      </CardBody>
      <CardMetrics>
        {displayMetrics.slice(0, 4).map((m, i) => (
          <MetricItem key={i}>
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </MetricItem>
        ))}
      </CardMetrics>
      {projectLink && (
        <CardButton
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          variant={projectLink.startsWith("http") ? "primary" : "secondary"}
        >
          {projectLink.startsWith("http") ? "Ver em produção" : "Ver case completo"}
        </CardButton>
      )}
    </Card>
  );
};