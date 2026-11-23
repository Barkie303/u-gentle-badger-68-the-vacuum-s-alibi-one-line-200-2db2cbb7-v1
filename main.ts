// The Vacuum's Alibi — one line, max 200 chars.
// The vacuum cleaner defends itself against the charge of making the mess.
// The alibi holds up in court: no dust was created, only relocated.
const line =
  "I didn't make this mess — I just moved it somewhere you can't see it yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const { writeFileSync, mkdirSync } = require("node:fs");
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n");
console.log(line);
