import { List, ListItem } from "./styles";

export const Responsibilities = ({ data }) => {
  return (
    <List>
      {data.map((responsibility, i) => {
        return <ListItem key={"responsibility" + i}>{responsibility}</ListItem>;
      })}
    </List>
  );
};
