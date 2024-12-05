import { Buffer } from "buffer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { WagmiProvider } from "wagmi";

import { config } from "./wagmi.ts";

import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

const rootEl = document.getElementById("root");

if (rootEl === null) {
  throw new Error("No root element found.");
}

const theme = createTheme();

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
