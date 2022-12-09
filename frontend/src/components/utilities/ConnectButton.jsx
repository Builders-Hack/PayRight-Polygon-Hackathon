import React from "react";
import { Button } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectionButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <Button
            sx={{
              background: "#fff",
              height: "120%",
              fontSize: "2rem",
              borderRadius: "10%",
              width: "100%",
              minWidth: "15rem",
            }}
            onClick={
              !connected
                ? openConnectModal
                : chain.unsupported
                ? openChainModal
                : openAccountModal
            }
            type="button"
          >
            {!connected
              ? " Connect Wallet"
              : chain.unsupported
              ? "   Wrong network"
              : !ready
              ? "Loading"
              : account.displayName}
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
};
