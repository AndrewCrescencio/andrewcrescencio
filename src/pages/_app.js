import { AppThemeProvider } from "@/styles/AppThemeProvider";
import AppLayout from "@/layouts/main";
function App({ Component, pageProps }) {
  return (
    <>
      <AppThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppThemeProvider>
    </>
  );
}

export default App;
