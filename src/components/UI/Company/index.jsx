import { Heading, SubHeading, SubTitle } from "@/components/typography";
import { CompanyLogo, Info } from "./styles";


export const Company = ({
  companyImage,
  companyName,
  companyRole,
  companyTime,
}) => {
  return (
    <Info>
      <CompanyLogo
        src={companyImage.url}
        width={companyImage.width}
        height={companyImage.height}
        alt={companyName + " logo"}
      />
      <div>
        <SubTitle marginBottom={['16px']}>{companyName}</SubTitle>
        <Heading marginBottom={['8px']}>{companyRole}</Heading>
        <SubHeading>{companyTime}</SubHeading>
      </div>
    </Info>
  );
};
