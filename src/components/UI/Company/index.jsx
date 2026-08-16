import { Heading, SubHeading, SubTitle } from "@/components/typography";
import { Responsibilities } from "../Responsibilities";
import { Info } from "./styles";

export const Company = ({
  name,
  role,
  time,
  responsibilities,
  companyImage,
}) => {
  return (
    <Info>
      {companyImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={companyImage.url} alt={name + " logo"} />
      )}
      <div>
        <SubTitle marginBottom={["16px"]}>{name}</SubTitle>
        <Heading marginBottom={["8px"]}>{role}</Heading>
        <SubHeading>{time}</SubHeading>
        {responsibilities && <Responsibilities data={responsibilities} />}
      </div>
    </Info>
  );
};