import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { MainContextProvider } from "../context/main";
import { theme } from "../theme";
import "./styles.css";

export default function Application({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <script async src="https://platform.twitter.com/widgets.js" />
          <script async src="https://www.tiktok.com/embed.js" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </MainContextProvider>
  );
}
