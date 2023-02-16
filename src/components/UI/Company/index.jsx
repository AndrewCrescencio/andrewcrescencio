import { Card, CardImage, CardSubTitle, CardTitle } from "./styles";
import { Responsibilities } from "../Responsibilities";
import { Techs } from "../Techs";

export const Company = ({ name, logo, role, responsibilities, techs }) => {
  return (
    <Card>
      <CardImage
        width={logo.width}
        height={logo.height}
        src={logo.url}
        alt={name + " logo"}
      />
      <div>
        <CardTitle>{name}</CardTitle>
        <CardSubTitle>cargo: {role}</CardSubTitle>
        <Responsibilities data={responsibilities} />
        <Techs data={[...techs]} />
      </div>
    </Card>
  );
};
