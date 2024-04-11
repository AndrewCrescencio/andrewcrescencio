import { Heading, SubHeading, SubTitle } from "@/components/typography";
import { CompanyLogo, Info, InfoImage } from "./styles";


export const Company = ({
  companyImage,
  companyName,
  companyRole,
  companyTime,
}) => {
  return (
    <Info>
      <InfoImage>
        <CompanyLogo
          src={companyImage.url}
          width={companyImage.width}
          height={companyImage.height}
          alt={companyName + " logo"}
        />
      </InfoImage>
      <div>
        <SubTitle marginBottom={['16px']}>{companyName}</SubTitle>
        <Heading marginBottom={['8px']}>{companyRole}</Heading>
        <SubHeading>{companyTime}</SubHeading>
      </div>
    </Info>
  );
};
