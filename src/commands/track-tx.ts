import { Command, flags } from "@oclif/command";
import { createInfuraProvider } from "../providers";
import { parseNetwork } from "../networks";
import { Semaphore } from "await-semaphore";
import { providers } from "ethers";
import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import { isDefined } from "ts-is-present";

export default class TrackTransactions extends Command {
  static description =
    "Find transactions involving an address in a slice of blocks";

  static examples = [
    '$ uni-query track-tx --start -5 --concurrency 5',
    '$ uni-query track-tx 0xdAC17F958D2ee523a2206206994597C13D831ec7 --start 5 --end 10'
  ]

  static flags = {
    help: flags.help({
      char: "h",
    }),
    network: flags.enum({
      options: ["homestead"],
      default: "homestead",
      description: "The network to search on"
    }),
    start: flags.integer({
      required: true,
      description:
        "Index representing the inclusive start of the block range to query",
    }),
    end: flags.integer({
      description:
        "Index representing the exclusive end of the block range to query",
    }),
    concurrency: flags.integer({
      default: 10,
      description: "Maximum number of concurrent requests for data fetching"
    }),
    pretty: flags.boolean({
      description: "Pretty print the json output instead of using ndjson",
    }),
  };

  static args = [
    {
      name: "address",
      required: false,
      description: "The address to inspect transactions for",
    },
  ];

  async run() {
    const { args, flags } = this.parse(TrackTransactions);

    const provider = createInfuraProvider(parseNetwork(flags.network)!);
    const lastBlock = await provider.getBlockNumber();

    const start = flags.start < 0 ? lastBlock + flags.start + 1 : flags.start;
    const end = flags.end ?? lastBlock + 1;

    const blocks = await blockFetch({
      provider,
      concurrency: flags.concurrency,
      start,
      end,
    });

    const relevantBlocks = blocks
      .map((b) => extractRelevantTransactions(b, args.address))
      .filter(isDefined);

    if (flags.pretty) {
      this.log(JSON.stringify(relevantBlocks, null, 2));
    } else {
      // Default formatting to ndjson
      relevantBlocks.forEach((b) => this.log(JSON.stringify(b)));
    }
  }
}

interface BlockFetchParameters {
  readonly provider: providers.Provider;
  readonly concurrency: number;
  readonly start: number;
  readonly end: number;
}

function blockFetch(
  params: BlockFetchParameters
): Promise<BlockWithTransactions[]> {
  if (params.end <= params.start) {
    throw new Error(`Illegal block range: ${params.start}..${params.end}`);
  }

  const semaphore = new Semaphore(params.concurrency);
  const blockPromises = [];
  for (let i = params.start; i < params.end; i++) {
    blockPromises.push(
      semaphore.use(() => params.provider.getBlockWithTransactions(i))
    );
  }
  return Promise.all(blockPromises);
}

function extractRelevantTransactions(
  block: BlockWithTransactions,
  target: string | undefined
): BlockWithTransactions | undefined {
  if (target === undefined) {
    return block;
  } else if (!block.transactions.some((tx) => tx.to === target)) {
    return undefined;
  } else {
    return {
      hash: block.hash,
      difficulty: block.difficulty,
      extraData: block.extraData,
      gasLimit: block.gasLimit,
      gasUsed: block.gasUsed,
      miner: block.miner,
      nonce: block.nonce,
      number: block.number,
      parentHash: block.parentHash,
      timestamp: block.timestamp,
      transactions: block.transactions.filter((tx) => tx.to === target),
    };
  }
}
