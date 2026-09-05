import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Title, Text } from "@/components/typography";
import { profile } from "@/data";
import { AboutContent, AboutImage, AboutText } from "./styles";

export const About = () => {
  return (
    <Section id="sobre">
      <Container>
        <Title marginBottom={["32px", "48px"]} textAlign={["center"]}>
          Sobre mim
        </Title>
        <AboutContent>
          <AboutImage>
            {/* <Image
              src="/images/andrew-crescencio.jpg"
              alt="Andrew Crescencio"
              width={400}
              height={500}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
            /> */}
            <Image
              src="/images/andrew-crescencio.jpg"
              alt="Andrew Crescencio"
              width={400}
              height={500}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </AboutImage>
          <AboutText>
            <Text marginBottom={["24px"]}>
              {profile.summary}
            </Text>
            <Text marginBottom={["24px"]}>
              Ao longo da minha carreira trabalhei com fintechs, ERPs e plataformas SaaS,
              atuando principalmente no frontend, mas também com backend, banco de dados,
              infraestrutura e CI/CD.
            </Text>
            <Text marginBottom={["24px"]}>
              Tenho experiência em projetos que envolvem desenvolvimento de novas funcionalidades,
              migração de sistemas legados, arquitetura frontend, Design Systems, integrações
              e otimização de aplicações.
            </Text>
            <Text>
              Meu foco é transformar problemas de negócio em soluções de software eficientes,
              sustentáveis e adequadas ao contexto do produto.
            </Text>
          </AboutText>
        </AboutContent>
      </Container>
    </Section>
  );
};