import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { MainContextProvider } from "../context/main";
import { theme } from "../theme";
import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";
import { AnalyticsProvider } from "use-analytics";
import "./styles.css";

/* Initialize analytics & load plugins */
const analytics = Analytics({
  app: "funk-27",
  plugins: [
    googleAnalytics({
      trackingId: "UA-179141332-1",
    }),
  ],
});

export default function Application({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <AnalyticsProvider instance={analytics}>
          <Head>
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <Component {...pageProps} />
        </AnalyticsProvider>
      </ThemeProvider>
    </MainContextProvider>
  );
}
