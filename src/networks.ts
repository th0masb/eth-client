export enum Network {
  Mainnet = "homestead",
}

export function parseNetwork(input: string): Network | undefined {
  switch (input) {
    case "homestead":
      return Network.Mainnet;
    default:
      return undefined;
  }
}
