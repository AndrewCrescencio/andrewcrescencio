import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Title, SubTitle, Text } from "@/components/typography";
import { Wrapper, Item, Meta } from "./styles";

export const Education = ({ items }) => {
  return (
    <Section>
      <Container>
        <Title marginBottom={["64px", "128px"]} textAlign={["center"]}>
          Educação
        </Title>
        <Wrapper>
          {items.map((edu, i) => (
            <Item key={i}>
              <SubTitle marginBottom={["4px"]}>{edu.degree}</SubTitle>
              <Meta>
                <Text>{edu.institution}</Text>
                <Text>{edu.period}</Text>
              </Meta>
            </Item>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};