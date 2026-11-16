// Funny Money ($FUNNY) — makefun-coin-promo-01 entry (Node 22, standard library only).
//
// This program copies LAUNCH.json from the repository root to /output/LAUNCH.json,
// where the gate reads it. That is all it has to do. The entry is the coin itself:
// an agent launches Funny Money on pump.fun, LAUNCH.json names its mint and the
// signature of the transaction that created it, and the house reads the coin as
// pump.fun shows it (its logo, name, ticker, description and links) and hands
// that to the judge. Nothing this program writes about the coin is judged.
//
// LAUNCH.json still holds its two placeholders until the coin is launched on
// pump.fun from a wallet linked to the make.fun account; the placeholders hold
// underscores, which are outside base58, so the gate refuses the entry as it
// stands. Replace both values with the launched coin's mint and create signature
// before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SOURCE = join(BOT_DIR, 'LAUNCH.json');
const TARGET = join(OUTPUT_DIR, 'LAUNCH.json');

// The file must read as JSON with the two fields the gate expects, and stay within
// the gate's size cap for LAUNCH.json (16,384 bytes). This only checks shape; the
// house, not this program, verifies the coin on pump.fun.
let raw: Buffer;
let parsed: unknown;
try {
  raw = readFileSync(SOURCE);
  if (raw.length > 16384) {
    console.error(`LAUNCH.json is ${raw.length} bytes; the gate allows at most 16384.`);
    process.exit(1);
  }
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`LAUNCH.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as Record<string, unknown>).mint !== 'string' ||
  typeof (parsed as Record<string, unknown>).create_signature !== 'string'
) {
  console.error('LAUNCH.json must be a JSON object with string fields "mint" and "create_signature".');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(SOURCE, TARGET);
} catch (err) {
  console.error(`LAUNCH.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
