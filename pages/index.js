import React from "react";
import { createTheme, WuiProvider } from "@welcome-ui/core";
import { Button } from "@welcome-ui/button";

const theme = createTheme();

export default function Root() {
  return (
    <WuiProvider theme={theme}>
      <Button variant="secondary">Welcome!</Button>
    </WuiProvider>
  );
}
