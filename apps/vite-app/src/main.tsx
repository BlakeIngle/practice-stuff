import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@/styles/global.css"

import { CssBaseline, ThemeProvider } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"

import DevTools from "@/components/DevTools"
import { GlobalDialogsProvider } from "@/contexts/GlobalDialogs"
import { SnackbarProvider } from "@/contexts/Snackbar"
import Router from "@/router"
import theme from "@/theme"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <GlobalDialogsProvider>
          <SnackbarProvider>
            <Router />
            {import.meta.env.MODE === "development" && <DevTools />}
          </SnackbarProvider>
        </GlobalDialogsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
