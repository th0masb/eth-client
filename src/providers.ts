import { providers } from "ethers";
import { Network } from "./networks";

export function createInfuraProvider(network: Network): providers.Provider {
  return new providers.InfuraProvider(network, {
    projectId: process.env.INFURA_PROJECT_ID!,
    projectSecret: process.env.INFURA_PROJECT_SECRET!,
  });
}
