eth-client
=========

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/eth-client.svg)](https://npmjs.org/package/@th0masb/eth-client)
[![Downloads/week](https://img.shields.io/npm/dw/eth-client.svg)](https://npmjs.org/package/@th0masb/eth-client)
[![License](https://img.shields.io/npm/l/eth-client.svg)](https://github.com/th0masb/eth-client/blob/master/package.json)

* [Usage](#usage)
* [Commands](#commands)

# Usage
```sh-session
$ npm install -g @th0masb/eth-client
$ eth-client COMMAND
e.g
$ eth-client (-v|--version|version)
$ eth-client --help
$ eth-client --help [COMMAND]
...
```
# Commands
<!-- commands -->
* [`eth-client describe-tx TX`](#eth-client-describe-tx-tx)
* [`eth-client help [COMMAND]`](#eth-client-help-command)
* [`eth-client track-tx [ADDRESS]`](#eth-client-track-tx-address)

## `eth-client describe-tx TX`

Displays raw information about a transaction given its hash

```
USAGE
  $ eth-client describe-tx TX

ARGUMENTS
  TX  The hash of the transaction to describe

OPTIONS
  -h, --help             show CLI help
  --network=(homestead)  [default: homestead]
```

_See code: [src/commands/describe-tx.ts](https://github.com/th0masb/eth-client/blob/v0.2.4/src/commands/describe-tx.ts)_

## `eth-client help [COMMAND]`

display help for eth-client

```
USAGE
  $ eth-client help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `eth-client track-tx [ADDRESS]`

Find transactions involving an address in a slice of blocks

```
USAGE
  $ eth-client track-tx [ADDRESS]

ARGUMENTS
  ADDRESS  The address to inspect transactions for

OPTIONS
  -h, --help                 show CLI help
  --concurrency=concurrency  [default: 10] Maximum number of concurrent requests for data fetching
  --end=end                  Index representing the exclusive end of the block range to query
  --network=(homestead)      [default: homestead] The network to search on
  --pretty                   Pretty print the json output instead of using ndjson
  --start=start              (required) Index representing the inclusive start of the block range to query

EXAMPLES
  $ eth-client track-tx --start -5 --concurrency 5
  $ eth-client track-tx 0xdAC17F958D2ee523a2206206994597C13D831ec7 --start 5 --end 10
```

_See code: [src/commands/track-tx.ts](https://github.com/th0masb/eth-client/blob/v0.2.4/src/commands/track-tx.ts)_
<!-- commandsstop -->
