import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import GlobalStyle from "@/styles/global";
import muiTheme from "@/styles/muiTheme";
import Layout from "@/components/Layout";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>BookSellz</title>
      </Head>
      <Provider store={store}>
        <StyledThemeProvider theme={muiTheme}>
          <MuiThemeProvider theme={muiTheme}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MuiThemeProvider>
        </StyledThemeProvider>
      </Provider>
    </>
  );
}
