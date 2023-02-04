import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import { Section } from "../UI/Section";
import { Box } from "./styles";

export const GithubReadme = ({ markdown }) => {
  return (
    <Section>
      <Box>
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkGemoji]}>
          {markdown}
        </ReactMarkdown>
      </Box>
    </Section>
  );
};
