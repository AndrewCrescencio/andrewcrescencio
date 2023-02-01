import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import { Section } from "./styles";

export const GithubReadme = ({ markdown }) => {
  return (
    <Section>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkGemoji]}>
        {markdown}
      </ReactMarkdown>
    </Section>
  );
};
