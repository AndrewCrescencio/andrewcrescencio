import Image from "next/image";

export const Project = ({
  projectImage,
  projectLink,
  projectResponsibilities,
  projectTitle,
  technologies,
}) => {
  return (
    <a href={projectLink} target="_blank" rel="noreferrer">
      <h3>{projectTitle}</h3>
      <Image
        width={projectImage.width}
        height={projectImage.height}
        src={projectImage.url}
        alt={projectImage.alt}
      />
      <h4>responsabilidades</h4>
      <ul>
        {projectResponsibilities.map((responsibility, i) => {
          return <li key={i}>{responsibility.description}</li>;
        })}
      </ul>
      <div>
        <h4>tecnologias usadas</h4>
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
    </a>
  );
};
