import { Responsibilities } from "../Responsibilities";
import {
  CompanyLogo,
  CompanyName,
  CompanyRole,
  CompanyTime,
  Info,
  InfoBody,
  InfoHeader,
} from "./styles";

export const CompanyInfo = ({ name, logo, role, time, responsibilities }) => {
  return (
    <Info>
      <InfoHeader>
        <CompanyLogo
          width={logo.width}
          height={logo.height}
          src={logo.url}
          alt={name + " logo"}
        />
        <div>
          <CompanyName>{name}</CompanyName>
          <CompanyRole>{role}</CompanyRole>
          <CompanyTime>{time}</CompanyTime>
        </div>
      </InfoHeader>
      <InfoBody>
        <Responsibilities data={responsibilities} />
      </InfoBody>
    </Info>
  );
};
