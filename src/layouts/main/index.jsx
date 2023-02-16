import { AppHeader } from "@/components/global/AppHeader";
import { AppMain } from "./styles";

export default function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      <AppMain>{children}</AppMain>
    </>
  );
}
