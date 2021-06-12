import {Command, flags} from '@oclif/command'
import {providers} from 'ethers'

export default class DescribeTransaction extends Command {
  static description = 'Displays raw information about a transaction given its hash'

  static flags = {
    help: flags.help({char: 'h'}),
    network: flags.enum({options: ["homestead"], default: "homestead"}),
  }

  static args = [
    {
      name: 'tx',
      required: true,
      description: 'The hash of the transaction to describe'
    }
  ]

  async run() {
    const {args, flags} = this.parse(DescribeTransaction)

    const [txHash, network] = [args.tx, flags.network]
    const provider = new providers.InfuraProvider(network, {
      projectId: process.env.INFURA_PROJECT_ID!,
      projectSecret: process.env.INFURA_PROJECT_SECRET!,
    })

    const tx = await provider.getTransaction(txHash)
    this.log(JSON.stringify(tx, null, 2))
  }
}
