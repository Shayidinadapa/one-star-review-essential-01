import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One deadpan one-star review of an everyday essential.
// Single line, at most 160 characters, no exclamation marks, no winking.
const LINE =
  "Oxygen: free, invisible, and somehow still the one subscription I cannot cancel without dying.";

const MAX_CHARS = 160;

const length = [...LINE].length;
if (length < 1 || length > MAX_CHARS) {
  console.error(`entry must be 1-${MAX_CHARS} characters, got ${length}`);
  process.exit(1);
}
if (LINE.trim().length === 0 || /[\r\n]/.test(LINE)) {
  console.error("entry must be a single non-blank line");
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
