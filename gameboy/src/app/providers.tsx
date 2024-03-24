"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.DYNAMIC_ENVIRONMENT_ID ?? "",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <CssVarsProvider disableTransitionOnChange defaultMode="dark">
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          {props.children}
        </QueryClientProvider>
      </CssVarsProvider>
    </DynamicContextProvider>
  );
}
