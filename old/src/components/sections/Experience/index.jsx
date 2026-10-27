import { Companies } from "@/components/UI/Companies";

export const Experience = ({ companies }) => {
  return (
    <>
      {companies && <Companies data={companies} />}
    </>
  );
};