import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Title, SubTitle, Heading, SubHeading, Text } from "@/components/typography";
import { CTAButton } from "@/components/UI/CTAButton";
import { projects, profile, siteConfig } from "@/data";
import {
  CaseContainer,
  CaseHeader,
  CaseMeta,
  CaseMetaItem,
  CaseContent,
  CaseSection,
  CaseGallery,
  GalleryImage,
  CaseTechList,
  CaseTechItem,
  CaseCTA,
  BackLink,
} from "@/components/sections/Case/styles";

export default function ProjectCase({ project }) {
  const router = useRouter();

  if (router.isFallback || !project) {
    return (
      <CaseContainer>
        <Container>
          <div style={{ padding: "120px 0", textAlign: "center" }}>
            <Text>Carregando...</Text>
          </div>
        </Container>
      </CaseContainer>
    );
  }

  const { title, description, type, role, company, period, technologies, challenge, solution, results, metrics, image, gallery, projectLink, repositoryLink, confidential, slug } = project;

  const pageTitle = `${title} | ${profile.name}`;
  const pageDescription = description;
  const pageUrl = `${siteConfig.url}/projetos/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description: pageDescription,
              image: ogImage,
              url: pageUrl,
              author: {
                "@type": "Person",
                name: profile.name,
                url: siteConfig.url,
              },
              publisher: {
                "@type": "Person",
                name: profile.name,
              },
              datePublished: period.split(" – ")[0],
            }),
          }}
        />
      </Head>

      <CaseContainer>
        <CaseHeader>
          <Container>
            <BackLink href="/projetos" onClick={(e) => { e.preventDefault(); router.back(); }}>
              ← Voltar aos projetos
            </BackLink>
            <div style={{ marginTop: "32px" }}>
              <CaseMeta>
                <CaseMetaItem>
                  <span className="meta-label">Categoria</span>
                  <span className="meta-value">{type}</span>
                </CaseMetaItem>
                <CaseMetaItem>
                  <span className="meta-label">Papel</span>
                  <span className="meta-value">{role}</span>
                </CaseMetaItem>
                <CaseMetaItem>
                  <span className="meta-label">Empresa</span>
                  <span className="meta-value">{company}</span>
                </CaseMetaItem>
                <CaseMetaItem>
                  <span className="meta-label">Período</span>
                  <span className="meta-value">{period}</span>
                </CaseMetaItem>
              </CaseMeta>
              <Title marginTop={["24px", "32px"]}>{title}</Title>
              <SubTitle marginTop={["16px"]} color="medium">
                {description}
              </SubTitle>
            </div>
          </Container>
        </CaseHeader>

        {image && (
          <div style={{ backgroundColor: "var(--color-black)", padding: "64px 0" }}>
            <Container>
              <div style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "100%" }}>
                <Image
                  src={image}
                  alt={confidential ? `Ilustração representativa do projeto ${title}` : `Screenshot do projeto ${title}`}
                  width={1440}
                  height={810}
                  className="hero-image"
                  priority
                />
              </div>
            </Container>
          </div>
        )}

        <CaseContent>
          <Container>
            <CaseSection>
              <Heading marginBottom={["16px"]}>Contexto</Heading>
              <Text>{description}</Text>
            </CaseSection>

            {challenge && (
              <CaseSection>
                <Heading marginBottom={["16px"]}>Desafio</Heading>
                <Text>{challenge}</Text>
              </CaseSection>
            )}

            {solution && (
              <CaseSection>
                <Heading marginBottom={["16px"]}>Minha atuação</Heading>
                <Text>{solution}</Text>
              </CaseSection>
            )}

            {results && results.length > 0 && (
              <CaseSection>
                <Heading marginBottom={["16px"]}>Resultados</Heading>
                <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {results.map((result, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ color: "var(--color-primary)", marginTop: "4px" }}>→</span>
                      <Text marginBottom={0}>{result}</Text>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            )}

            {metrics && metrics.length > 0 && (
              <CaseSection>
                <Heading marginBottom={["16px"]}>Métricas</Heading>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px" }}>
                  {metrics.map((metric, i) => (
                    <div key={i} style={{ padding: "24px", backgroundColor: "var(--color-navbar-bg)", borderRadius: "12px", border: "1px solid var(--color-divider)" }}>
                      <div style={{ fontSize: "32px", fontWeight: "600", color: "var(--color-primary)", lineHeight: 1 }}>{metric.value}</div>
                      <div style={{ marginTop: "8px", color: "var(--color-on-surface-medium)", fontSize: "14px" }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CaseSection>
            )}

            {technologies && technologies.length > 0 && (
              <CaseSection>
                <Heading marginBottom={["16px"]}>Tecnologias</Heading>
                <CaseTechList>
                  {technologies.map((tech, i) => (
                    <CaseTechItem key={i}>{tech}</CaseTechItem>
                  ))}
                </CaseTechList>
              </CaseSection>
            )}

            {gallery && gallery.length > 0 && (
              <CaseSection>
                <Heading marginBottom={["16px"]}>Galeria</Heading>
                <CaseGallery>
                  {gallery.map((img, i) => (
                    <GalleryImage key={i} src={img} alt={`${title} - imagem ${i + 1}`} />
                  ))}
                </CaseGallery>
              </CaseSection>
            )}

            {(projectLink || repositoryLink) && (
              <CaseSection>
                <Heading marginBottom={["16px"]}>Links</Heading>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {projectLink && (
                    <CTAButton href={projectLink} target="_blank" rel="noopener noreferrer" secondary>
                      Ver projeto
                    </CTAButton>
                  )}
                  {repositoryLink && (
                    <CTAButton href={repositoryLink} target="_blank" rel="noopener noreferrer" secondary>
                      Repositório
                    </CTAButton>
                  )}
                </div>
              </CaseSection>
            )}

            {confidential && (
              <CaseSection style={{ backgroundColor: "rgba(187, 134, 252, 0.08)", border: "1px solid var(--color-primary)", borderRadius: "12px", padding: "24px" }}>
                <Heading marginBottom={["12px"]} style={{ color: "var(--color-primary)" }}>Confidencialidade</Heading>
                <Text>Este projeto está sob acordo de confidencialidade (NDA). Detalhes específicos de negócio, métricas internas e capturas de tela reais não podem ser divulgados. As informações apresentadas aqui são uma representação de alto nível do trabalho realizado.</Text>
              </CaseSection>
            )}
          </Container>
        </CaseContent>

        <CaseCTA>
          <Container>
            <Title marginBottom={["16px"]} textAlign={["center"]}>
              Tem um projeto parecido?
            </Title>
            <Text textAlign={["center"]} marginBottom={["32px", "48px"]} maxWidth="580px" style={{ margin: "0 auto 32px" }}>
              Conte o que você precisa desenvolver, melhorar ou integrar.
            </Text>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
              <CTAButton
                href={profile.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                primary
              >
                WhatsApp
              </CTAButton>
              <CTAButton
                href={profile.contacts.email}
                secondary
              >
                Email
              </CTAButton>
              <CTAButton
                href={profile.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                secondary
              >
                LinkedIn
              </CTAButton>
            </div>
          </Container>
        </CaseCTA>
      </CaseContainer>
    </>
  );
}

export async function getStaticPaths() {
  const paths = projects
    .filter((p) => p.featured)
    .map((project) => ({
      params: { slug: project.slug },
    }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
}