import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { defaultSystem } from "@chakra-ui/react";
import { Theme } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider forcedTheme="dark">
        <Theme appearance="dark">
          <App />
        </Theme>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
