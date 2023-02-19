import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  return() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* meta tags */}
          <link rel="canonical" href="https://www.andrewcrescencio.com/" />
          <meta
            name="description"
            content="Desenvolvedor Front-end, resolvendo problemas com o poder da tecnologia"
          />
          <meta name="author" content="Andrew Crescencio" />
          <meta name="og:site_name" content="AndrewCrescencio.com" />
          <meta name="og:type" content="website" />
          <meta name="og:title" content="Andrew Crescencio" />
          <meta
            name="og:description"
            content="Desenvolvedor Front-end, resolvendo problemas com o poder da tecnologia"
          />
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
