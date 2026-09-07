import { Companies } from "@/components/UI/Companies";
import { Company } from "@/components/UI/Company";
import { Projects } from "../Projects";

export const Experience = ({ companies, projects }) => {
  return (
    <>
      {companies && <Companies data={companies} />}
      {projects?.length > 0 && <Projects data={projects} />}
    </>
  );
};