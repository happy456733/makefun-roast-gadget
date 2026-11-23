// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<= 200 chars) to entry.txt.
// Stdlib only, zero network requests.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: a microwave that will not stop announcing itself.
const ROAST =
  "My microwave beeps five times when it's done, like a toddler demanding applause for finishing its peas.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote ${ROAST.length} chars to ${join(outDir, "entry.txt")}`);
