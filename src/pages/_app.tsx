import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import GlobalStyle from "@/styles/global";
import muiTheme from "@/styles/muiTheme";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>BookSellz</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
}
