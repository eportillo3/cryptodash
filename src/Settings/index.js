import React from "react";
import ConfirmButton from "./ConfirmButton";
import WelcomeMessage from "./WelcomeMessage";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

export default function () {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}
