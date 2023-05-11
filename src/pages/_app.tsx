import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import GlobalStyle from "@/styles/global";
import muiTheme from "@/styles/muiTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <Head>
          <title>BookSellz</title>
        </Head>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
}
