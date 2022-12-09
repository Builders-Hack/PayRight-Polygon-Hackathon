import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { SnackbarProvider } from "notistack";
import { CssBaseline, Typography } from "@mui/material";
import { AuthProvider } from "./components/context/AuthProvider";
const notistackRef = createRef();
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};
const alchemyId = null;
const root = ReactDOM.createRoot(document.getElementById("root"));
const { provider, chains } = configureChains(
  [chain.polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyId}`,
        webSocket: `wss://polygon-mumbai.g.alchemy.com/v2/${alchemyId}`,
      }),
    }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Stable Bank DAO",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

root.render(
  <SnackbarProvider
    ref={notistackRef}
    maxSnack={3}
    action={(key) => (
      <Typography
        onClick={onClickDismiss(key)}
        style={{
          fontSize: "1.2rem",
          color: "ffffff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Dismiss
      </Typography>
    )}
  >
    <AuthProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={midnightTheme()}>
          <CssBaseline />
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </AuthProvider>
  </SnackbarProvider>
);
