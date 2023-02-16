import { Container } from "./styles";
import { TechItem } from "./TechItem";

export const Techs = ({ data }) => {
  return (
    <Container>
      {data.map((tech) => {
        return <TechItem key={tech.techImage.url} {...tech.techImage} />;
      })}
    </Container>
  );
};
