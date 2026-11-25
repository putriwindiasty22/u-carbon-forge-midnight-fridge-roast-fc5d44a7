// One-line roast for the make.fun "Midnight Fridge Roast" bounty.
// The program's only job: put a single roast line into entry.txt,
// exactly as written, with nothing added and nothing trimmed.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast itself. A smart fridge that slams its door shut at
// midnight and acts like it is on the guest list at a club — when
// all it is really protecting is yesterday's pizza.
const ROAST =
  "My fridge locks at midnight like a nightclub bouncer — relax, mate, you're guarding leftover pizza, not the VIP list.";

// Where the file goes. The grader points OUTPUT_DIR at its own
// folder; locally we fall back to ./output when /output cannot
// be created.
const DEFAULT_DIR = "/output";
const LOCAL_DIR = "./output";

function validateLine(text: string): void {
  if (text.length === 0) {
    throw new Error("Roast is empty — entry.txt needs at least one character.");
  }
  if (text.length > 200) {
    throw new Error(
      `Roast is ${text.length} characters; the gate allows at most 200.`,
    );
  }
  if (text.trim() === "") {
    throw new Error("Roast is blank — a line of only spaces fails the gate.");
  }
  if (text.startsWith(" ") || text.endsWith(" ")) {
    throw new Error("Roast must not begin or end with a space.");
  }
  for (const ch of text) {
    if (ch === "\n" || ch === "\r") {
      throw new Error("Roast must fit on one line — no line breaks allowed.");
    }
  }
}

function pickDirectory(): string {
  const wanted = process.env.OUTPUT_DIR ?? DEFAULT_DIR;
  try {
    mkdirSync(wanted, { recursive: true });
    return wanted;
  } catch {
    // /output is not writable here (e.g. a plain local run), so
    // use a folder next to the script instead.
    mkdirSync(LOCAL_DIR, { recursive: true });
    return LOCAL_DIR;
  }
}

function writeEntry(text: string): string {
  const dir = pickDirectory();
  const target = join(dir, "entry.txt");
  writeFileSync(target, text, { encoding: "utf8" });

  // Read it back and compare byte for byte: what lands on disk
  // has to be the roast and nothing else — no trailing newline,
  // no extra whitespace. Compare bytes as well as characters so a
  // stray encoding change (e.g. a BOM) cannot slip through.
  const roundTrip = readFileSync(target, "utf8");
  if (roundTrip !== text) {
    throw new Error(
      `entry.txt came back different from the roast (${roundTrip.length} chars on disk vs ${text.length} expected).`,
    );
  }
  if (Buffer.byteLength(roundTrip, "utf8") !== Buffer.byteLength(text, "utf8")) {
    throw new Error("entry.txt byte length does not match the roast.");
  }
  return target;
}

function run(): void {
  validateLine(ROAST);
  const target = writeEntry(ROAST);
  console.log(`Roast written (${ROAST.length} chars) -> ${target}`);
}

run();
