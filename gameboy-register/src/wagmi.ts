import { createConfig, http } from "wagmi";

import { baseSepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [metaMask()],
  multiInjectedProviderDiscovery: false,
  transports: {
    [baseSepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
