import { Heading, SubTitle, Text } from "@/components/typography";
import { Wrapper } from "./styles";

export const Differentials = () => {
  return (
    <>
      <SubTitle marginBottom={["48px"]}>Diferenciais</SubTitle>
      <Wrapper>
        <div>
          <Heading marginBottom={["16px"]}>Interfaces de alta fidelidade</Heading>
          <Text>
            Trabalho com a implementação fiel de interfaces presando pela melhor
            experiência do usuário para atender as expectativas de cada projeto.
          </Text>
        </div>
        <div>
          <Heading marginBottom={["16px"]}>Metodologias Ágeis</Heading>
          <Text>
            Utilizo metodologias e planejamentos otimizados que dinamizam o
            fluxo de produção. Através de feedback e interações constantes,
            garantindo a agilidade e eficiência do processo.
          </Text>
        </div>
        <div>
          <Heading marginBottom={["16px"]}>Qualidade do código</Heading>
          <Text>
            Tenho como minha principal diretriz durante o desenvolvimento a
            qualidade do código seguindo as melhores práticas do mercado.
          </Text>
        </div>
      </Wrapper>
    </>
  );
};
