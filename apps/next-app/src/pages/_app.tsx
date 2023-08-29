import "@/styles/global.css"

import { CacheProvider, EmotionCache } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { AppProps } from "next/app"
import Head from "next/head"
import * as React from "react"

import KitchenSinkDialog from "@/components/KitchenSink"
import { DialogsContextProvider } from "@/contexts/Dialogs"
import { SnackbarProvider } from "@/contexts/Snackbar"
import createEmotionCache from "@/createEmotionCache"
import theme from "@/theme"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Hydrate state={pageProps.dehydratedState}>
            <DialogsContextProvider>
              <SnackbarProvider>
                <Component {...pageProps} />
              </SnackbarProvider>
              {process.env.NODE_ENV === "development" && <KitchenSinkDialog />}
            </DialogsContextProvider>
          </Hydrate>
          <ReactQueryDevtools
            initialIsOpen={false}
            position="bottom-right"
          />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}
