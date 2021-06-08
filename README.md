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
uni-query/0.0.1 linux-x64 node-v14.17.0
$ uni-query --help [COMMAND]
USAGE
  $ uni-query COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`uni-query hello [FILE]`](#uni-query-hello-file)
* [`uni-query help [COMMAND]`](#uni-query-help-command)

## `uni-query hello [FILE]`

describe the command here

```
USAGE
  $ uni-query hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ uni-query hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/th0masb/uni-query/blob/v0.0.1/src/commands/hello.ts)_

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
