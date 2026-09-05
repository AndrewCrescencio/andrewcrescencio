import Image from "next/image";
import { Heading, SubHeading, Text } from "@/components/typography";
import { Responsibilities } from "../Responsibilities";
import { Info, CompanyHeader, CompanyContext, CompanyHighlights, CompanyLogo } from "./styles";

export const Company = ({
  name,
  role,
  time,
  context,
  highlights,
  responsibilities,
  companyImage,
}) => {
  return (
    <Info>
      {companyImage && (
        <CompanyLogo>
          <Image
            src={companyImage.url}
            alt={name + " logo"}
            width={100}
            height={100}
          />
        </CompanyLogo>
      )}
      <CompanyHeader>
        <SubHeading>{name}</SubHeading>
        <Heading marginBottom={["8px"]}>{role}</Heading>
        <SubHeading>{time}</SubHeading>
      </CompanyHeader>
      {context && (
        <CompanyContext>
          <Text color="medium" marginBottom={["16px"]}>{context}</Text>
        </CompanyContext>
      )}
      {highlights && highlights.length > 0 && (
        <CompanyHighlights>
          <Responsibilities data={highlights} />
        </CompanyHighlights>
      )}
      {responsibilities && responsibilities.length > 0 && (
        <CompanyHighlights>
          <Responsibilities data={responsibilities} />
        </CompanyHighlights>
      )}
    </Info>
  );
};