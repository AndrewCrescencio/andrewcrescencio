import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import { Section } from "./styles";
import { Container } from "../UI/Container";

export const GithubReadme = ({ markdown }) => {
  return (
    <Container>
      <Section>
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkGemoji]}>
          {markdown}
        </ReactMarkdown>
      </Section>
    </Container>
  );
};
