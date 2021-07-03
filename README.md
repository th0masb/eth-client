uni-query
=========

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/uni-query.svg)](https://npmjs.org/package/uni-query)
[![Downloads/week](https://img.shields.io/npm/dw/uni-query.svg)](https://npmjs.org/package/uni-query)
[![License](https://img.shields.io/npm/l/uni-query.svg)](https://github.com/th0masb/uni-query/blob/master/package.json)

* [Usage](#usage)
* [Commands](#commands)

# Usage
```sh-session
$ npm install -g uni-query
$ uni-query COMMAND
running command...
$ uni-query (-v|--version|version)
uni-query/0.2.0 linux-x64 node-v14.17.2
$ uni-query --help [COMMAND]
USAGE
  $ uni-query COMMAND
...
```
# Commands
<!-- commands -->
* [`uni-query describe-tx TX`](#uni-query-describe-tx-tx)
* [`uni-query help [COMMAND]`](#uni-query-help-command)
* [`uni-query track-tx [ADDRESS]`](#uni-query-track-tx-address)

## `uni-query describe-tx TX`

Displays raw information about a transaction given its hash

```
USAGE
  $ uni-query describe-tx TX

ARGUMENTS
  TX  The hash of the transaction to describe

OPTIONS
  -h, --help             show CLI help
  --network=(homestead)  [default: homestead]
```

_See code: [src/commands/describe-tx.ts](https://github.com/th0masb/uni-query/blob/v0.2.0/src/commands/describe-tx.ts)_

## `uni-query help [COMMAND]`

display help for uni-query

```
USAGE
  $ uni-query help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `uni-query track-tx [ADDRESS]`

Find transactions involving an address in a slice of blocks

```
USAGE
  $ uni-query track-tx [ADDRESS]

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
  $ uni-query track-tx --start -5 --concurrency 5
  $ uni-query track-tx 0xdAC17F958D2ee523a2206206994597C13D831ec7 --start 5 --end 10
```

_See code: [src/commands/track-tx.ts](https://github.com/th0masb/uni-query/blob/v0.2.0/src/commands/track-tx.ts)_
<!-- commandsstop -->
