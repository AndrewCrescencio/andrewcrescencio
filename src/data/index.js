export const profile = {
  name: "Andrew Crescencio",
  role: "Engenheiro de Software | Frontend | Full Stack",
  tagline: "Desenvolvo sistemas web que resolvem problemas reais de negócio.",
  subHeadline: "Mais de 5 anos desenvolvendo aplicações para fintechs, ERPs e plataformas SaaS, do frontend à infraestrutura.",
  summary:
    "Engenheiro de Software com mais de 5 anos de experiência no desenvolvimento de aplicações web. Ao longo da minha carreira trabalhei com fintechs, ERPs e plataformas SaaS, atuando principalmente no frontend, mas também com backend, banco de dados, infraestrutura e CI/CD. Tenho experiência em projetos que envolvem desenvolvimento de novas funcionalidades, migração de sistemas legados, arquitetura frontend, Design Systems, integrações e otimização de aplicações. Meu foco é transformar problemas de negócio em soluções de software eficientes, sustentáveis e adequadas ao contexto do produto.",
  contacts: {
    whatsapp: "https://wa.me/+5511939475095/",
    email: "mailto:andrew_workstation@hotmail.com",
    linkedin: "https://www.linkedin.com/in/andrewcrescencio/",
    github: "https://github.com/AndrewCrescencio",
  },
};

export const companies = [
  {
    name: "Egis ERP",
    role: "Desenvolvedor Full Stack",
    time: "janeiro 2026 – Presente | Remoto",
    context: "Migração completa de ERP web legado para stack moderna.",
    highlights: [
      "Migração da aplicação ERP Web de Vue 2 para Nuxt 4 (Vue 3) usando OpenAI Codex",
      "Migração do backend legado em Delphi para API RESTful com Node.js, Express.js, TypeScript e TypeORM",
      "SQL Server: projetei, otimizei e mantive stored procedures e queries em ambientes de alta escala",
      "Docker: padronizei builds multi-stage em múltiplos projetos, reduzindo tamanho das imagens em 60%+ e deploy em ~45%",
      "CI/CD: implementei e mantive pipelines com GitHub Actions para automação de testes, build e deploy",
    ],
  },
  {
    name: "UNLKD",
    role: "Desenvolvedor Frontend",
    time: "dezembro 2024 – dezembro 2025 | Remoto",
    context: "Desenvolvimento de aplicações web para fintech e banking.",
    highlights: [
      "Desenvolvimento de aplicações web para fintech e banking com Nuxt.js (Vue.js) e TypeScript",
      "Interfaces de backoffice para gestão de usuários, perfis e produtos em serviços financeiros",
      "SSO corporativo integrado com Keycloak e AWS, APIs REST e serviços financeiros",
      "Docker multi-stage: 1 GB+ reduzido para ~220 MB, ~40% mais rápido em deployments",
      "Criação e evolução do Design System da empresa melhorando a escalabilidade do frontend",
      "Documentação de componentes no Storybook, code reviews técnicos e arquitetura frontend",
      "Cursor IDE e workflows assistidos por IA aumentando produtividade e padronização",
    ],
  },
  {
    name: "UNO ERP",
    role: "Desenvolvedor Frontend",
    time: "outubro 2023 – novembro 2024 | Remoto",
    context: "Modernização de ERP legado e evolução contínua da plataforma.",
    highlights: [
      "Desenvolvimento e manutenção de features do sistema ERP web usando Vue.js, Nuxt.js e TypeScript",
      "Migração do sistema ERP web legado de Angular 12 para Vue 3",
      "Evolução da aplicação legada em Angular 12, incluindo correções, melhorias e suporte às funcionalidades existentes",
      "Evolução do Design System da plataforma melhorando a consistência visual e a escalabilidade frontend",
      "Estratégias automatizadas de teste usando Vitest, alcançando 80%+ de cobertura de teste",
      "Padronização de builds Docker multi-stage, reduzindo o tamanho das imagens e aumentando a consistência entre ambientes",
      "Integração de APIs REST e plataformas externas de CRM ao sistema ERP",
      "Code reviews e contribuição para decisões de arquitetura frontend",
    ],
  },
  {
    name: "Duotalk",
    role: "Desenvolvedor Frontend",
    time: "abril 2023 – setembro 2023 | Remoto",
    context: "Plataforma omnichannel de atendimento e vendas em tempo real.",
    highlights: [
      "Desenvolvimento frontend para plataforma omnichannel de atendimento e vendas utilizando Vue 3 e TypeScript",
      "Funcionalidades de comunicação em tempo real utilizando WebSocket",
      "Integração de APIs externas e sistemas CRM para automação de processos e fluxos conversacionais",
      "Melhorias de arquitetura frontend e evolução contínua da plataforma em ambiente de startup de rápido crescimento",
      "Code reviews, discussões técnicas e suporte frontend",
    ],
  },
  {
    name: "Catskillet",
    role: "Desenvolvedor Frontend",
    time: "agosto 2021 – março 2023 | Remoto",
    context: "Desenvolvimento multiplataforma web, WordPress e CMS headless.",
    highlights: [
      "Aplicações web multiplataforma usando Vue.js, Nuxt.js e Angular",
      "Desenvolvimento e manutenção de plugins, temas e Gutenberg blocks para WordPress",
      "Integrações com Strapi CMS, incluindo customizações de schemas, plugins e middlewares",
      "Revisões de código e suporte técnico à equipe de desenvolvimento",
    ],
  },
];

