// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<= 200 chars) to entry.txt.
// Stdlib only, zero network requests.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: a microwave that will not stop announcing itself.
const ROAST =
  "My microwave beeps five times when dinner's done, like a toddler demanding applause for finishing his peas.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ROAST, "utf8");

// Read-back check: exactly one line, 1-200 chars, not only whitespace.
import { readFileSync } from "node:fs";
const back = readFileSync(outPath, "utf8");
if (back !== ROAST) throw new Error("read-back mismatch");
if (back.length < 1 || back.length > 200) throw new Error("line length out of range");
if (back.trim().length === 0) throw new Error("line is only whitespace");
if (back.includes("\n")) throw new Error("more than one line");
console.log(`Wrote ${ROAST.length} chars to ${outPath} (read-back OK)`);
