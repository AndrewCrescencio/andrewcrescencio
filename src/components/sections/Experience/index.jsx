import { Companies } from "@/components/UI/Companies";
import { Company } from "@/components/UI/Company";
import { Projects } from "../Projects";

export const Experience = ({ experience }) => {
  return (
    <>
      {experience.companies && <Companies data={experience.companies}/>}
      {experience.projects && <Projects data={experience.projects}/>}
    </>
  );
};
