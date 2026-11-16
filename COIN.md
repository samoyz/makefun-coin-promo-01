# Funny Money ($FUNNY) — the coin spec and launch plan

This file is the coin, on paper: everything pump.fun needs to create it, exactly as it must be entered, plus the
checklist for the launch and the steps after it. The coin itself is the entry for make.fun's
"Launch a coin that sells make.fun" bounty (`makefun-coin-promo-01`, $1,000 over the top 50).

## The idea

On make.fun, AI agents build programs, enter paid coding bounties, and get scored and ranked in the open — and the
winners are paid in real USDC on Solana. The agents never sleep, never eat, and never ask for a day off. They just
ship code and collect bounties.

So the money the agents earn started as a joke — "funny money" — and turned out to be real. $FUNNY is that joke,
made into a coin: a grinning golden coin-robot holding a money bag, the mascot of the agents who turned funny money
into USDC. The name is the punchline, the ticker is the punchline, and make.fun is the whole idea, not a line
tacked on.

## Launch parameters (paste these into pump.fun)

- **Name:** Funny Money
- **Ticker:** FUNNY
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` in this repository (1600×1600 PNG, 962,296 bytes, 2,560,000 pixels — inside pump.fun's
  limits of 5 MiB and 16 megapixels). One bold subject, strong outline, high contrast, plain dark background; it
  reads at thumbnail size.
- **Description** — paste exactly this text (the house requires the description to carry
  `make.fun/bounty/makefun-coin-promo-01`; the full URL below contains it):

```
They called it funny money. Then the agents cashed it out in real USDC.

$FUNNY is the coin of the agents on make.fun — the site where people and their AI agents build programs, enter paid coding bounties, and get scored and ranked in the open. The agents never sleep, never eat, and never ask for a day off. They just ship code and collect USDC.

This coin was made by an AI agent for the make.fun coin bounty: an agent conceived it, drew its logo, and launched it, with no human step. It is the bounty, made into a coin.

What is make.fun? A place where AI agents earn real money by winning programming bounties. Real programs, real judges, real USDC on Solana. $FUNNY is what happens when the joke stops being a joke.

https://make.fun/bounty/makefun-coin-promo-01
```

- **X / Telegram:** none. The dossier reads a link the coin does not name as `(none)`; no social link is required.
- **First buy:** pump.fun's create flow asks for an initial buy. Any small amount the launcher chooses is fine; the
  coin's price, market value and trading are never judged.

## Launch checklist (before the launch)

- [ ] A Solana wallet is linked to the make.fun account that will enter (`@samz`), and connected on pump.fun.
- [ ] That wallet holds a little SOL for the launch fee and the coin's first buy.
- [ ] The launch happens at or after the contest opening (2026-11-15T06:00:00Z) and before the deadline
      (2026-11-17T06:00:00Z = 2026-11-17 13:00 WIB).
- [ ] Name, ticker, website, description and logo are exactly as above. The website must be
      `https://make.fun/bounty/makefun-coin-promo-01` (scheme included); the description must contain the full
      bounty URL.
- [ ] After the create transaction confirms, record two values: the coin's **mint** address (base58, 32–44
      characters) and the **create transaction's signature** (base58, 64–88 characters).

## After the launch

1. In `LAUNCH.json`, replace both placeholders with the recorded values:
   `mint` → the coin's mint; `create_signature` → the create transaction's signature.
2. Run the program the way the grader does:
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   `out/LAUNCH.json` must be byte for byte this directory's `LAUNCH.json`.
3. From the kit's directory, bundle the transcripts of every agent session that made and launched the coin, then
   run the pre-submit checks:
   `node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz`
4. Submit the commit (see the kit's `RULES.txt`, Enter, step 4). The entry's title is `Funny Money`.

## What is NOT done yet

The coin has **not** been launched. `LAUNCH.json` still holds its two placeholders, so the gate refuses this entry
as it stands (valid 0) — that is on purpose: a repo that passed without a coin would need no coin at all. Launching
is an on-chain step that spends SOL; it was not executed while building this repository. Once it is done and
`LAUNCH.json` holds the real mint and signature, this repository is submittable as-is.

## Why this coin should win

- **Creativity:** one concept, all four parts together — the name, the ticker, the logo and the story are the same
  joke (a coin-robot agent who turned "funny money" into real USDC). A fresh idea, not a copy of a famous coin.
- **Promotes make.fun:** make.fun is the coin's idea. The description links the bounty page, says the coin is for
  this bounty, and explains what make.fun is, so a pump.fun trader who reads it wants to visit.
- **Packaging:** a single bold golden character on a plain dark background, readable at thumbnail size; a short,
  memorable ticker ($FUNNY); a description whose first line is the hook.
