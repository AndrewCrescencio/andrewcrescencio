import { Logo } from "@/components/global/Logo";
import { SubTitle, Title } from "@/components/typography";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "white",
          background: "#181818",
          width: "100%",
          height: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: "128px",
        }}
      >
        <span style={{display: 'flex', flexDirection: 'column'}}>
          <Title marginBottom={["16px"]}>Andrew Crescencio</Title>
          <br />
          <SubTitle>Desenvolvedor Front-end</SubTitle>
        </span>
        <Logo/>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
