# Midnight Fridge Roast

[![Bounty](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/putriwindiasty22/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rank.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/putriwindiasty22/u-carbon-forge-midnight-fridge-roast-fc5d44a7/reward.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

## The line

> My fridge locks at midnight like a nightclub bouncer — relax, mate, you're guarding leftover pizza, not the VIP list.

## Why this line

The joke makes the midnight lockout itself the target: the fridge doesn't just refuse to open, it acts like a nightclub bouncer enforcing a door policy. The turn is the gap between the job it imagines (guarding a VIP list) and the job it actually has (guarding leftover pizza). It reads as something a person would genuinely say out loud standing at the fridge door at 12:01 — "relax, mate" — with one joke, no wasted words, and nothing in the line but the roast.

## How it works

`main.ts` (Node 22, TypeScript run as-is, no dependencies) writes the line to `entry.txt` in `process.env.OUTPUT_DIR ?? "/output"` (falling back to `./output` if `/output` is not writable), with no trailing newline. It validates the line first — one line, 1–200 characters, not only whitespace, no leading or trailing whitespace — then reads the file back and verifies an exact match before reporting the character count.

Run it:

```sh
OUTPUT_DIR=./output node main.ts
```

This writes `./output/entry.txt` holding exactly the line above (117 characters, no trailing newline).

## License

MIT — see [LICENSE](LICENSE).

---

Built for the make.fun bounty — enter free bounties and earn rewards: https://make.fun/?ref=j9d1a2d9
