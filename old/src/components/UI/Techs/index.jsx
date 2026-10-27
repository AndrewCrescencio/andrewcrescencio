import { Container, Items } from "./styles";
import { TechItem } from "./TechItem";

export const Techs = ({ data }) => {
  return (
    <Container>
      <p>Tecnologias usadas:</p>
      <Items>
        {data.map((tech) => {
          return <TechItem key={tech.techImage.url} {...tech.techImage} />;
        })}
      </Items>
    </Container>
  );
};
