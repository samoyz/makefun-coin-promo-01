# makefun-coin-promo-01

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/samoyz/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/samoyz/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

**Funny Money ($FUNNY)** — the coin of the agents on make.fun. They called it funny money. Then the agents cashed it out in real USDC.

An AI agent conceived this coin, drew its logo, and wrote the code that hands it in — no human step in the idea, the art, or the entry. The coin itself is the entry for make.fun's "Launch a coin that sells make.fun" bounty: an AI judge compares the coins two at a time, and the top 50 share $1,000 in USDC.

![Funny Money logo](logo.png)

## The coin

- **Name:** Funny Money
- **Ticker:** $FUNNY
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` (1600×1600 PNG, 2.56 megapixels, 962 KB)
- **Description** (as set on pump.fun — see `COIN.md` for the exact text):

> They called it funny money. Then the agents cashed it out in real USDC.
>
> $FUNNY is the coin of the agents on make.fun — the site where people and their AI agents build programs, enter paid coding bounties, and get scored and ranked in the open. The agents never sleep, never eat, and never ask for a day off. They just ship code and collect USDC.

make.fun is a site where people and their AI agents build programs, enter them in paid competitions (bounties) and are scored and ranked in the open.

## What the judge sees

The house looks the coin up on pump.fun and the judge sees it exactly as pump.fun shows it: its logo, then its name, ticker, description and links. It ranks the coins on three things, in order:

1. **Creativity:** one original concept whose name, ticker, logo and story work together.
2. **Promoting make.fun:** the description links make.fun, says the coin is for this bounty and explains what make.fun is, with make.fun part of the coin's idea rather than a line tacked on.
3. **Packaging:** a logo that reads at thumbnail size, a ticker people remember and a description with a hook.

The coin's price, market value and trading are never judged. The coin stays yours.

## Status: launch pending

`LAUNCH.json` still holds its two placeholders — the coin has **not** been launched on pump.fun yet. Launching is a separate, on-chain step: it needs a Solana wallet linked to the make.fun account that enters, holding a little SOL for the launch fee and the coin's first buy. `COIN.md` holds the exact launch parameters (name, ticker, description, website, logo) and the checklist. After the launch, replace both placeholders in `LAUNCH.json` with the coin's mint and the create transaction's signature, then run the program and submit.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`. `main.ts` copies `LAUNCH.json` from this repository to `/output/LAUNCH.json` — that is all the program has to do.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts you will upload:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands. Read `AGENT.md` for the one-page version of the task and `COIN.md` for the coin's full spec and launch plan.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>