export const projects = [
  {
    id: "polenghi",
    slug: "polenghi",
    title: "Polenghi",
    shortDescription: "Desenvolvimento do site institucional da Polenghi com Strapi CMS headless e frontend em Vue/Nuxt, incluindo modelagem de conteúdo, APIs customizadas e integração completa.",
    description: "Implementação completa do site da Polenghi: configuração e customização do Strapi CMS como headless CMS, modelagem de content-types para conteúdo institucional e produtos, desenvolvimento de plugins e middlewares customizados, criação de APIs REST/GraphQL performáticas, e integração com frontend desacoplado em Vue.js/Nuxt.js.",
    type: "Web Institucional / Headless CMS",
    role: "Desenvolvedor Frontend",
    company: "Catskillet",
    period: "2021 – 2023",
    technologies: ["Strapi CMS", "Vue.js", "Nuxt.js", "Node.js", "TypeScript", "REST API", "GraphQL", "PostgreSQL"],
    challenge: "Estruturar um CMS headless flexível para o site institucional da Polenghi, com schemas para conteúdo dinâmico, validações, permissões e lógica de negócio customizada, garantindo performance e escalabilidade.",
    solution: "Modelagem de content-types e componentes reutilizáveis no Strapi; plugins customizados para funcionalidades específicas; middlewares para autenticação e validação; customização de controllers/services; documentação de APIs para consumo pelo frontend Nuxt.",
    results: [
      "Site institucional Polenghi no ar com CMS headless",
      "Schemas flexíveis para conteúdo institucional e catálogo de produtos",
      "Plugins e middlewares reutilizáveis para futuras expansões",
      "APIs documentadas e otimizadas para frontend",
    ],
    metrics: [],
    image: "/images/polenghi-preview.png",
    gallery: [],
    projectLink: "https://www.polenghi.com.br/",
    repositoryLink: null,
    confidential: false,
    featured: true,
  },
  {
    id: "imep-educacional",
    slug: "imep-educacional",
    title: "IMEP Educacional",
    shortDescription: "Desenvolvimento e manutenção da plataforma educacional IMEP, com aplicações web multiplataforma usando Vue.js, Nuxt.js e Angular para gestão acadêmica e portal do aluno.",
    description: "Desenvolvimento contínuo de aplicações web para a plataforma IMEP Educacional: portal do aluno, sistema de gestão acadêmica, interfaces administrativas e funcionalidades de matrícula. Utilização de Vue.js, Nuxt.js e Angular para criar interfaces ricas, performáticas e escaláveis, com code reviews e práticas de qualidade.",
    type: "Plataforma Educacional / Web Apps",
    role: "Desenvolvedor Frontend",
    company: "Catskillet",
    period: "2021 – 2023",
    technologies: ["Vue.js", "Nuxt.js", "Angular", "TypeScript", "JavaScript", "REST API"],
    challenge: "Entregar aplicações web de qualidade para plataforma educacional com stacks variadas (Vue, Nuxt, Angular), mantendo consistência de código, performance e boas práticas em ambiente de múltiplos produtos.",
    solution: "Desenvolvimento seguindo padrões de cada framework; code reviews rigorosos; componentização reutilizável; testes automatizados; integração contínua; monitoramento de performance.",
    results: [
      "Portal do aluno e gestão acadêmica funcionando em produção",
      "Codebase consistente e manutenível across stacks",
      "Performance otimizada nas aplicações entregues",
      "Novas features entregues continuamente para plataforma educacional",
    ],
    metrics: [],
    image: "/images/imep-preview.webp",
    gallery: [],
    projectLink: "https://imepeducacional.com.br/",
    repositoryLink: null,
    confidential: false,
    featured: true,
  },
  {
    id: "fausp",
    slug: "fausp",
    title: "FAUSP",
    shortDescription: "Desenvolvimento do site da Faculdade de Arquitetura e Urbanismo da USP (FAUSP) com WordPress, temas customizados, blocos Gutenberg e integrações específicas para conteúdo acadêmico.",
    description: "Criação do site institucional da FAUSP no ecossistema WordPress: desenvolvimento de tema customizado responsivo, blocos Gutenberg personalizados para conteúdo acadêmico e institucional, plugins para funcionalidades específicas da faculdade, e integração com sistemas internos da USP.",
    type: "WordPress / Site Institucional",
    role: "Desenvolvedor Frontend",
    company: "Catskillet",
    period: "2021 – 2023",
    technologies: ["WordPress", "PHP", "JavaScript", "Gutenberg", "React", "ACF", "CSS/SCSS"],
    challenge: "Construir site institucional robusto no WordPress para a FAUSP, com blocos Gutenberg customizados para necessidades acadêmicas específicas, tema performático e integrações com sistemas da USP.",
    solution: "Tema child customizado otimizado; blocos Gutenberg com React para conteúdo acadêmico; plugins modulares para funcionalidades específicas; integração com APIs da USP; seguir WordPress Coding Standards.",
    results: [
      "Site institucional FAUSP no ar com WordPress",
      "Blocos Gutenberg customizados para conteúdo acadêmico",
      "Tema responsivo e performático",
      "Integrações com sistemas internos da USP",
    ],
    metrics: [],
    image: "/images/fausp-preview.webp",
    gallery: [],
    projectLink: "https://fausp.edu.br/",
    repositoryLink: null,
    confidential: false,
    featured: true,
  },
];

