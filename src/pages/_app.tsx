import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

import GlobalStyle from "@/styles/global";
import muiTheme from "@/styles/muiTheme";
import Layout from "@/components/Layout";
import { store, persistor } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>BookSellz</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyledThemeProvider theme={muiTheme}>
            <MuiThemeProvider theme={muiTheme}>
              <SnackbarProvider>
                <GlobalStyle />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </SnackbarProvider>
            </MuiThemeProvider>
          </StyledThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
