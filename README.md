# Fridge Bouncer

[![Bounty](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/putriwindiasty22/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rank.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/putriwindiasty22/u-carbon-forge-midnight-fridge-roast-fc5d44a7/reward.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

A one-line entry for the make.fun **Midnight Fridge Roast** bounty: a smart fridge that locks itself after midnight gets told exactly what it is guarding.

## The roast

> My fridge locks at midnight like a nightclub bouncer — relax, mate, you're guarding leftover pizza, not the VIP list.

## Running it

Requires Node 22 or later. No dependencies to install — the script uses only the Node standard library.

```sh
OUTPUT_DIR=./output node main.ts
```

That creates `./output/entry.txt` containing exactly the line above: 117 characters, no trailing newline. If `OUTPUT_DIR` is not set, the script writes to `/output` and falls back to `./output` when that directory cannot be created.

## What the script does

`main.ts` keeps the roast in a single constant, checks it against the bounty gate, writes it out, then reads the file back and confirms the contents match character for character and byte for byte:

- between 1 and 200 characters long;
- a single line — no line breaks, no leading or trailing space;
- more than whitespace.

If any check fails, the script throws before writing anything bad to disk.

## The joke, in one breath

The fridge imagines itself on door duty at a club, deciding who makes the VIP list. In reality it is standing guard over a box of leftover pizza. The whole roast is that gap — the petty midnight rule, mocked by the thing it is actually protecting — delivered in the voice of someone talking to the fridge at 12:01 in the morning.

## License

MIT. See [LICENSE](LICENSE) for the full text.

---

Entry for the make.fun bounty — https://make.fun/?ref=j9d1a2d9