export const services = [
  {
    id: "web-systems",
    title: "Sistemas Web",
    description: "Desenvolvimento de aplicações web completas, do frontend ao backend, com foco em usabilidade, performance e manutenibilidade.",
    examples: ["Dashboards administrativos", "Portais de clientes", "Sistemas internos", "Ferramentas operacionais"],
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Construção de produtos SaaS escaláveis: multi-tenancy, billing, autenticação, onboarding e arquitetura preparada para crescimento.",
    examples: ["Plataformas B2B", "Ferramentas de produtividade", "Sistemas de gestão", "Marketplaces"],
  },
  {
    id: "integrations-apis",
    title: "Integrações e APIs",
    description: "Integração entre sistemas, APIs REST/GraphQL, webhooks, middleware e sincronização de dados entre plataformas distintas.",
    examples: ["Integração ERP ↔ CRM", "Webhooks e eventos", "APIs públicas/privadas", "Middleware de sincronização"],
  },
  {
    id: "legacy-modernization",
    title: "Modernização de Sistemas",
    description: "Migração de tecnologias legadas, refatoração de código, redução de dívida técnica e preparação para evolução contínua.",
    examples: ["Migração Angular → Vue/React", "Backend legado → Node.js/TypeScript", "Monolito → Serviços", "Docker/CI/CD"],
  },
  {
    id: "frontend-development",
    title: "Desenvolvimento Frontend",
    description: "Interfaces modernas, acessíveis e performáticas com React/Next.js, Vue/Nuxt, Design Systems, Storybook e testes.",
    examples: ["Design Systems", "Componentes reutilizáveis", "SSR/SSG/ISR", "Acessibilidade (WCAG)"],
  },
  {
    id: "maintenance-evolution",
    title: "Manutenção e Evolução",
    description: "Sustentação de aplicações existentes: correções, melhorias de performance, novas features, atualizações de dependências e segurança.",
    examples: ["Correção de bugs críticos", "Otimização de performance", "Novas funcionalidades", "Atualizações de stack"],
  },
];

export const metrics = [
  { label: "Anos de experiência", value: "5+" },
  { label: "Projetos entregues", value: "10+", context: "Carreira completa" },
  { label: "Redução imagens Docker", value: "60%+", context: "Egis ERP" },
  { label: "Melhoria no deploy", value: "~45%", context: "Egis ERP" },
  { label: "Cobertura de testes", value: "80%+", context: "UNO ERP" },
  { label: "Redução Docker", value: "1 GB → ~220 MB", context: "UNLKD" },
  { label: "Melhoria deploy", value: "~40%", context: "UNLKD" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React · Next.js", "Vue · Nuxt", "Angular", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js · Express", "Nest.js", "REST · GraphQL", "TypeScript"],
  },
  {
    category: "Dados",
    items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions", "AWS", "Vercel · Cloudflare"],
  },
  {
    category: "Qualidade",
    items: ["Vitest · Jest", "Cypress · Playwright", "ESLint · Prettier", "Lighthouse"],
  },
  {
    category: "Arquitetura & Métodos",
    items: ["Clean Architecture · DDD", "SOLID · Design Patterns", "TDD · BDD", "Scrum · Kanban"],
  },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário Superior (B2)", detail: "Leitura técnica, redação e comunicação profissional" },
];

export const siteConfig = {
  name: "Andrew Crescencio",
  title: "Engenheiro de Software | Frontend | Full Stack",
  description: "Engenheiro de Software com 5+ anos de experiência em aplicações web para fintechs, ERPs e plataformas SaaS. Desenvolvimento de sistemas, SaaS, integrações, modernização de legados e desenvolvimento frontend.",
  url: "https://www.andrewcrescencio.com",
  ogImage: "/api/og",
  locale: "pt-BR",
};