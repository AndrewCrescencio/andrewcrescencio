import Image from "next/image";
import { Card, CardSubTitle, CardTitle } from "./styles";
import { Responsibilities } from "../Responsibilities";

export const Company = ({ name, logo, role, responsibilities }) => {
  return (
    <Card>
      <Image
        width={logo.width}
        height={logo.height}
        src={logo.url}
        alt={name + " logo"}
      />
      <div>
        <CardTitle>{name}</CardTitle>
        <CardSubTitle>cargo: {role}</CardSubTitle>

        <Responsibilities data={responsibilities} />
      </div>
    </Card>
  );
};
