// Midnight Fridge Roast — make.fun bounty
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// One line, one roast: at midnight the smart fridge locks itself and
// plays nightclub bouncer — while all it guards is leftover pizza,
// not the VIP list.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge locks at midnight like a nightclub bouncer — relax, mate, you're guarding leftover pizza, not the VIP list.";

function resolveOutputDir(): string {
  const requested = process.env.OUTPUT_DIR ?? "/output";
  try {
    mkdirSync(requested, { recursive: true });
    return requested;
  } catch {
    const fallback = "./output";
    mkdirSync(fallback, { recursive: true });
    return fallback;
  }
}

function main(): void {
  // Gate: a single line of 1-200 characters, not only whitespace.
  // The joke's turn: the fridge fancies itself guarding a VIP list,
  // but its whole job is leftover pizza — so the roast aims at the
  // midnight rule itself, not smart homes in general.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(
      `Roast line must be 1-200 characters to pass the gate, got ${LINE.length}.`,
    );
  }
  if (LINE.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("Line must not start or end with whitespace.");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("Line must be a single line.");
  }

  const dir = resolveOutputDir();
  const path = join(dir, "entry.txt");
  // No trailing newline: the file holds exactly the line, nothing else.
  writeFileSync(path, LINE, "utf8");

  const back = readFileSync(path, "utf8");
  if (back !== LINE) {
    throw new Error(
      "Read-back verification failed: entry.txt does not match the line exactly.",
    );
  }

  console.log(`Wrote ${LINE.length} characters to ${path}`);
}

main();
