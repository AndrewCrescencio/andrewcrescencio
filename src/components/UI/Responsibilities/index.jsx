import { Container, Heading, List, ListItem } from "./styles";

export const Responsibilities = ({ data }) => {
  return (
    <Container>
      <Heading>Responsabilidades:</Heading>
      <List>
        {data.map((responsibility, i) => {
          return (
            <ListItem key={"responsibility" + i}>
              {responsibility.description}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
