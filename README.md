uni-query
=========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/uni-query.svg)](https://npmjs.org/package/uni-query)
[![Downloads/week](https://img.shields.io/npm/dw/uni-query.svg)](https://npmjs.org/package/uni-query)
[![License](https://img.shields.io/npm/l/uni-query.svg)](https://github.com/th0masb/uni-query/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g uni-query
$ uni-query COMMAND
running command...
$ uni-query (-v|--version|version)
uni-query/0.1.0 linux-x64 node-v14.17.0
$ uni-query --help [COMMAND]
USAGE
  $ uni-query COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`uni-query describe-tx TX`](#uni-query-describe-tx-tx)
* [`uni-query help [COMMAND]`](#uni-query-help-command)

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

_See code: [src/commands/describe-tx.ts](https://github.com/th0masb/uni-query/blob/v0.1.0/src/commands/describe-tx.ts)_

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
<!-- commandsstop -->
