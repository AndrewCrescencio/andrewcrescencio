import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import { Section } from "../../layout/Section";
import { Box } from "./styles";
import { Title } from "@/components/typography";

export const GithubReadme = ({ markdown }) => {
  return (
    <Section black>
      <Title marginBottom={["128px"]} textAlign={['center']}>Github</Title>
      <Box>
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkGemoji]}>
          {markdown}
        </ReactMarkdown>
      </Box>
    </Section>
  );
};
